export enum MovieId {
  F001 = "F001",
  F002 = "F002",
}

export enum MovieCode {
  CHILDRENS = "childrens",
  REGULAR = "regular",
  NEW = "new",
  SCIFI = "scifi",
  ACTION = "action",
  DRAMA = "drama"
}

interface MovieDetails {
  title: string;
  code: MovieCode;
}

export type MovieCollection = {
  [MovieID in MovieId]: MovieDetails;
};
