import { userLoginService } from './../services/userLoginService';
import { LoginUser } from './../entity/types/User';
import { NextFunction, Request, Response } from 'express';

export const userLogin = async (
    req: Request<{}, {}, LoginUser>,
    res: Response,
    next: NextFunction
) => {
    try {
        const token = await userLoginService(req.body);
        res.status(200).json({ token });
    } catch (error) {
        next(error);
    }
}