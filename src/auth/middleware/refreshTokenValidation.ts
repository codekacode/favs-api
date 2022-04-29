import { validateRefreshToken } from './../utils/tokenManager';
import { ApplicationError } from './../../shared/customErrors/ApplicationError';
import { NextFunction, Request, Response } from 'express';

export const refreshTokenValidation = (
    req: Request,
    _res: Response,
    next: NextFunction
) => {
    try {
        const { authorization } = req.headers;
        if(!authorization)
            return next(new ApplicationError(401, 'No token privided'));
        const { id } = validateRefreshToken(authorization);

        if (!id) return next(new ApplicationError(401, 'Not Token valid'));
        req.userId = id;
        next();
    } catch (error: any) {
        if(error.message === 'jwt expired')
            return next(new ApplicationError(401, error.message));
        next(error);
    }
}