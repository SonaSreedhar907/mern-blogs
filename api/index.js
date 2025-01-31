import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js'

dotenv.config()

mongoose.connect(process.env.MONGO)
   .then(()=>{
    console.log('mongodb is connected')
   }).catch(err=>{
    console.log(err)
   })


const app = express()

app.use(express.json())

app.get('/',(req,res) =>{
   res.json({ message: "welcome to my API"})
})


app.listen(3000,()=>{
    console.log('server is running on port 3000 !!!')
})

app.use('/api/auth',authRoutes)