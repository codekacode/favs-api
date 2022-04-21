import { ApplicationError } from './../../shared/customErrors/ApplicationError';
import { NextFunction, Request, Response } from 'express';

export const userValidationMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (!req.body.name){
        next(new ApplicationError(400, 'name is required', 'validation'));
    }
    if (!req.body.email) {
        next(new ApplicationError(400, 'email is required', 'validation'));
    }
    next();
}