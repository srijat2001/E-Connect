import './index.css';
import IndexLogo from '../../Assets/index.svg';
import {useNavigate} from "react-router-dom";

function Index(){
    const navigate = useNavigate();
    return (
        <>
            <div className="body">
                <div className="d-flex justify-content-around align-items-center">
                    <div className="d-flex flex-column gap-2">
                        <h1 className="index-header">E-Connect</h1>
                        <h2 className="index-caption">Meet,Call and Connect in just one place</h2>
                        <div className="d-flex gap-3">
                            <button className="btn btn-light index-btn " type="button" onClick={()=> navigate('/signup')}>Sign Up</button>
                            <button className="btn btn-light index-btn" type="button" onClick={()=> navigate('/signin')}>Sign In</button>
                        </div>
                    </div>
                    <img className="index-img" src={IndexLogo}/>   
                </div>
            </div>
        </>
    )
}

export default Index;
