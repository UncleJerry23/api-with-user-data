var config = {
    apiKey: 'AIzaSyBgqKjStBoIPk0AqgLhioMCM8s-Hym9V8I',
    authDomain: 'brew-api-53655.firebaseapp.com',
    databaseURL: 'https://brew-api-53655.firebaseio.com',
    projectId: 'brew-api-53655',
};
export const app = firebase.initializeApp(config);

export const auth = firebase.auth();

const db = firebase.database();
export const usersRef = db.ref('users');
export const favoritesByUserRef = db.ref('favorites-by-user');