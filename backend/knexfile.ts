import * as dotenv from 'dotenv'
import type { Knex } from 'knex'
import { knexSnakeCaseMappers } from 'objection'

dotenv.config()

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      user: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DATABASE
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    },
    ...knexSnakeCaseMappers()
  }
}

export default config
