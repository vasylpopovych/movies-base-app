import { getMovies } from './moviesList';

export const categoriesBar = (): void => {
    const buttons: NodeListOf<HTMLInputElement> =
        document.querySelectorAll('.btn-check');
    //add event listeners to buttons

    buttons.forEach((button) => {
        button?.addEventListener('click', (event: Event) => {
            const target = event.target as HTMLInputElement;
            getMovies(target?.id);
        });
    });
};
