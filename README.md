# Model A SQL Database

## Notes from Videos (ToBeCleaned Up)

### Project Setup and Docker Compose File

Basic File Directory created and docker compose file setup. Copied contents from dockerhub Postgres image page and modified for our needs.

By end of section should be able to bring docker image up and down with a persistant directory mapped via `volumes` to keep db data from disappearing.

```sh
mkdir inventory-app               //Project Folder
cd inventory-app                  
mkdir backend                     //backend of app
cd backend
touch docker-compose.yaml         //for postgres+adminer
touch .env                        //hold env variables for dockerfile, etc
mkdir /docker-data/db-data        //spot for db data to be hosted locally
//Now you should be able to test your docker compose
docker-compose up
docker-compose down

```

### Adding node.js and knex to the Party

Initialize a node project in your backed directory. Then install the following:
* pg - postgres interface
* knex - wrapper for pg/sql commands
* dotenv - to use the .env file
* eslint - to aid in code linting

Clean up your knex.js file to point to the right places for your db, migration, and seed locations. Once you create your initial migration file, this is where you will begin to design the tables for your db. You can use the code to set the order tables are created. As well as the order to drop them (important when some are dependent on others.)

A `tableNames.js` file is created to hold a nice clean list of our tables. I should do my own design file and try this more personalized...

Finally, add scripts to your `package.json` file to make easier way to run migration and rollback (up/down) commands.

```sh
npm init -y

npm i pg
npm i knex
npm i dotenv

npx knex init

npm i -d eslint
npx eslint --init //3-2-3-n-node-1-1-1-y

//update your knexfile.js
mkdir /db/migrations/
//update knexfile [Migrations] 'directory'
npx knex migrate:make initial       
//this migration file will hold your table design
//has both a deploy/rollback sections to control order of creation/drop

mkdir /src/constants/
touch tableNames.js
//export this module to have standard and easy name recall

//update your package.json to make migrate/rollback scripts
// migrate: 'knex migrate:latest' 
// rollback: 'knex migrate:rollback'

npm run migrate

npm run rollback
```



## Links etc.

- Source of project: (Coding Garden)[https://www.youtube.com/playlist?list=PLM_i0obccy3uJ876-W_BKBzjd9L2ZGB4B]
- (Knex Migration and Seeding example)[https://gist.github.com/NigelEarle/70db130cc040cc2868555b29a0278261]
- (Postgres Docker page)[]
- Update YAML with pgadmin4 - https://github.com/khezen/compose-postgres/blob/master/docker-compose.yml