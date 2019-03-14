const test = QUnit.test;

QUnit.module('user profile');

import { makeUserTemplate } from '../../src/make-user-template.js';

test('user html', assert => {
    // arrange
    const user = {
        displayName: 'Jared Myhrberg',
        photoURL: './assets//avatar-placeholder.png'
    };
    // act
    const result = makeUserTemplate(user);
    // assert
    assert.htmlEqual(result, /*html*/`
    <div id="user">
        <a href="favorites.html"><img src="./assets//avatar-placeholder.png" alt="avatar" id="user-image"></a>
        <a href="favorites.html"><p id="name">Jared Myhrberg</p></a>
        <button>Logout</button>
    </div>
    `);
});