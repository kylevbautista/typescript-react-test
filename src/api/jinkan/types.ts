interface IJpg {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}
interface IWebp {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}
interface IImages {
  jpg: IJpg;
  webp: IWebp;
}
export interface IJinkanData {
  mal_id: number;
  url: string;
  images: IImages;
  trailer: {};
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: [];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: true;
  aired: {};
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: {};
  producers: [];
  licensors: [];
  studios: [];
  genres: [];
  explicit_genres: [];
  themes: [];
  demographics: [];
}
