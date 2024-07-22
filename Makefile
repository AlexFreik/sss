.PHONY: *

all:
	make dev

install:
	npm install

pretty:
	npx prettier --write .

dev:
	npm run dev

deploy:
	npm run deploy
