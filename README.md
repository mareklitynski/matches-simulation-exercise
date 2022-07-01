# Matches simulation

This project was made as an exercise.

## Installation

Run `yarn` command in both 'backend' and 'frontend' folders.

## Running backend locally

Run `yarn start` command in 'backend' folder.

## Running frontend locally

Run `yarn start` command in 'frontend' folder. The application will be served on http://localhost:3000

## Testing

### Unit tests

1. `yarn test` in 'backend' folder to run unit tests for backend.
1. `yarn test` in 'frontend' folder to run unit tests for frontend.

### E2E tests

1. Run backend and frontent as described above.
1. Run `yarn test:e2e` in 'frontend' folder

## Comments

I used:

- Typescript
- React
- Redux with redux toolkit and thunks
- Material UI
- Websockets ('ws' node server)

Because of time constraints, I haven't implemented everything I wanted to. Especially I would add:

- log messages in backend
- error handling
- restoring broken connections
- docker files
- compress time option to use in e2e tests
- css in different form
