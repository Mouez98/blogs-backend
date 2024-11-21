import { Service } from 'typedi';
import { HttpException } from '@exceptions/httpException';
import uuidv4 from 'uuid';

import { PostModel } from '../models/posts.model';
import { IPost, PostCreateInput, PostResponse } from '../interfaces/posts.intefaces';

@Service()
export class PostService {
  public async findAllPost(): Promise<IPost[]> {
    const posts: IPost[] = await PostModel.find();
    return posts;
  }

  public async findPostById(postId: string): Promise<PostResponse> {
    const findPost: PostResponse = await PostModel.findOne({ _id: postId });
    if (!findPost) throw new HttpException(409, "Post doesn't exist");

    return findPost;
  }

  public async createPost(postData: PostCreateInput): Promise<PostResponse> {
    const createPostData: IPost = await PostModel.create({ ...postData, id: uuidv4 });

    return createPostData;
  }

  public async updatePost(postId: string, postData: IPost): Promise<IPost> {
    if (postData.id) {
      const findPost: IPost = await PostModel.findOne({ id: postData.id });
      if (findPost && findPost.id != postId) throw new HttpException(409, `This id ${postData.id} already exists`);
    }

    const updatePostById: IPost = await PostModel.findByIdAndUpdate(postId, { postData });
    if (!updatePostById) throw new HttpException(409, "Post doesn't exist");

    return updatePostById;
  }

  public async deletePost(postId: string): Promise<IPost> {
    const deletePostById: IPost = await PostModel.findByIdAndDelete(postId);
    if (!deletePostById) throw new HttpException(409, "Post doesn't exist");

    return deletePostById;
  }
}
