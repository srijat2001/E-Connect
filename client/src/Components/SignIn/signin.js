import SignUp from "../SignUp/signup";
import {Link} from "react-router-dom";
import './signin.css';
const SignIn = () =>{
    return(
        <>
            <div className="container-fluid d-flex justify-content-center align-items-center body">
                <div className="d-flex flex-column align-items-center justify-content-center login-box">
                    <form>
                        <h2 className="mb-4">Sign In to your account</h2>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control"/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control"/>
                        </div>
                        <div className="d-flex justify-content-center p-4">
                            <button type="submit" className="btn btn-light">Sign In</button>
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