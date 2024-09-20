import jwt from 'jsonwebtoken'

export const tokenSign = async (user) => {
  return jwt.sign(
    {
      _id: user._id,
      role: user.idRole
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES
    }
  )
}

export const verifyToken = async (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET)
  } catch (e) {
    return e
  }
}

export const decodeSign = (token) => {
  return token
}
