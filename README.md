# chat-challenge

## Prerequisites
* Maven
* Yarn
* Node
* Docker

## Docker / docker-compose

To build the full application and run it with docker-compose, run the following commands:
```
yarn build
docker-compose up
```

The app will then be available at http://localhost:8080

## Backend

To start the Backend application, install the maven dependencies and start the `ChatChallengeApplication` whilst a MongoDB instance is running.
The backend application runs on port `8080`.

## Frontend

To start the Frontend application, install the npm dependencies via `yarn install` and start the application via `yarn start`.
The frontend application runs on port `3000`. The API endpoints (`GET` / `POST` `/messages`) are proxied from port `3000` to port `8080`.
