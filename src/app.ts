import express, { Application } from 'express';
import userRoutes from './users/routes/userRoutes';
import listRoutes from './lists/routes/listRoutes';
import authRoutes from './auth/router/authRouter';;

const app: Application = express();

app.use(express.json());
app.use(userRoutes);
app.use(listRoutes);
app.use(authRoutes)

export default app;
