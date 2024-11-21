import { model, Schema, Document } from 'mongoose';
import { IPost } from '../interfaces/posts.intefaces';

const PostSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 255,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
      maxlength: 50,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    strict: true,
  },
);

export const PostModel = model<IPost & Document>('Post', PostSchema);
