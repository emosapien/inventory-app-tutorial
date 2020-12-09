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



## Links etc.

- Source of project: (Coding Garden)[https://www.youtube.com/playlist?list=PLM_i0obccy3uJ876-W_BKBzjd9L2ZGB4B]
- (Knex Migration and Seeding example)[https://gist.github.com/NigelEarle/70db130cc040cc2868555b29a0278261]
- (Postgres Docker page)[]
- Update YAML with pgadmin4 - https://github.com/khezen/compose-postgres/blob/master/docker-compose.yml