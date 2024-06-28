.PHONY: *

all:
	make start

install:
	npm install

pretty:
	npx prettier --write .

start:
	npm start
