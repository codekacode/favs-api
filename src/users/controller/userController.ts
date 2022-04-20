import { getOneUserByIdService } from './../services/getOneUserByIdService';
import { CreateUser } from './../entity/types/User';
import { getAllUsersService } from './../services/getAllUsersService';
import { ApplicationError } from './../../shared/customErrors/ApplicationError';
import { logger } from './../../shared/logger/appLogger';
import { NextFunction, Request, Response } from "express";


export const getUsers = async (
    req: Request, 
    res: Response,
    next: NextFunction
) => {
    try {
        const users = await getAllUsersService();
        res.status(200).json(users);
    } catch (error: any) {
        logger.log('error', 'hello', { message: error.message });
        next(new ApplicationError(400, 'error getting the users'))
    }
}

export const getUserById = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { id } = req.params;
    try {
        const user = await getOneUserByIdService(id);
        res.status(200).json({ data: user });
    } catch (error) {
        next(error);
    }
}