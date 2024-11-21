import { IsString, IsUUID, IsOptional, MaxLength, MinLength, IsDateString, IsNotEmpty } from 'class-validator';
import { Expose } from 'class-transformer';

// Create DTO
export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(255)
  @Expose()
  title: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @Expose()
  content: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @Expose()
  author: string;
}

// Update DTO
export class UpdatePostDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(255)
  @IsOptional()
  @Expose()
  title?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  @IsOptional()
  @Expose()
  content?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @IsOptional()
  @Expose()
  author?: string;
}

// Response DTO
export class PostResponseDto {
  @IsUUID()
  @Expose()
  _id: string;

  @IsString()
  @Expose()
  title: string;

  @IsString()
  @Expose()
  content: string;

  @IsString()
  @Expose()
  author: string;

  @IsDateString()
  @Expose()
  created_at: Date;

  @IsDateString()
  @IsOptional()
  @Expose()
  updated_at?: Date;
}

// Query DTO
export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export enum PostSortField {
  CREATED_AT = 'created_at',
  TITLE = 'title',
  AUTHOR = 'author',
}
