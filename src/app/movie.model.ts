export interface result {
  Search: movieInOverall[];
}

export interface movieInOverall {
  Title: string;
  Year: string | number;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface movieInDetails {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: {
    Source: string;
    Value: string;
  }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  totalSeasons: string;
  Response: string;
}
export interface Country {
  0: {
    capital: Array<string>;
    languages: object;
    population: number;
    name: {
      common: string
    };
    flag: string;
    cca2: string;
    currencies: {
      name: {
        name: string
      }
    };
  };
}
