import mongoose from 'mongoose';

export const createDbConnection = (dbURL: string) => {
    mongoose
        .connect(dbURL)
        .then(() => {
            console.log('Base de datos conectada a la app');
        })
        .catch((error) => {
            console.log('Error en la conexion de datos')
        });
};