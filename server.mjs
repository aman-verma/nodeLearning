import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.mjs';
//load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

//route files
import bootcamps from './routes/bootcamps.mjs';

const app = express();
app.use(express.json());

//mount routes
app.use('/app/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server is running ${process.env.NODE_ENV} on PORT ${PORT}`);
});

//handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => {
    //Close server and exit process
    process.exit(1);
  });
});
