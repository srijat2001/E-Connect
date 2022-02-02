import {Link, Navigate} from "react-router-dom";
import {useState} from 'react';
import './signin.css';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const SignIn = () =>{
    const navigate = useNavigate();
    const [user,setuser] = useState({
        email : "",
        password : "",
        errors : {}
    });
    const handleSubmit = async(e) => {
        try{
            e.preventDefault();
            const newUser = {
                email : user.email,
                password : user.password
            }
            const UserData = await axios.post('http://localhost:4000/api/user/signin',newUser);
            console.log(UserData);  
            navigate('/home');
        } catch(err){
            const msg = err.response.data;
            setuser({...user,errors : msg});
            console.log(msg);
        }
    }
    const {errors} = user;
    return(
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center body">
                <div className="d-flex flex-column align-items-center justify-content-center login-box">
                    <form>
                        <h2 className="mb-4">Sign In to your account</h2>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" onChange={(e)=>setuser({...user,email : e.target.value})}/>
                            {errors.email && <div className="error-display">{errors.email}</div>}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" onChange={(e)=>setuser({...user,password : e.target.value})}/>
                            {errors.password && <div className="error-display">{errors.password}</div>}
                        </div>
                        <div className="d-flex justify-content-center p-4">
                            <button type="submit" className="btn btn-light" onClick={handleSubmit}>Sign In</button>
                        </div>
                        <div className="d-flex justify-content-center">
                            <p className="mx-auto">Don't have an account ? <Link className="signup-link" to="/signup">SignUp</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>    
    )
}

export default SignIn;