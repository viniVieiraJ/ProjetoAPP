onLoad();

function onLoad() {
    let games = [];

    let SOT = {
        name: 'Sea Of Thieves',
        PEGI: 16,
        genre: 'MMORPG'
    };

    let League = {
        name: 'League of Legends',
        PEGI: 10,
        genre: 'MOBA'
    };

    let DMC = {
        name: 'Devil May Cry',
        PEGI: 18,
        genre: 'Hack n Slash'
    };

    games.push(SOT);
    games.push(League);
    games.push(DMC);

    games.sort(ordenarPorPEGI);

    imprimirArray('spanOrderedPorPEGI', games);
}

function ordenarPorPEGI(a, b) {
    return a.PEGI - b.PEGI;
}

function imprimirArray(id, array) {
    let span = document.getElementById(id);
    span.innerHTML = '';

    for (let i = 0; i < array.length; i++) {
        span.innerHTML += array[i].name + ' (PEGI: ' + array[i].PEGI + ', genero: ' + array[i].genre + ')<br>';
    }
}
