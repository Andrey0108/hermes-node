import { pool } from '../db.js'

export class AuthModel {
  async login () {
    const { rows } = await pool.query('SELECT * FROM permissions')
    return rows
  }

  async logout () {
    return 'logout'
  }

  async register () {
    return 'register'
  }
}
