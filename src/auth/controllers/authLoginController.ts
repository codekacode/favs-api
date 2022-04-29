import { authLoginService } from './../services/authLoginService';
import { LoginUser } from './../../users/entity/types/User';
import { NextFunction, Request, Response } from 'express';

export const authLogin = async (
    req: Request<{}, {}, LoginUser>,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = await authLoginService(req.body);
        res.status(200).json({
            token,
        });
    } catch (error) {
        next(error);
    }
}