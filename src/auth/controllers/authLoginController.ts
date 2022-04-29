import { LoginUser } from './../../users/entity/types/User';
import { NextFunction, Request, Response } from 'express';

export const authLogin = async (
    req: Request<{}, {}, LoginUser>,
    res: Response,
    next: NextFunction
)