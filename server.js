const dns = require('node:dns');
const path = require('node:path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const urlsById = new Map();
const idsByUrl = new Map();
let nextId = 1;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

function parseUrl(value) {
  if (typeof value !== 'string' || !/^https?:\/\/[^\s/]+(?:[/?#][^\s]*)?$/i.test(value)) {
    return null;
  }

  try {
    const parsed = new URL(value);
    return parsed.hostname ? parsed : null;
  } catch {
    return null;
  }
}

app.post('/api/shorturl', (request, response) => {
  const originalUrl = request.body.url;
  const parsedUrl = parseUrl(originalUrl);

  if (!parsedUrl) {
    return response.json({ error: 'invalid url' });
  }

  dns.lookup(parsedUrl.hostname, (error) => {
    if (error) {
      return response.json({ error: 'invalid url' });
    }

    let shortUrl = idsByUrl.get(originalUrl);
    if (!shortUrl) {
      shortUrl = nextId++;
      idsByUrl.set(originalUrl, shortUrl);
      urlsById.set(shortUrl, originalUrl);
    }

    return response.json({ original_url: originalUrl, short_url: shortUrl });
  });
});

app.get('/api/shorturl/:shortUrl', (request, response) => {
  const shortUrl = Number.parseInt(request.params.shortUrl, 10);
  const originalUrl = urlsById.get(shortUrl);

  if (!originalUrl) {
    return response.status(404).json({ error: 'short url not found' });
  }

  return response.redirect(originalUrl);
});

app.listen(port, () => {
  console.log(`URL shortener listening on port ${port}`);
});