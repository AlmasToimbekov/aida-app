# aida

## Project setup
Just run docker-compose

After it's built and started open a new terminal window in the root directory and do:
```
docker cp dump.sql aida-pg:/tmp
docker exec -i aida-pg psql --username postgres  postgres < ./dump.sql
```
Create dump for heroku:
```
PGPASSWORD=123 pg_dump -Fc --no-acl --no-owner -h localhost -p 55432 -U postgres --format=c postgres > mydb.dump
```
Then restore it from heroku db using pg-restore