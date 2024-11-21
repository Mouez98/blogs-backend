export interface IPost {
  id: string;
  title: string;
  content: string;
  author: string;
  created_at: Date;
  updated_at?: Date;
}

export type PostCreateInput = Omit<IPost, 'id' | 'created_at' | 'updated_at'>;

export type PostUpdateInput = Partial<Omit<IPost, 'id' | 'created_at' | 'updated_at'>>;

export interface PostResponse extends IPost {
  id: string;
}
