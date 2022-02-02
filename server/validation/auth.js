import validator from 'validator';

export const ValidateSignUp = (data) => {
    let errors = {};
    if(!validator.isLength(data.name,{min : 5,max:30})){
        errors.name = "Name must be between 5 and 30 characters";
    }
    if(validator.isEmpty(data.name)){
        errors.name = "Name field is required";
    }
    if(validator.isEmpty(data.email)){
        errors.email = "Email field is required";
    }
    if(!validator.isEmail(data.email)){
        errors.email = "Email is invalid";
    }
    if(validator.isEmpty(data.password)){
        errors.password = "password field is required";
    }
    if(!validator.isLength(data.password,{min : 6,max:30})){
        errors.password = "password must be atleast 6 characters";
    }
    return errors;        
}

export const ValidateSignIn = (data) => {
    let errors = {};

    if(!validator.isEmail(data.email)){
        errors.email = "Email is invalid";
    }
    if(validator.isEmpty(data.email)){
        errors.email = "Email field is required";
    }
    if(validator.isEmpty(data.password)){
        errors.password = "password field is required";
    }
    return errors;
}