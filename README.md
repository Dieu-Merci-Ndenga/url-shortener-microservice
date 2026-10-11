# URL Shortener Microservice

A small Express implementation of the freeCodeCamp URL Shortener Microservice exercise.

## Run locally

```bash
npm install
npm start
```

Open `http://localhost:3000`, or use the API directly:

```bash
curl -X POST -d 'url=https://freecodecamp.org' http://localhost:3000/api/shorturl
curl -i http://localhost:3000/api/shorturl/1
```