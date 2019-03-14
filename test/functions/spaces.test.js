const test = QUnit.test;

QUnit.module('spaces to _');

import replaceSpaces from '../../src/api/spaces.js';

test('one words', assert => {
    // arrange
    const place = 'portland';
    // act
    const result = replaceSpaces(place);
    // assert
    assert.equal(result, 'portland');
});

test('two words', assert => {
    // arrange
    const place = 'new york';
    // act
    const result = replaceSpaces(place);
    // assert
    assert.equal(result, 'new_york');
});

test('three words', assert => {
    // arrange
    const place = 'new york city';
    // act
    const result = replaceSpaces(place);
    // assert
    assert.equal(result, 'new_york_city');
});