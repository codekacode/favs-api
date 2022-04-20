import { ApplicationError } from './../../shared/customErrors/ApplicationError';
import { logger } from '../../shared/logger/appLogger';
import { UserModel } from '../entity/models/userModel';
import { User } from '../entity/types/User';


export const getAllUsersService = async (): Promise<User[]> => {
    try {
        const users: User[] = await UserModel.find({});
        return users 
    } catch (error: any) {
        logger.log('error', 'getAllUsersService', {
            message: error.message,
            type: 'mongoose',
        });
        throw new Error(error.message);
    }
}