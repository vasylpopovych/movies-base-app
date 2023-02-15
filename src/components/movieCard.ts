const createMovieCard = (
    imgUrl: string,
    description: string,
    date: string
): HTMLDivElement => {
    const movieCard = document.createElement('div');
    movieCard.className = 'col-lg-3 col-md-4 col-12 p-2';
    movieCard.innerHTML = `<div class="card shadow-sm">
    <img class="poster" src="https://image.tmdb.org/t/p/original/${imgUrl}" />
    <svg xmlns="http://www.w3.org/2000/svg" stroke="red" fill="#ff000078" width="50" height="50"
                                class="bi bi-heart-fill position-absolute p-2" viewBox="0 -2 18 22">
                                <path fill-rule="evenodd"
                                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                            </svg>
    <div class="card-body">
        <p class="card-text truncate">${description}</p>
        <div class="
                    d-flex
                    justify-content-between
                    align-items-center
                ">
            <small class="text-muted">${date}</small>
        </div>
    </div>
</div>`;
    return movieCard;
};

export default createMovieCard;
