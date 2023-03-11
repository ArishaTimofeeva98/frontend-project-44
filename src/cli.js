import readlineSync from 'readline-sync';

function getPlayerName() {
    const playerName = readlineSync.question('What is your name: ');
    return playerName;
}

export { getPlayerName };