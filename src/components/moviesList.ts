import createMovieCard from './movieCard';
import { moviesService } from '../services/moviesService';
import { categoriesBar } from './categoriesBar';
import { searchBar } from './searchBar';
import { paginationButton } from './paginationButton';
import { paginationPage } from './paginationButton';
import { generateRandom } from '../helpers/genereteRandomNumber';
import Movie from '../types/Movie';
import { showBanner } from './banner';

const moviesContainer: HTMLDivElement | null =
    document.querySelector('#film-container');

export let randomMovie: Movie[] = [];

export const renderMovies = async (moviesData?: []): Promise<void> => {
    // here shuld be a method which clearing movies List
    let movies: [] | undefined = moviesData;
    //get popular movies as default
    if (moviesData === undefined)
        movies = await moviesService.getPopularMovies(
            paginationPage.toString()
        );
    //render movies from API
    if (movies) {
        for (const movie of movies) {
            const movieCard = createMovieCard(
                movie['poster_path'],
                movie['overview'],
                movie['release_date']
            );
            moviesContainer?.append(movieCard);
        }
    }
    // get and show random movie
    if (movies) {
        getRandomMovie(movies);
        showBanner();
    }
};

export const getMovies = async (
    category: string,
    name?: string
): Promise<void> => {
    let moviesData: Promise<[]> | [] = [];
    if (name)
        moviesData = await moviesService.getMoviesByName(
            name,
            paginationPage.toString()
        );
    switch (category) {
        case 'popular':
            moviesData = await moviesService.getPopularMovies(
                paginationPage.toString()
            );
            break;
        case 'upcoming':
            moviesData = await moviesService.getUpcomingMovies(
                paginationPage.toString()
            );
            break;
        case 'top_rated':
            moviesData = await moviesService.getTopRatedMovies(
                paginationPage.toString()
            );
            break;
    }
    renderMovies(moviesData);
};

export const clearMoviesList = (): void => {
    if (moviesContainer) moviesContainer.innerHTML = '<div></div>';
};

export const getRandomMovie = (movies: []): void => {
    const randomMovieIndex = generateRandom();
    randomMovie = movies[randomMovieIndex];
};

categoriesBar();
searchBar();
paginationButton();
