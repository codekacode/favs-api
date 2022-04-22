import { logger } from './../../shared/logger/appLogger';
import { ListModel } from './../entity/model/listModel';
import { List } from "../entity/types/listInterface";

export const getListsAllService = async (): Promise<List[]> => {
    try {
        const lists: List[] = await ListModel.find({});
        return lists
    } catch (error: any) {
        logger.log('error', 'getProductsAllService', {
            message: error.message,
            type: 'mongoose'
        });
        throw new Error(error.message);
    }
}