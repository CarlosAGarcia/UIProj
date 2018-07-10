import path from 'path';
import Express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import webpack from 'webpack';
import config from 'config';
import r from 'rethinkdb';
import favicon from 'serve-favicon';

import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

/***************SERVER*************/
//server creation
const app = new Express();
//webpack config
import webpackConfig from '../webpack.config';

// sever setting : webpack will provide hot-loading service Run Webpack dev
// server in development mode
if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackConfig);
  app.use(
    webpackDevMiddleware(compiler, {
      hot: true,
      publicPath: webpackConfig.output.publicPath,
      noInfo: true
    })
  );
  app.use(webpackHotMiddleware(compiler));
}

const publicPath = path.join(__dirname, '..', config.get('buildDirectory'));
console.log(publicPath);
// Apply body Parser and server public assets and routes
app.use(Express.static(publicPath)); //
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve the fav icon
app.use(favicon(path.join(__dirname,'favicon.ico')));

/***************Starting DB*****************/
// Add the logic to connect to Rethink db
let connection = null;
let db = config.get('rethinkdb');
r.connect( {host: db.host, port: db.port, db: db.db}, function(err, conn) {
    if (err) throw err;
    connection = conn;
});
// pass the db connection as a middleware
app.use((req, res, next) => {
  req.connection = connection;
  next();
})
/***************Ending DB*****************/

// api routers for adding removing toggling items
import apiRoutes from './routes/api.routes';
app.use('/api', apiRoutes);

//These codes can handle any request from URL properly
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

const port = config.get('express.port') || 3000;
// starting point of server / app
app.listen(port, error => {
  if (!error) {
    console.log(
      `CS3249 server is running on port: ${port}! Build something amazing!`
    ); // eslint-disable-line
  }
});

export default app;
