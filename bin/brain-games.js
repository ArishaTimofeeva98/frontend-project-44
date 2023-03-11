#!/usr/bin/env node

import { getPlayerName } from "../src/cli.js";

const playerName = getPlayerName();

console.log("Welcome, " + playerName + ", to the Brain Games!");
