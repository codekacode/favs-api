import { logger } from './../../shared/logger/appLogger';
import { ListModel } from './../entity/model/listModel';
import { CreateList } from './../entity/types/listInterface';


export const createListService = async (
    listRequest: CreateList
) => {
    try {
        const list = new ListModel(listRequest)
        return await list.save();
    } catch (error: any) {
        logger.log('error', 'CreateListService', {
            message: error.message,
            type: 'mongoose'
        });
        throw new Error(error.message);
    }
}