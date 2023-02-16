import { getMovies } from './moviesList';
import { checkedCategory } from './categoriesBar';

export let paginationPage = 1;

export const paginationButton = (): void => {
    const button: HTMLButtonElement | null =
        document.querySelector('#load-more');
    button?.addEventListener('click', () => {
        paginationPage += 1;
        console.log(paginationPage);
        getMovies(checkedCategory);
    });
};

export const resetPaginationNumberPage = (): void => {
    paginationPage = 1;
};
