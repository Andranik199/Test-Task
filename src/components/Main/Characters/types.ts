export type Film = {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: Date;
    characters: Array<string>;
    planets: Array<string>;
    starships: Array<string>;
    vehicles: Array<string>;
    species: Array<string>;
    created: Date;
    edited: Date;
    image: string;
    id: number;
    url: string;
}

export type Character = {
    image: string;
    id: number;
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    modifiedFilms: Array<Film>
    films: Array<string>;
    species: Array<string>;
    vehicles: Array<string>;
    starships: Array<string>;
    created: Date;
    edited: Date;
    url: string;
};
