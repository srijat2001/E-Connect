import joi from 'joi';
export const ValidateSignUp = (UserData) => {
    const user = joi.object({
        name : joi.string().required().min(5),
        email : joi.string().required().email(),
        password : joi.string().required().min(5)
    })
    return user.validateAsync(UserData);
}

export const ValidateSignIn = (UserData) => {
    const user = joi.object({
        email : joi.string().required().email(),
        password : joi.string().required().min(5)
    })
    return user.validateAsync(UserData);    
}