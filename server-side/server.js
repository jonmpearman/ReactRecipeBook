import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import ReduxPromise from 'redux-promise';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from '../src/components/app.js';
import reducers from '../src/reducers/index';

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

app.get('/*', (req, res) => {
  const jsx = (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <App />
    </Provider>
  );
  const reactDom = renderToString(jsx);

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(htmlTemplate(reactDom));
});

app.listen(2048);

function htmlTemplate(reactDom) {
  return (`
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="/style/style.css">
        <link rel="stylesheet" href="https://cdn.rawgit.com/twbs/bootstrap/48938155eb24b4ccdde09426066869504c6dab3c/dist/css/bootstrap.min.css">
        <title>React Recipe Book</title>
      </head>
      <body>
        <div id="container">${reactDom}</div>
      </body>
      <script src="../src/bundle.js"></script>
    </html>
  `);
}