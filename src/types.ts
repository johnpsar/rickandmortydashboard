export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export function getEmptyCharacter(): Character {
  return {
    id: 0,
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: {
      name: "",
      url: "",
    },
    location: {
      name: "",
      url: "",
    },
    image: "",
    episode: [],
    url: "",
    created: "",
  };
}

export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string[];
  created: string;
};

export function getEmptyEpisode(): Episode {
  return {
    id: 0,
    name: "",
    air_date: "",
    episode: "",
    characters: [],
    url: [],
    created: "",
  };
}

export type Location = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

export function getEmptyLocation(): Location {
  return {
    id: 0,
    name: "",
    type: "",
    dimension: "",
    residents: [],
    url: "",
    created: "",
  };
}
