import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';
import router from './routes/routes.js';


/** App Middlewares */
const app = express();
app.use(cors());
app.use(express.json());
config();

/** API **/

app.use('/api', router);

/** Routes */



/** Import Connection Files */
mongoose.connect(
    `mongodb+srv://xsm9512368740:admin123@quiz.uiiilln.mongodb.net/Quiz`
  )
  .then(() => {
    try {
      app.listen(1337, () => console.log('http://localhost:1337/'));
      console.log('Database Connected');
    } catch (error) {
      console.log({ error: 'Cannot Connect To The Server' });
    }
  })
  .catch((error) => {
    console.log({ error: error});
  });
