import type { PaginationMetaData } from "@/apis/festival";

export type SearchFestivalParameter = {
  query: string;
  page?: number;
  size?: number;
  sort?: "date" | "desc";
};

export type SearchFestival = {
  festivalId: number;
  name: string;
  sido: string;
  sigungu: string;
  thumbnailImage: string;
  startDate: string;
  endDate: string;
  isBookmarked: boolean;
};

export interface SearchFestivalResponse extends PaginationMetaData {
  content: Array<SearchFestival>;
}
