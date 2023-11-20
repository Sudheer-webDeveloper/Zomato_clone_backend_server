const express = require('express')
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv').config()
const app = express()
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))
const cors = require('cors')
const AppRouter = require('./routes/AppRoute')
const paymentRouter = require('./routes/PaymentRoute')

// cors is for to work our api's on multiple port // for production it is not require , for building our locally it is require // we are setting to route here that's why we place it here
app.use(cors({
    credentials:true,
    origin:'http://localhost:5173' 
}))


app.use(express.json())
app.use("/api",AppRouter)
app.use("/api/payment",paymentRouter)
const {mongoose} = require('mongoose')




mongoose.connect(process.env.MONGOOSE_URI).then(()=>{
    console.log("databse connected successfully")
    app.listen(3000,()=>console.log("listening on port 3000"))
    
}).catch((error)=>{
    console.log(error)
})


















// const MONGOOSE_URI = `mongodb+srv://admin:admin@cluster0.41qym7q.mongodb.net/`