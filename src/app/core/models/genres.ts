export interface GenresResult {
  count: number;
  next: string;
  previous: string;
  results: Genre[];
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}
