import objectToArray from './object-to-array.js';
import makeUserTemplate from './make-user-template.js';
import loadBreweries from './api/make-brew-canvas.js';
import { auth, favoritesByUserRef } from './firebase/firebase.js';

makeUserTemplate();

auth.onAuthStateChanged(user => { 
    const userId = user.uid;
    const userFavoritesRef = favoritesByUserRef.child(userId);

    userFavoritesRef.on('value', snapshot => {
        const data = snapshot.val();
        const favoriteBreweries = objectToArray(data);
        loadBreweries(favoriteBreweries);
    });
});