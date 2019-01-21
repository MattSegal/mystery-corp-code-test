# Mystery Corp Code Test

A powerful and shadowy organisation has requested a small front-end application to keep track of their favourite TV shows. You can view the implementation [here](https://mattsegal.github.io/mystery-corp-code-test/).

This application is essentially an interface for interacting with an API that is provided by [themoviedb.org](https://www.themoviedb.org/documentation/api).

Although the identity of our end-user is nebulous, their requirements are clear. As an end user, they would like to:

- Search for TV shows by name, so that they can find new content to watch
- Add new movies to their watch list, so that they can watch them later
- Add movies to their favourites, so that they may trumpet their good taste to other internet denizens

# Development

### Prerequisites

You will need NodeJS v11(ish) installed plus the `yarn` package manager.

### Getting Started

```bash
yarn install  # Install Node packages
yarn build  # Build assets with Webpack
yarn server  # Run dev server on localhost:8000
```

### More Tools

```bash
yarn format  # Auto-format JS code
yarn test  # Run imaginary unit / integration tests
```

### Project Structure

This web app is loaded using `index.html`, which is in the project root. This file is served by GitHub Pages.

All client-facing code goes into `public`, and source code lives in `src`.

Inside of `src` we have:

- `components`: React components - mostly presentational, minimal state
- `containers`: React components - mostly business logic, connect to Redux
- `state`: All Redux state managment
- `utils`: helper methods
- `styles`: SCSS styles
- `api.js`: all HTTP API calls
- `routes.js:` all React Router routes
- `index.js`: App entry point.

### Contributing Guidelines

- Try to stick to the structure outlined above
- Do not directly modify code in `public/`
- Stateful components are OK, but cross-cutting concerns should go in Redux
- All HTTP requests should be added as a function in `api.js`
- A separation between presentational and logical components would be good

### Suggested Improvements

Some thing which could be added:

- Add error handling for when API requests fail
- Display a "loading" state to users when there are active API requests
- Check for and handle an expired Movie DB session ID
- Add support for following Movie DB API pagination
