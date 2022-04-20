import { UserModel } from './../entity/models/userModel';
import { User, UserIdType } from './../entity/types/User';
import { logger } from '../../shared/logger/appLogger';


export const getOneUserByIdService = async (
    id: string | UserIdType,
): Promise<User[] | null> => {
    try {
        const user: User[] | null = await UserModel.findOne({ _id: id })
        return user
    } catch (error: any) {
        logger.log('error', 'getOneUserService', {
            message: error.message,
            type: 'mongoose',
        });
        throw new Error(error.message)
    }
};