import { Types } from 'mongoose';


export interface List {
    id: ListIdType;
    list_name: string;
    createdAt: Date;
    editedAt: Date | null;
}

export type ListIdType = {
    _id: Types.ObjectId;
}

export type CreateList = Omit<List, 'id' | 'createdAt' | 'editedAt'>