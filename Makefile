install:
	npm ci
	npm install readline-sync
install-eslint:
	npm install --save-dev eslint
brain-games:
	node bin/brain-games.js
	node games/brain-even.js
	node games/brain-calc.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
lint-fix:
	npx eslint --fix .