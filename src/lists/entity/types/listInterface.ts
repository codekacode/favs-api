import { Types } from 'mongoose';


export type Fav = {
    title: string;
    description: string;
    link: string;
}

export interface List {
    id: ListIdType;
    list_name: string;
    createdAt: Date;
    editedAt: Date | null;
    favs: Fav[];
}

export type ListIdType = {
    _id: Types.ObjectId;
}

export type CreateList = Omit<List, 'id' | 'createdAt' | 'editedAt'>