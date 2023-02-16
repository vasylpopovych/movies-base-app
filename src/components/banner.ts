import { randomMovie } from './moviesList';

export const showBanner = (): void => {
    const banner: HTMLTableSectionElement | null =
        document.querySelector('#random-movie');
    const randomMovieTitle: HTMLHeadingElement | null =
        document.querySelector('#random-movie-name');
    const randomMovieDescription: Element | null = document.querySelector(
        '#random-movie-description'
    );
    //render new values
    if (randomMovieTitle) randomMovieTitle.textContent = randomMovie.title;
    if (randomMovieDescription)
        randomMovieDescription.textContent = randomMovie.overview;
    if (banner)
        banner.style.backgroundImage = `url('https://image.tmdb.org/t/p/original/${randomMovie.backdrop_path}')`;
};
