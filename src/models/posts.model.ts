import { model, Schema, Document } from 'mongoose';
import { IPost } from '../interfaces/posts.intefaces';

import uuidv4 from 'uuid';

const PostSchema: Schema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      default: uuidv4,
      validate: {
        validator: function (v) {
          return /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(v);
        },
        message: props => `${props.value} is not a valid UUID!`,
      },
    },
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
