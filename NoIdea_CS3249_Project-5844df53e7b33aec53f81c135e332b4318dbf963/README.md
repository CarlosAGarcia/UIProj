# NoIdea_CS3249_Project
UI project in React-Redux

## Team members:
* \*Adam Alsegård, A0153097B
* Timoté Vaucher, A0153040Y
* Sheng Xuan, A0142230B
* Carlos Garcia, A0164527B

## Setup:
We assume `node >= 6.0.0` and `npm >= 3.8.6`. You'll also need to install [RethinkDB](https://rethinkdb.com/docs/install/) (*Note*: it's mandatory to have it running on the default config (localhost, 28015) or change the config files under `./config`) and then run `npm run db-setup` on the first time to setup the database.

After cloning the repo execute to produce the dev server:
```
npm install
npm start
```
After that open your brower on your [localhost:3000](http://localhost:3000/)

For production server after `npm install`:
```
npm run build:prod
npm run start:prod
```
After that open your brower on your [localhost:3005](http://localhost:3005/)

## Note on documentation:
- To generate documentation run `npm run jsdoc` and open global.html in ./docs or run `npm run serve-docs` to open a local host
- When commenting; follow the examples in Community-related files
- If there's no relevant example, try to find a correct [block-tag](http://usejsdoc.org/index.html#block-tags)). Add more details when needed as well!
- /\*\* This is a documented comment \*/

## Testing:
- Uses jest to test
- If not set up:
```
npm install --save-dev jest
npm start --save-dev babel-jest

```
- After this run:
```
npm test
```