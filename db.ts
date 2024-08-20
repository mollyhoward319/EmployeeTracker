import { Pool, PoolClient} from "pg";

const pool = new Pool({
    user: process.env.db_user!,
    password: process.env.db_password!,
    host: process.env.db_host!,
    port: parseInt(process.env.db_port!),
    database: process.env.db_name!
})

export default pool.connect()