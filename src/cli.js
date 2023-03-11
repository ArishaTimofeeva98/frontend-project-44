import readlineSync from 'readline-sync';

function getPlayerName() {
  console.log('Hello');
  const playerName = readlineSync.question('What is your name: ');
  return playerName;
}

export default { getPlayerName };
