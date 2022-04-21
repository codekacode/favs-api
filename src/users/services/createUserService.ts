import { encryptPassword } from './../utils/passwordManager';
import { ApplicationError } from './../../shared/customErrors/ApplicationError';
import { logger } from './../../shared/logger/appLogger';
import { UserModel } from './../entity/models/userModel';
import { User, CreateUser } from './../entity/types/User';

export const createUserService = async (
    userRequest: CreateUser
): Promise<User> => {
    try {
        userRequest.password = await encryptPassword(userRequest.password);
        const user = new UserModel(userRequest);
        return await user.save();
    } catch (error: any) {
        logger.log('error', 'CreateUserService', {
            message: error.message,
            type: 'mongoose',
        });
        throw new ApplicationError(
            403,
            error.message,
            error.code === 11000 ? 'db error' : ''
        )
    }
}