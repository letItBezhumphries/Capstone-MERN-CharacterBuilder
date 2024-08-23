const express = require('express');

const path = require('path');
// const bodyParser = require('body-parser');
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();
const morgan = require('morgan');

const connectDB = require('./db/index');

connectDB();

/* Middleware imports */
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

/** define Routes */
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const characterRoutes = require('./routes/characters');
const dungeonRoutes = require('./routes/dungeons');
const monsterRoutes = require('./routes/monsters');

/** Middleware */
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(express.json());

/** Wiring in route handlers and mounting routes */
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/characters', characterRoutes);
app.use('/api/dungeons', dungeonRoutes);
app.use('/api/monsters', monsterRoutes);
// set up middleware

// serve static files
// app.use('public', express.static(PUBLIC_DIR));

const DIR_NAME = path.resolve();

// serve up the application
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(DIR_NAME, '/frontend/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(DIR_NAME, 'frontend', 'dist', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

/* handle any requests that fall through */
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `Express server is running in ${process.env.NODE_ENV} and listening on port: ${PORT}`
  );
});
