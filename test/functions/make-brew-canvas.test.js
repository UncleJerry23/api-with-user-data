const test = QUnit.test;

QUnit.module('html');

import { makeBreweryCanvas } from '../../src/api/make-brew-canvas.js';

test('brewery template', assert => {
    // arrange
    const brewery = {
        'id': 2,
        'name': 'Avondale Brewing Co',
        'brewery_type': 'micro',
        'street': '201 41st St S',
        'city': 'Birmingham',
        'state': 'Alabama',
        'postal_code': '35222-1932',
        'country': 'United States',
        'longitude': '-86.774322',
        'latitude': '33.524521',
        'phone': '2057775456',
        'website_url': 'http://www.avondalebrewing.com',
        'updated_at': '2018-08-23T23:19:57.825Z',
        'tag_list': []
    };
    // act
    const results = makeBreweryCanvas(brewery);
    // assert
    assert.htmlEqual(results, /*html*/`
    <div id="brewery">
        <a href="http://www.avondalebrewing.com">
            <h2>Avondale Brewing Co</h2>
        </a>
        <h4>micro</h4>
        <div>
            <h3>Birmingham</h3>
            <h3>Alabama</h3>
        </div>
        <img src="../../assets/fav-unselected.svg" id="favorite-icon">
    </div>
    `);
});