export type FestivalReviewsParameters = {
  festivalId?: number;
  sort?: "createdAt" | "likeCount";
  page?: number;
  size?: number;
};

export interface FestivalReviewsResponse {
  content: Review[];
  offset: number;
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
}

export interface Review {
  reviewId: number;
  festivalId: number;
  user: User;
  content: string;
  createdAt: string;
  updatedAt?: string;
  isLiked: boolean;
  likeCount: number;
  rating: number;
  images: Image[];
  keywords: Keyword[];
}

export interface User {
  userId: number;
  profileImage: string;
  nickname: string;
}

export interface Image {
  imageId: number;
  imageUrl: string;
}

export interface Keyword {
  keywordId: number;
  keyword: string;
}

export enum SortOption {
  createdAt = "createdAt",
  likeCount = "likeCount",
}