import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import { errorHandler } from '../utils/error.js'

export const signup = async(req,res,next)=>{
    const {username,email,password} = req.body
    if(!username || !email || !password || username === '' || email === '' || password === ''){
        return next(errorHandler(400,'All fields are required'))
    }

    const hashPassword = bcryptjs.hashSync(password,10)

    const newUser = new User({
        username,
        email,
        password:hashPassword
    })

    try {
        await newUser.save()
        return res.json('Signup successfull')
    } catch (error) {
        next(error)
    }
}