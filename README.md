# Top Video Games

> A React app for browsing the highest-rated video games, powered by the [RAWG API](https://rawg.io/apidocs).

![React](https://img.shields.io/badge/React-17-61DAFB?style=flat&logo=react&logoColor=black)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=flat&logo=redux&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat&logo=sass&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)

🔗 **[Live Demo](https://top-videogames-portal.netlify.app/)**

![Demo](assets/demo.gif)

## About

Built to get hands-on experience with Redux and real-world API integration. The RAWG API returns a lot of nested data, so it was a good challenge to model that in a Redux store and keep the UI in sync. API calls are proxied through Netlify serverless functions to avoid exposing the API key in the client bundle.

## Features

- 🎮 Browse top-rated games filtered by date and score
- 🔍 Search games by title
- 📋 Game detail modal with cover image, description, rating and screenshots
- 🕹️ Platform icons for each game
- ✨ Smooth animations powered by Framer Motion

## Tech Stack

| Layer | Technology |
|-------|-----------|
| UI | React 17 |
| State | Redux + Redux Thunk |
| Routing | React Router DOM v5 |
| Styles | Styled Components |
| Animations | Framer Motion + react-lottie |
| API proxy | Netlify Functions |
| Data | RAWG API |

## Getting Started

1. Get a free API key at [rawg.io](https://rawg.io/apidocs)
2. Create a `.env` file in the root:

```env
REACT_APP_API_KEY=your_rawg_api_key
```

3. Install and run:

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The dev server proxies Netlify functions via `localhost:9999`.

## Netlify Functions

| Function | Purpose |
|----------|---------|
| `all` | Paginated game list |
| `gamedetails` | Single game detail and screenshots |
| `search` | Search by title |

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start dev server |
| `npm run build` | Build for production |
| `npm test` | Run tests |

## Contributing

Found a bug or have an idea? Feel free to open an issue.

## License

MIT
