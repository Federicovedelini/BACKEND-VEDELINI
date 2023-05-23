import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import config from '../config.js'

export const signUp = async (req, res) => {
    const {username, email, password, roles} = req.body;

  const newUser = new User({
    username,
    email,
    password: User.encryptPassword(password)
  })

  console.log(newUser)

    res.json('signup')
   
}

export const signIn = async (req, res) => {
    res.json('signin')
};


