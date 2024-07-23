.PHONY: *

all:
	make dev

install:
	npm install

pretty:
	npx prettier --write .

dev:
	npm run dev

build:
	npm run build

deploy:
	npm run deploy
