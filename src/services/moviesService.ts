import API_KEY from '../constants/API_KEY';
import { mapper } from '../helpers/mapper';

class MoviesService {
    async getMovies(url: string): Promise<[]> {
        try {
            const response: Response = await fetch(url);
            const movies = await response.json();
            const mappedData: [] = mapper(movies.results);
            return mappedData;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getPopularMovies(page: string): Promise<[]> {
        const movies: [] = await this.getMovies(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
        );
        return movies;
    }

    async getUpcomingMovies(page: string): Promise<[]> {
        const movies: [] = await this.getMovies(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${page}`
        );
        return movies;
    }

    async getTopRatedMovies(page: string): Promise<[]> {
        const movies: [] = await this.getMovies(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
        );
        return movies;
    }

    async getMoviesByName(name: string, page: string): Promise<[]> {
        const movies: [] = await this.getMovies(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=${page}&include_adult=false`
        );
        return movies;
    }
}

export const moviesService = new MoviesService();
