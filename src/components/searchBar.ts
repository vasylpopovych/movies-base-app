import { getMovies, clearMoviesList } from './moviesList';
import { resetPaginationNumberPage } from './paginationButton';

export const searchBar = (): void => {
    const searchButton: HTMLButtonElement | null =
        document.querySelector('#submit');
    const searchInput: HTMLInputElement | null =
        document.querySelector('#search');
    searchButton?.addEventListener('click', () => {
        if (searchInput?.value.trim()) {
            clearMoviesList();
            resetPaginationNumberPage();
            getMovies('', searchInput.value);
        }
    });
};
