export default function replaceSpaces(place) {
    const placeArray = place.split(' ');    
    let newPlace = placeArray[0];
    
    for(let i = 1; i < placeArray.length; i++) {
        newPlace = (newPlace + '_' + placeArray[i]);
    }

    return newPlace;
}