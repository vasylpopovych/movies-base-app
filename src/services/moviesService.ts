import API_KEY from '../constants/API_KEY';

class MoviesService {
    async getMovies(url: string): Promise<[]> {
        try {
            const response = await fetch(url);
            const movies = await response.json();
            console.log(movies.results);
            return movies.results;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getPopularMovies(): Promise<[]> {
        const movies = await this.getMovies(
            `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        );
        return movies;
    }

    async getUpcomingMovies(): Promise<[]> {
        const movies = await this.getMovies(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
        );
        return movies;
    }

    async getTopRatedMovies(): Promise<[]> {
        const movies = await this.getMovies(
            `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
        );
        return movies;
    }

    async getMoviesByName(name: string): Promise<[]> {
        const movies = await this.getMovies(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`
        );
        return movies;
    }
}

export const moviesService = new MoviesService();
