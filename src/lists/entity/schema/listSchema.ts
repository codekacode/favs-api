import { List } from './../types/listInterface';
import { Schema } from 'mongoose';


export const ListSchema = new Schema<List>({
    list_name: {
        type: String,
        required: [true, 'Se requiere nombre para la lista']
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    editedAt: {
        type: Date
    }
})