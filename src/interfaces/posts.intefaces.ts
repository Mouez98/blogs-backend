export interface IPost {
  _id: string;
  title: string;
  content: string;
  author: string;
  created_at: Date;
  updated_at?: Date;
}

export type PostCreateInput = Omit<IPost, '_id' | 'created_at' | 'updated_at'>;

export type PostUpdateInput = Partial<Omit<IPost, '_id' | 'created_at' | 'updated_at'>>;

export interface PostResponse extends IPost {
  _id: string;
}
