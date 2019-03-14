import { writePageToQuery } from './query-components.js';

const currentPage = document.getElementById('current-page');
const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');

let currentPageNumber = 1;

export default function updatePaging(searchOptions) {
    const existingQuery = window.location.hash;

    currentPageNumber = searchOptions.page;
    currentPage.textContent = currentPageNumber;
    previousButton.disabled = searchOptions.page === 1;

    writePageToQuery(existingQuery, currentPageNumber);
}

function updateQuery() {
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writePageToQuery(existingQuery, currentPageNumber);
    window.location.hash = newQuery;
}

nextButton.addEventListener('click', () => {
    currentPageNumber++;
    updateQuery();
});

previousButton.addEventListener('click', () => {
    currentPageNumber--;
    updateQuery();
});



