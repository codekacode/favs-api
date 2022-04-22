import { getListByIdService } from './../services/getListByIdService';
import { createListService } from './../services/createListService';
import { CreateList } from './../entity/types/listInterface';
import { logger } from './../../shared/logger/appLogger';
import { Request, Response } from 'express';
import { getListsAllService } from './../services/getListsAllService';
import { deleteListByIdService } from '../services/deleteListByIdService';


export const getLists = async (req: Request, res: Response) => {
    try {
        const lists = await getListsAllService();
        res.status(200).json(lists);
    } catch (error: any) {
        logger.error('Error obtener listas')
    }
};

export const getListById = async (
    req: Request<{ list_id: string }>,
    res: Response
) => {
    try {
        const getListById = await getListByIdService(req.params.list_id);
        res.status(200).json(getListById);
    } catch (error: any) {
        logger.error('Error obtener lista por ID')
    }
}

export const createList = async (
    req: Request<
        {},
        {},
        CreateList>,
    res: Response
) => {
    try {
        const newList: CreateList = req.body
        const cart = await createListService(newList);
        res.status(201).json({data: cart})
    } catch (error) {
        logger.error('Error en crear lista')
    }
}

export const deleteList = async (
    req: Request<{ list_id: string }>,
    res: Response
) => {
    try {
        const list = await deleteListByIdService(req.params.list_id);
        res.status(204).json(list);
    } catch (error) {
        logger.error('Error eliminar lista')
    }
}
