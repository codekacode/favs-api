import { logger } from './../../shared/logger/appLogger';
import { createAuthToken, createRefreshToken } from './../utils/tokenManager';
import { UserIdType } from './../../users/entity/types/User';


export const authCreateTokenService = (
    userId: string | UserIdType
): {authToken: string; refreshToken: string} => {
    try {
        return {
            authToken: createAuthToken({ id: userId }),
            refreshToken: createRefreshToken({ id: userId })
        };
    } catch (error: any){
        logger.error('Error creating tokens auth token', {
            instance: 'services',
            fn: 'authCreateTokenService',
            trace: error.message,
        })
        throw new Error(`'Error creating tokens auth token' ${error.message}`);
    }
}