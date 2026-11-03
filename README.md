# Hero Apps (HERO.IO)

Live: https://hero-apps-nidan.netlify.app/

An app-store style catalogue built with React. Browse trending apps, search the full list, open an app's details with a rating chart, and keep a list of installed apps in the browser.

## Features

- Home: hero banner, stats and the first 8 apps as trending.
- All Apps: 62 apps from `public/Apps.json`, with case-insensitive live search by title and a "No App Found" state.
- App Details: downloads, reviews, average rating, description, and a horizontal Recharts bar chart of the 5 to 1 star breakdown.
- Install: the Install button saves the app id to localStorage and switches to Installed; a toast confirms it.
- My Installation: lists installed apps, uninstall with a toast, sort by app size (low to high or high to low).
- Errors: unknown app ids show an App Not Found page; unknown routes show a 404 page.
- Loading spinner while route data loads.

## Stack

React 19, Vite 7, React Router 7, Recharts 3, Tailwind CSS 4, DaisyUI 5, react-toastify. Hosted on Netlify.

## Run locally

```bash
git clone https://github.com/Nidan73/hero-apps.git
cd hero-apps
npm install
npm run dev
```

## Scripts

- `npm run dev`: Vite dev server
- `npm run build`: production build
- `npm run preview`: preview the build
- `npm run lint`: ESLint

## Project structure

```
public/Apps.json        app data
public/_redirects       Netlify SPA rule
src/Routes/Routes.jsx   routes and loaders
src/Components/         home, trending, all apps, details, install, error, navbar, footer
src/Utilities/          localStorage helpers
```
