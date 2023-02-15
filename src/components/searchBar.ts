import { getMovies } from './moviesList';

export const searchBar = (): void => {
    const searchButton: HTMLButtonElement | null =
        document.querySelector('#submit');
    const searchInput: HTMLInputElement | null =
        document.querySelector('#search');
    searchButton?.addEventListener('click', () => {
        if (searchInput?.value.trim()) getMovies('', searchInput.value);
    });
};
