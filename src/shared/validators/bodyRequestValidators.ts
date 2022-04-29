import { logger } from './../logger/appLogger';
import { ApplicationError } from './../customErrors/ApplicationError';
import * as yup from 'yup';
import { NextFunction, Request, Response } from 'express';

export const  bodyRequestValidator = 
    (schema: yup.ObjectSchema<any>) => 
    async (req: Request, _res: Response, next: NextFunction) => {
        try {
            await schema.validate({
                body: req.body,
                params: req.params,
            });
            next();
        } catch (error: any) {
            logger.error(`error validating body request ${error.message}`, {
                instance: 'middlewares schema validation',
                fn: 'bodyRequestValidator',
                trace: error.message,
            });
            next(new ApplicationError(403, error.message, 'validation'))
        }
    }