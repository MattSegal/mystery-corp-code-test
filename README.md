# Mystery Corp Code Test

A powerful and shadowy organisation has requested a small front-end application to keep track of their favourite TV shows. You can view the implementation [here](https://mattsegal.github.io/mystery-corp-code-test/).

This application is essentially an interface for interacting with an API that is provided by [themoviedb.org](https://www.themoviedb.org/documentation/api). I use a static API key here - a more mature implementation would generate a [session id](https://developers.themoviedb.org/3/authentication/how-do-i-generate-a-session-id).

Although the identity of our end-user is nebulous, their requirements are clear. As an end user, they would like to:

- Search for TV shows by name, so that they can find new content to watch
- Watch the trailer for each search result, so they can decide whether they will like it
- Add new movies to their watch list, so that they can watch them later
- Add movies to their favourites, so that they may trumpet their good taste to other internet denizens

# Development

### Prerequisites

You will need NodeJS v11 installed plus the `yarn` package manager.

### Architecture

Client-facing code all goes into `public`, source code lives in `src`.

TODO

### Tools

```bash
# Install required packages
yarn install

# Build JS/CSS assets
yarn build

# Auto-format JS
yarn format

# Check JS formatting
yarn lint

# Run unit tests
yarn test
```

### Contributing

Do not directly modify anything in `public/`, except for `index.html`.

state

containers

components

styles

module
global

routes

generic

how to use `yarn server`

### Suggested Improvement

display loading state for API requests
add error handling for API requests
handle expired session ID
add support for following pagination
genericise API calls (remove repetition from actions / reduces / api)
be more intelligent with how you load favourites / watchlist
