import { JWT_SECRET } from '../config'
import { verifyToken } from '../helpers/generateJWT'

export const checkAuth = async (req, res, next) => {
  const token = req.cookies.access_token
  req.session = { user: null }

  try {
    const data = await verifyToken(token, JWT_SECRET)
    req.session.user = data
  } catch {}

  next()
}
