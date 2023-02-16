import { getMovies, clearMoviesList } from './moviesList';
import { resetPaginationNumberPage } from './paginationButton';

export let checkedCategory = 'popular';

export const categoriesBar = (): void => {
    const buttons: NodeListOf<HTMLInputElement> =
        document.querySelectorAll('.btn-check');
    //add event listeners to buttons

    buttons.forEach((button) => {
        button?.addEventListener('click', (event: Event) => {
            const target = event.target as HTMLInputElement;
            checkedCategory = target?.id;
            clearMoviesList();
            resetPaginationNumberPage();
            getMovies(target?.id);
        });
    });
};
