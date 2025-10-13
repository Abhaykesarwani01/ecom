const User = require('../models/user.model');
const bcrypt = require('bcrypt');

const createUser = async(userData)=>{
    try {
        let {firstName,lastname,email,password}=userData;

        const isUserExist =  await User.findOne({email});
        if(isUserExist){
            throw new Error("User already exists",email);
        }

        password = await bcrypt.hash(password,10);

        const user = await User.create({
            firstName,
            lastname,
            email,
            password
        });

        console.log("created user",user);
        return user;

    } catch (error) {
        throw new Error(error.message);
    }
}


const findUserById = async(userId)=>{
    try {
        const user = await User.findById(userId);
        if(!user){
            throw new Error("User not found with id : ",userId);
        }
        return user;

    } catch (error) {
        throw new Error(error.message);
    }
}

const findUserByEmail = async(email)=>{
    try {
        const user = await User.findOne(email);
        if(!user){
            throw new Error("User not found with email : ",email);
        }
        return user;

    } catch (error) {
        throw new Error(error.message);
    }
}



module.exports = {
    createUser,
    findUserById,
    findUserByEmail
}