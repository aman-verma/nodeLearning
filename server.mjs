import express from 'express';
import dotenv from 'dotenv';

//route files
import bootcamps from './routes/bootcamps.mjs';

//load env vars
dotenv.config({ path: './config/config.env' });

const app = express();
app.use(express.json());

//mount routes
app.use('/app/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running ${process.env.NODE_ENV} on PORT ${PORT}`);
});
