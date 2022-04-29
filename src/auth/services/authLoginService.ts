import { logger } from './../../shared/logger/appLogger';
import { authCreateRefreshToken } from './authCreateRefreshToken';
import { createAuthToken } from './../utils/tokenManager';
import { validatePassword } from './../utils/passwordManager';
import { getOneUserByEmail } from './../../users/services/getOneUserByEmail';
import { LoginUser } from './../../users/entity/types/User';


export type TokenResponse = {
    authToken: string;
    refreshToken: string;
};

export const authLoginService = async (
    userRequest: LoginUser
): Promise<TokenResponse> => {
    try {
        const user = await getOneUserByEmail(userRequest.email);
        if(!user) throw new Error('user email o password is incorrect');
        const auth = await validatePassword(userRequest.password, user.password);
        if(!auth) throw new Error('user email or password is incorrect');
        const authToken = createAuthToken({ id: user.id });
        const refreshToken = await authCreateRefreshToken(user.id);

        return {
            authToken,
            refreshToken,
        };
    } catch (error: any) {
        logger.error('Error login user', {
            instance: 'services',
            fn: 'authLoginService',
            trace: error.message,
          });
          throw new Error(error);
    }
}