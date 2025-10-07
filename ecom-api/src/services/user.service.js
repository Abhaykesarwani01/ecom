const createUser = async(userData)=>{
    try {
        let {firstName,lastname,email,password}=userData;

        const isUserExist =  await User.findOne({email:email});
        if(isUserExist){
            throw new Error("User already exists");
        }

    } catch (error) {
        
    }
}