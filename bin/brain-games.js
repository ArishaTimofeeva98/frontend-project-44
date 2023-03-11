#!/usr/bin/env node
/* eslint-disable */

import { getPlayerName } from '../src/cli.js';

console.log('Welcom to the Brain Games!');

const playerName = getPlayerName();

console.log(`Hello, ${playerName}!`);
