# aida

## Project setup
Just run docker-compose

After it's built and started open a new terminal window in the root directory and do:
```
docker cp dump.sql aida-pg:/tmp
docker exec -i aida-pg psql --username postgres  postgres < ./dump.sql
```