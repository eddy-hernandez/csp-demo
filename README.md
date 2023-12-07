# CSP Report Only Demo

This repo is a quick poc to log external or 3rd party requests that happen on the frontend via fetch or web sockets. This uses the csp report only header to log these violations but still allow them to go through.

## Development

Git clone this repo and run the following:

```sh
npm install

node server.js

// open http://localhost:3000 - click the button
// view logs in console
```

Example output:

<img width="1252" alt="image" src="https://github.com/eddy-hernandez/csp-demo/assets/146758600/c1c61dd3-683d-4eed-841c-d89bc276e1fa">
