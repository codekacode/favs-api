import express, { Application } from 'express';
import userRoutes from './users/routes/userRoutes'

const app: Application = express();

app.use(express.json());
app.use(userRoutes)

export default app;
