interface Thumbnail {
  trending?: {
    small: string;
    large: string;
  };
  regular: {
    small: string;
    medium?: string;
    large: string;
  };
}

export interface MediaItem {
  title: string;
  thumbnail: Thumbnail;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export type MediaList = MediaItem[];
