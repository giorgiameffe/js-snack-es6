
// creare un array di oggetti di squadre di calcio

const footballTeams = [

    {
        team: 'Lazio',
        fouls: 0,
        goals: 0
    },
    {
        team: 'Torino',
        fouls: 0,
        goals: 0
    },
    {
        team: 'Inter',
        fouls: 0,
        goals: 0
    },
    {
        team: 'Atalanta',
        fouls: 0,
        goals: 0
    },
    {
        team: 'Napoli',
        fouls: 0,
        goals: 0
    }  
]

// creare una funzione per generare numeri randomici

function generateRandomNumbers (min,max) {

    const randomNumbers = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumbers;  
}

// iterare l'array per assegnare a ciascuna chiave i numeri randomici come valore

for (let i = 0; i < footballTeams.length; i++) {

    const teamsFouls = generateRandomNumbers(0,10);
    const teamsGoals = generateRandomNumbers(0,10);
    footballTeams[i].fouls = teamsFouls;
    footballTeams[i].goals = teamsGoals;
}

console.log(footballTeams);




