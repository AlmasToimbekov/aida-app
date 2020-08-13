const promise = require('bluebird')

const options = {
    promiseLib: promise
}

const PG_USER = process.env.PG_USER
const PG_PASSWORD = process.env.PG_PASSWORD
const PG_HOST = process.env.PG_HOST
const PG_PORT = process.env.PG_PORT
const PG_DB = process.env.PG_DB

const pgp = require('pg-promise')(options)
const connectionString = `postgres://${PG_USER}:${PG_PASSWORD}@${PG_HOST}:${PG_PORT}/${PG_DB}`
const db = pgp(connectionString)


module.exports = {
    db
}