import { renderMoviesList } from './components/moviesList';

const App = (): void => {
    //clear movies list
    const moviesContainer: HTMLDivElement | null =
        document.querySelector('#film-container');
    if (moviesContainer) moviesContainer.innerHTML = '<div></div>';
    renderMoviesList();
};

export default App;
