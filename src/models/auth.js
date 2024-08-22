import { pool } from '../db.js'

export class AuthModel {
  async login (user) {
    const { rows } = await pool.query('SELECT * FROM user WHERE email = $1 AND password = $2', [user.email, user.password])
    return rows
  }

  async logout () {
    return 'logout'
  }

  async register (user) {
    const { rows } = await pool.query('INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *', [user.email, user.password])
    return rows
  }
}
