export default function makeUrlQuery(queryOptions) {
    const baseUrl = 'https://api.openbrewerydb.org/breweries';

    if(!queryOptions) {
        return '';
    }

    const apiSearchUrl = new URL(baseUrl);
    apiSearchUrl.searchParams.set('by_state', queryOptions.state);
    apiSearchUrl.searchParams.set('by_city', queryOptions.city);
    apiSearchUrl.searchParams.set('by_type', queryOptions.type);
    apiSearchUrl.searchParams.set('page', queryOptions.page);

    return apiSearchUrl;
}