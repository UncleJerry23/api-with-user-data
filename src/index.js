import './api/filter-component.js';
import makeUrlQuery from './api/make-url-query.js';
import { readFromQuery } from './api/query-components.js';
import loadBreweries from './api/make-brew-canvas.js';
import updatePaging from './api/paging.js';
import loadHeader from './make-user-template.js';

loadHeader();

window.addEventListener('hashchange', () => {
    const searchOptions = readFromQuery(window.location.hash);
    const apiUrl = makeUrlQuery(searchOptions);
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(body => {
            loadBreweries(body);
            updatePaging(searchOptions);
        });
});
