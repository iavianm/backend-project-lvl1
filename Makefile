install:
	npm ci
	npm install readline-sync
install-eslint:
	npm install --save-dev eslint
brain-games:
	node bin/brain-games.js
	node bin/brain-even.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
lint-fix:
	npx eslint --fix .