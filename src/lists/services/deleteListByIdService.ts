import { logger } from './../../shared/logger/appLogger';
import { ListModel } from './../entity/model/listModel';


export const deleteListByIdService = async (id: string) => {
    const query = { _id: id };
    try {
        return await ListModel.deleteOne(query);
    } catch (error: any) {
        logger.log('error', 'error intentar eliminar lista', {
            message: error.message,
            types: 'mongoose'
        });
        throw new Error(error.message);
    }
}