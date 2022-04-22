import { model } from 'mongoose';
import { List } from './../types/listInterface';
import { ListSchema } from './../schema/listSchema';


export const ListModel = model<List>('List', ListSchema)