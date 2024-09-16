import { verifyToken } from '../helpers/generateJWT'

export const checkAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorizathin.split(' ').pop()
    const tokenData = await verifyToken(token)
    if (tokenData._id) {
      next()
    } else {
      res.status(409).json({ msg: 'No tienes acceso' })
    }
  } catch (e) {
    console.log(e)
  }
}
