import { writeSearchToQuery } from './query-components.js';
import replaceSpaces from './spaces.js';

const searchFrom = document.getElementById('search-form');

searchFrom.addEventListener('submit', event => {
    event.preventDefault();

    const formDaddy = new FormData(searchFrom);

    const searchOptions = {
        state: replaceSpaces(formDaddy.get('state')),
        city: replaceSpaces(formDaddy.get('city')),
        type: formDaddy.get('type')
    };

    const existingQuery = window.location.hash.slice(1);
    const newQuery = writeSearchToQuery(existingQuery, searchOptions);
    window.location.hash = newQuery;
});