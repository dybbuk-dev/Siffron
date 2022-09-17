import express from 'express';
import cors from 'cors';
import { authMiddleware } from '../middlewares/authMiddleware';
import { tenantMiddleware } from '../middlewares/tenantMiddleware';
import { databaseMiddleware } from '../middlewares/databaseMiddleware';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import { createRateLimiter } from './apiRateLimiter';
import { languageMiddleware } from '../middlewares/languageMiddleware';
import authSocial from './auth/authSocial';
import setupSwaggerUI from './apiDocumentation';
import path from 'path';
import * as fs from 'fs';
import { contentType } from 'mime-types';

const app = express();

// Enables CORS
app.use(cors({ origin: true }));

// Initializes and adds the database middleware.
app.use(databaseMiddleware);

// Sets the current language of the request
app.use(languageMiddleware);

// Configures the authentication middleware
// to set the currentUser to the requests
app.use(authMiddleware);

// Setup the Documentation
setupSwaggerUI(app);

// Default rate limiter
const defaultRateLimiter = createRateLimiter({
  max: 500,
  windowMs: 15 * 60 * 1000,
  message: 'errors.429',
});
app.use(defaultRateLimiter);

// Enables Helmet, a set of tools to
// increase security.
const cspDirectives = {
  ...helmet.contentSecurityPolicy.getDefaultDirectives(),
  'script-src': ["'self'", "'unsafe-eval'"],
};

// console.log('----- Content Security Policy -----');
// console.log(cspDirectives);

app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: false,
      directives: {
        ...cspDirectives,
      },
    },
  }),
);

// Parses the body of POST/PUT request
// to JSON
app.use(
  bodyParser.json({
    verify: function (req, res, buf) {
      const url = (<any>req).originalUrl;
    },
  }),
);

// Configure the Entity routes
const routes = express.Router();

// Enable Passport for Social Sign-in
authSocial(app, routes);

require('./widget').default(routes);
require('./schedule').default(routes);
require('./mui').default(routes);
require('./auditLog').default(routes);
require('./auth').default(routes);
require('./tenant').default(routes);
require('./file').default(routes);
require('./user').default(routes);
require('./settings').default(routes);
require('./shop').default(routes);
require('./department').default(routes);
require('./section').default(routes);
require('./shelf').default(routes);
require('./facing').default(routes);
require('./task').default(routes);
require('./taskInstance').default(routes);
require('./taskPriority').default(routes);
require('./taskList').default(routes);
require('./note').default(routes);

// Loads the Tenant if the :tenantId param is passed
routes.param('tenantId', tenantMiddleware);

// Add the routes to the /api endpoint
app.use('/api', routes);

const mimes = {
  '.css': 'text/css',
  '.js': 'text/javascript',
};

// For compressed files
app.get(
  ['*.css', '*.jpeg', '*.jpg', '*.js', '*.png', '*.svg'],
  (req, res, next) => {
    const gzUrl = path.resolve(
      __dirname,
      `../../frontend/build/${req.url}.gz`,
    );

    // only if file exists
    if (!fs.existsSync(gzUrl)) {
      // console.log(`not found - "${req.url}.gz"`);
      return next();
    }

    res.set('Content-Encoding', 'gzip');
    const ext = path.extname(req.url);
    const ctnType =
      mimes[ext] ||
      contentType(ext) ||
      'application/octet-stream';
    // console.log(ext, ctnType);
    res.set('Content-Type', ctnType);
    res.sendFile(gzUrl);
  },
);

app.use(
  express.static(
    path.resolve(__dirname, '../../frontend/build'),
  ),
);

app.get('*', function (req, res) {
  res.sendFile(
    path.resolve(
      __dirname,
      '../../frontend/build',
      'index.html',
    ),
  );
});

export default app;
