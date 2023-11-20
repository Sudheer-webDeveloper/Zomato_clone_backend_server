const bcrypt = require('bcrypt')

const hashingPassword = (password) =>{
    return new Promise((resolve,reject)=>{
        bcrypt.genSalt(12,(err,salt)=>{
            if(err){
                reject("If any error in gen salt",salt)
            }
            console.log("The salt is here", salt)
            bcrypt.hash(password,salt,(err,hash)=>{
                if(err){
                    reject("If any err while gen hash pass with salt",err)
                }
                resolve(hash)
                console.log("hashed password", hash)
            })
        })
    })
}


const  comparePassword = (password,hashedPassword) =>{
   return bcrypt.compare(password,hashedPassword) // it returns the boolean value , copmares the passwords between exsisting password in detabase and user typed password
}


module.exports = {
    hashingPassword,comparePassword
}
