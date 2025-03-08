
// creare un array di oggetti 

const bikes = [

    {
        name: 'Bianchi',
        weight: 7.6
    },
    {
        name: 'Bmc',
        weight: 7.5
    },
    {
        name: 'Pinarello',
        weight: 7.8
    },
    {
        name: 'Cinelli',
        weight: 8
    }
    
]

console.log(bikes);
console.log(bikes.length);

// creare array vuoto con i rispettivi pesi delle bici

const bikesWeight = [];

for (let i = 0; i < bikes.length; i++) {

    const currentWeight = bikes[i].weight;
    bikesWeight.push(currentWeight);

}

console.log(bikesWeight);

// sort --> ordina gli elemtenti dell'array dal numero più basso al numero più alto

bikesWeight.sort();

// trovare la bici con il peso minore mettendo a confronto i due array

for (let i = 0; i < bikes.length; i++) {

    const currentWeight = bikes[i].weight;
    // console.log(currentWeight);
    const currentName = bikes[i].name;
    // console.log(currentName);

    if (bikesWeight[0] === currentWeight) {

        console.log(`La bici con il peso minore è ${currentName}, il suo peso è di ${currentWeight} kg`)
    } 
}







