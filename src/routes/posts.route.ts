import { Router } from 'express';
import { PostController } from '@controllers/posts.controller';
import { CreatePostDto, UpdatePostDto } from '@dtos/posts.dto';
import { Routes } from '@interfaces/routes.interface';
import { ValidationMiddleware } from '@middlewares/validation.middleware';

export class PostRoute implements Routes {
  public path = '/posts';
  public router = Router();
  public post = new PostController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.post.getPosts);
    this.router.get(`${this.path}/:id`, this.post.getPostById);
    this.router.post(`${this.path}`, ValidationMiddleware(CreatePostDto), this.post.createPost);
    this.router.put(`${this.path}/:id`, ValidationMiddleware(UpdatePostDto, true), this.post.updatePost);
    this.router.delete(`${this.path}/:id`, this.post.deletePost);
  }
}
