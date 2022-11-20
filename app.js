require('dotenv').config();
require('express-async-errors');

//security packages
const cors = require('cors')
const helmet = require('helmet')
const xss = require ('xss-clean')
const rateLimit = require('express-rate-limit')

const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const authUserMiddleware=require('./middleware/authentication')


//routes
const authRoutes=require('./routes/auth')
const jobsRoutes=require('./routes/jobs')


// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.set('trust proxy', 1 )

app.use(rateLimit({
  windowMs: 15*60*1000,
  max : 100 
}))
app.use(express.json());
app.use(cors())
app.use(helmet())
app.use(xss())

app.get('/', (req, res) => {
  res.send('<h1>Jobs API</h1><a href="/api-docs">Documentation</a>');
});

// extra packages

// routes
app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/jobs',authUserMiddleware,jobsRoutes)


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
