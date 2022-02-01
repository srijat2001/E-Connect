import {Link} from "react-router-dom";
import './signup.css'
const SignUp = () => {
    return(
        <>
            <div class="container-fluid d-flex justify-content-center align-items-center body">
                <div class="d-flex flex-column align-items-center justify-content-center signup-box">
                    <form>
                        <h2 class="mb-4">Sign Up to your account</h2>
                        <div class="mb-3">
                            <label class="form-label">Username</label>
                            <input type="text" class="form-control"/>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email address</label>
                            <input type="email" class="form-control"/>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Password</label>
                            <input type="password" class="form-control"/>
                        </div>
                        <div class="d-flex justify-content-center p-4">
                            <button type="submit" class="btn btn-light">Sign Up</button>
                        </div>
                        <div class="d-flex justify-content-center p-4">
                            <p>Already have an account ? <Link to="/signin" class="signin-link">SignIn</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp;