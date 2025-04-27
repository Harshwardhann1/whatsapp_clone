import express from 'express';
import dotenv from 'dotenv';
import Route from './routes/route.js';
import cors from 'cors'
import { connection } from './database/db.js';
import bodyParser from 'body-parser';
dotenv.config();

const app = express();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
  console.error('MONGO_URL is not defined in .env file!');
  process.exit(1);
}

app.use(cors())
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))

app.use('/',Route);

// ✅ Connect to DB FIRST, then start server:
connection(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server started on PORT: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('❌ Failed to connect to DB:', error);
  });
