# URL Shortener Microservice

A lightweight URL shortener built with Express.js. This project provides a simple API for creating shortened URLs and redirecting users to their original destinations.

> Developed as an implementation of the [freeCodeCamp URL Shortener Microservice](https://www.freecodecamp.org/learn/back-end-development-and-apis/#url-shortener-microservice) project.

## Live Demo

Try the deployed application here:

**[https://url-shortener-microservice-trvf.onrender.com](https://url-shortener-microservice-trvf.onrender.com)**

## Features

- Create a shortened URL from a valid URL.
- Receive a unique numeric identifier for each shortened URL.
- Redirect seamlessly from a shortened URL to its original destination.
- Simple REST API built with Express.js.
- Easy to run locally or deploy to a hosting platform.

## API Endpoints

### Create a shortened URL

```http
POST /api/shorturl
```

Submit the original URL as form data using the `url` field.

#### Example request

```bash
curl -X POST \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "url=https://freecodecamp.org" \
  https://url-shortener-microservice-trvf.onrender.com/api/shorturl
```

#### Example response

```json
{
  "original_url": "https://freecodecamp.org",
  "short_url": 1
}
```

### Redirect to the original URL

```http
GET /api/shorturl/:short_url
```

Replace `:short_url` with the numeric identifier returned when the shortened URL was created.

#### Example

```bash
curl -i https://url-shortener-microservice-trvf.onrender.com/api/shorturl/1
```

A valid short URL redirects to the corresponding original URL.

## Running the Project Locally

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- npm, which is included with Node.js

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Dieu-Merci-Ndenga/url-shortener-microservice.git
   ```

2. Navigate to the project directory:

   ```bash
   cd url-shortener-microservice
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm start
   ```

5. Open the application in your browser:

   ```text
   http://localhost:3000
   ```

## Local API Examples

Create a shortened URL:

```bash
curl -X POST \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "url=https://freecodecamp.org" \
  http://localhost:3000/api/shorturl
```

Follow a shortened URL:

```bash
curl -i http://localhost:3000/api/shorturl/1
```

## Project Structure

```text
.
├── public/          # Static frontend assets, if applicable
├── views/           # Application views, if applicable
├── server.js        # Express application entry point
├── package.json     # Project metadata and scripts
└── README.md        # Project documentation
```

> The exact file structure may vary as the project evolves.

## Error Handling

When an invalid URL is submitted, the API returns an error response rather than creating a shortened URL. Make sure the submitted value includes a valid protocol, such as `http://` or `https://`.

## Technologies Used

- **Node.js** — JavaScript runtime
- **Express.js** — Web application framework
- **REST API** — API design and communication
- **Render** — Deployment platform for the live demo

## Development

To run the application during development, start the server with:

```bash
npm start
```

The application will be available at `http://localhost:3000` unless a different port is configured by the project.

## License

This project is available for educational and demonstration purposes.
