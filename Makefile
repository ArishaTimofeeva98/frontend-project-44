install:
	npm install
	npm ci
on: 
	npm publish --dry-run
up:
	node bin/brain-games.js
