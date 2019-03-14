import { auth, favoritesByUserRef } from '../firebase/firebase.js';

export function makeBreweryCanvas(brewery) {
    const html = `
    <div id="brewery">
        <a href="${brewery.website_url}">
            <h2>${brewery.name}</h2>    
        </a>
        <h4>${brewery.brewery_type}</h4>
        <div>
            <h3>${brewery.city}</h3>
            <h3>${brewery.state}</h3>
        </div>
        <img src="../../assets/fav-unselected.svg" id="favorite-icon">
    </div>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const breweryContainer = document.getElementById('brewery-container');

export default function loadBreweries(body) {
    while(breweryContainer.children.length > 0) {
        breweryContainer.lastElementChild.remove();
    }

    body.forEach(brewery => {
        const dom = makeBreweryCanvas(brewery);
        const favorite = dom.querySelector('#favorite-icon');

        const userId = auth.currentUser.uid;
        const userFavoritesRef = favoritesByUserRef.child(userId);
        const userFavoriteBreweryRef = userFavoritesRef.child(brewery.id);
        userFavoriteBreweryRef.once('value')
            .then(snapshot => {
                const value = snapshot.val();
                let isFavorite = false;
                if(value) {
                    addFavorite();
                }
                else {
                    removeFavorite();
                }

                function addFavorite() {
                    isFavorite = true;
                    favorite.src = '../../assets/fav-selected.svg';
                }
                function removeFavorite() {
                    isFavorite = false;
                    favorite.src = '../../assets/fav-unselected.svg';
                }

                favorite.addEventListener('click', () => {
                    if(isFavorite) {
                        userFavoriteBreweryRef.remove();
                        removeFavorite();
                    }
                    else {
                        userFavoriteBreweryRef.set({
                            id: brewery.id,
                            name: brewery.name,
                            type: brewery.brewery_type,
                            city: brewery.city,
                            state: brewery.state
                        });
                        isFavorite = true;
                        addFavorite();
                    }
                });
            });
        breweryContainer.appendChild(dom);
    });
}

