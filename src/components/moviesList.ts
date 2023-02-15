import createMovieCard from './movieCard';
import { moviesService } from '../services/moviesService';
import { categoriesBar } from './categoriesBar';
import { searchBar } from './searchBar';

export const moviesList = async (moviesData?: []): Promise<void> => {
    const moviesContainer: HTMLDivElement | null =
        document.querySelector('#film-container');
    let movies: [] | undefined = moviesData;

    //get popular movies as default
    if (moviesData === undefined)
        movies = await moviesService.getPopularMovies();

    // clear movies container
    if (moviesContainer) moviesContainer.innerHTML = '<div></div>';

    //render movies from API
    if (movies) {
        for (const movie of movies) {
            const movieCard = createMovieCard(
                movie['backdrop_path'],
                movie['overview'],
                movie['release_date']
            );
            moviesContainer?.append(movieCard);
        }
    }
};

export const getMovies = async (
    category: string,
    name?: string
): Promise<void> => {
    console.log(category);
    let moviesData: Promise<[]> | [] = [];
    if (name) moviesData = await moviesService.getMoviesByName(name);
    switch (category) {
        case 'popular':
            moviesData = await moviesService.getPopularMovies();
            break;
        case 'upcoming':
            moviesData = await moviesService.getUpcomingMovies();
            break;
        case 'top_rated':
            moviesData = await moviesService.getTopRatedMovies();
            break;
    }
    moviesList(moviesData);
};

categoriesBar();
searchBar();
