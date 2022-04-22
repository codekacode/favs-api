import { logger } from './../../shared/logger/appLogger';
import { ListModel } from './../entity/model/listModel';
import { List } from './../entity/types/listInterface';


export const getListByIdService = async (id: string): Promise<List | null> => {
    const query = { _id: id };
    try {
        return await ListModel.findById(query);
    } catch (error: any) {
        logger.log('error', 'GetListByIdService', {
            message: error.message,
            type: 'mongoose'
        });
        throw new Error(error.message);
    }
}