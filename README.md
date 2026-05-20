# Top Video Games

A React app for browsing the highest-rated video games. Powered by the
[RAWG API](https://rawg.io/apidocs), with API calls proxied through Netlify
serverless functions to keep the API key out of the client bundle.

## Features

- Browse top-rated games filtered by date and score
- Game detail modal with cover image, description, rating and screenshots
- Platform icons for each game
- Search games by title
- Smooth animations with Framer Motion

## Tech Stack

| Layer | Tech |
|-------|------|
| UI | React 17 |
| State | Redux + Redux Thunk |
| Routing | React Router DOM v5 |
| Styles | Styled Components |
| Animations | Framer Motion + react-lottie |
| API proxy | Netlify Functions |
| Data | RAWG API |

## Netlify Functions

| Function | Purpose |
|----------|---------|
| `all` | Paginated game list |
| `gamedetails` | Single game detail + screenshots |
| `search` | Search by title |

## Getting Started

1. Get a free API key at [rawg.io](https://rawg.io/apidocs)
2. Create a `.env` file:

```env
REACT_APP_API_KEY=your_rawg_api_key
```

3. Install and run:

```bash
npm install
npm start
```

Dev server proxies Netlify functions via `localhost:9999`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start dev server on localhost:3000 |
| `npm run build` | Build for production |
| `npm test` | Run tests |

