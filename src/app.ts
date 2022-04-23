import express, { Application } from 'express';
import userRoutes from './users/routes/userRoutes'
import listRoutes from './lists/routes/listRoutes'

const app: Application = express();

app.use(express.json());
app.use(userRoutes);
app.use(listRoutes);

export default app;
