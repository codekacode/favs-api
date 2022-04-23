import { getLists, createList, getListById, deleteList } from './../controllers/listController';
import { Router } from 'express';

const router: Router = Router();

router.get('/api/favs', getLists);
router.post('/api/favs', createList);
router.get('/api/favs/:id', getListById);
router.delete('/api/favs/:id', deleteList);

export default router;