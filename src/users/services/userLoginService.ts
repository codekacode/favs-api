import { ApplicationError } from './../../shared/customErrors/ApplicationError';
import { createToken } from './../utils/tokenManager';
import { validatePassword } from './../utils/passwordManager';
import { getOneUserByEmail } from './getOneUserByEmail';
import { LoginUser } from './../entity/types/User';

export const userLoginService = async (
    userRequest: LoginUser
): Promise<string> => {
    try {
        const user = await getOneUserByEmail(userRequest.email);
        if (user) {
            const auth = await validatePassword(userRequest.password, user.password);
            if (auth) {
                return createToken({ id: user.id });
            } else {
                throw new ApplicationError(401, 'user email or password is incorrect');
            }
        } else {
            throw new ApplicationError(401, "user email doesn't exist")
        }
    } catch (error: any) {
        throw new Error(error);
    }
};