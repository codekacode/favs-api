import { createRefreshToken } from './../utils/tokenManager';
import { UserIdType } from './../../users/entity/types/User';
import { logger } from './../../shared/logger/appLogger';
import { TokenModel } from './../entity/model/authTokenModel';


export const authCreateRefreshToken = async (
    userId: string | UserIdType
): Promise<any> => {
    try {
        const refreshToken = createRefreshToken({ id: userId });
        const token = new TokenModel({
            owner: userId,
            token: refreshToken
        });
        const newToken = await token.save();
        return newToken.token;
    } catch (error: any) {
        logger.error('error creating a new list', {
            instance: 'services',
            service: 'createNewProjectService',
            trace: error.message ? error.message : '',
        });
        throw new Error(`Error creating a new project ${error.message}`);
    }
}