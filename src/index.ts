import app from './app';
import { createDbConnection } from './config/databaseConfig';
import dotenv from 'dotenv';

dotenv.config();

createDbConnection(`${process.env.MONGO_URI}`);

app.listen(process.env.PORT)