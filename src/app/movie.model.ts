export interface Movie{
  Title : string;
  Year : string;
  Actors : string[];
  Country : string;
  Runtime: number | string;
}

export interface result{
search: any;
  Results : SearchResult[];
}
export interface SearchResult{
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
}

