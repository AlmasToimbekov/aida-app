const promise = require('bluebird')

const options = {
    promiseLib: promise
}

const POSTGRES_USER = process.env.POSTGRES_USER
const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD
const POSTGRES_HOST = process.env.POSTGRES_HOST
const POSTGRES_PORT = process.env.POSTGRES_PORT
const POSTGRES_DBNAME = process.env.POSTGRES_DBNAME

const pgp = require('pg-promise')(options)
const connectionString = `postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DBNAME}`
const db = pgp(connectionString)


module.exports = {
    db
}