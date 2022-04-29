import { logger } from './../../shared/logger/appLogger';
import { TokenModel } from './../entity/model/authTokenModel';
import { createAuthToken } from './../utils/tokenManager';
import { UserModel } from './../../users/entity/models/userModel';


export const authRefreshTokenService = async (
    userId: string, 
    refreshToken: string
): Promise<{ authToken: string}> => {
    const user = await UserModel.findById(userId);
    if (!user) throw new Error('invalid user id');
    const currentToken = await TokenModel.findOne({token: refreshToken});
    if (!currentToken) throw new Error('invalid token');
    try {
        return {
            authToken: createAuthToken({id: userId}),
        };
    } catch (error: any) {
        logger.error('Error renewing auth token', {
            instance: 'services',
            fn: 'authRefreshTokenService',
            trace: error.message,
          });
          throw new Error(error);
    }
}