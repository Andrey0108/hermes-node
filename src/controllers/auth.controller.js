import jwt from 'jsonwebtoken'

export class AuthController {
  constructor ({ authModel }) {
    this.authModel = authModel
  }

  login = async (req, res) => {
    try {
      const data = await this.authModel.login(req.body)
      const token = jwt.sign(data, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES
      })
      res
        .cookie('access_token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict',
          maxAge: 1000 * 60 * 60
        })
        .send({ data, token })
    } catch (error) {
      res.status(401).send(error.message)
    }
  }

  register = async (req, res) => {
    try {
      const { _id } = await this.authModel.register(req.body)
      res.status(200).json({ id: _id })
    } catch (error) {
      res.status(400).send(error.message)
    }
  }

  logout = async (req, res) => {
    res.clearCookie('access_token').send('Logged out')
  }
}
