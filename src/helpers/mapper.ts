import Movie from '../types/Movie';

export const mapper = (dataFromApi: []): [] => {
    const result: [] = [];
    for (const movie of dataFromApi) {
        const obj: Movie = {
            id: movie['id'],
            title: movie['title'],
            poster_path: movie['poster_path'],
            backdrop_path: movie['backdrop_path'],
            overview: movie['overview'],
            release_date: movie['release_date'],
        };
        result.push(obj);
    }
    return result;
};
