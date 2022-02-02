import {Link} from "react-router-dom";
import './signup.css'
import {useState} from 'react';
import axios from 'axios';
const SignUp = () => {
    const [user,setuser] = useState({
        name : "",
        email : "",
        password : ""
    });
    const handleSubmit = async(e) => {
        try{
            e.preventDefault();
            const newUser = {
                name : user.name,
                email : user.email,
                password : user.password
            }
            const userData = await axios.post('http://localhost:4000/api/user/signup',newUser);
            console.log(userData.data.error);
        } catch(err){
            console.log(err);
        }
    }
    return(
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center body">
                <div className="d-flex flex-column align-items-center justify-content-center signup-box">
                    <form>
                        <h2 className="mb-4">Sign Up to your account</h2>
                        <div className="mb-3">
                            <label className="form-label">Username</label>
                            <input type="text" className="form-control" onChange={(e)=>setuser({...user,name : e.target.value})}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" onChange={(e)=>setuser({...user,email : e.target.value})}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" onChange={(e)=>setuser({...user,password : e.target.value})}/>
                        </div>
                        <div className="d-flex justify-content-center p-4">
                            <button type="submit" className="btn btn-light" onClick={handleSubmit}>Sign Up</button>
                        </div>
                        <div className="d-flex justify-content-center p-4">
                            <p>Already have an account ? <Link to="/signin" className="signin-link">SignIn</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp;