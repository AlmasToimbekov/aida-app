# aida

## Project setup
Just run docker-compose

After it's built and started open a new terminal window in the root directory and do:
```
docker cp dump.sql postgres-db:/tmp
docker exec -i postgres-db psql --username postgres  postgres < ./dump.sql
```