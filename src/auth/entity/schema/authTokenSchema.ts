import { UserIdType } from './../../../users/entity/types/User';
import { Schema, Types } from 'mongoose';

export interface Token {
    token: String;
    createdAt: Date;
    expiredAt: Date;
    owner: UserIdType
}

export const AuthTokenSchema = new Schema<Token>({
    token: {
        type: String,
        required: [true, 'a token is required']
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    expiredAt: {
        type: Date,
        default: new Date(),
        index: { expires: 60 * 60 * 24 },
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'a user is required to create a list']
    }
});