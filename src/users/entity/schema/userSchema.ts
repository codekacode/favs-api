import { User } from './../types/User';
import { Schema } from 'mongoose';

export const UserSchema = new Schema<User>({
    name: {
        type: String,
      },
      email: {
        type: String,
        required: [true, ' email is required'],
        unique: true,
        lowercase: true,
      },
      password: {
        type: String,
        required: [true, ' password is required'],
        minlength: 5,
      },
      createdAt: {
        type: Date,
        default: new Date(),
      },
      editedAt: {
        type: Date,
      },
})