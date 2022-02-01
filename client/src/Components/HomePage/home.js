import './home.css';
import {Link} from "react-router-dom";
import MainPage from "../MainPage/index";
import HomeImage from "../../Assets/home.svg"
const Home = () => {
    return(
        <>
            <div class="body">
                <nav class="navbar navbar-expand-lg bg-dark">
                    <div class="container-fluid">
                    <Link class="navbar-brand" to="#">E-Connect</Link>
                    <Link class="navbar-brand" to="/">Logout</Link>
                    </div>
                </nav>
                <div class="d-flex justify-content-around align-items-center">
                    <div class="d-flex flex-column gap-2">
                        <h1 class="home-header">Hi, Srija Tiyyagura</h1>
                        <h2 class="home-caption">Connect, collaborate, and celebrate from anywhere with E-Connect!</h2>
                        <div class="d-flex gap-5">
                            <div class="d-flex gap-2">
                                <input class="create-input"placeholder="Enter Meet Name" size="15" type="text" />
                                <button class="btn btn-primary home-btn" onclick="window.location.href='#'" type="button">Create Meet</button>
                            </div>
                            <div class="d-flex gap-2">
                                <input class="join-input" placeholder="Enter Meet Url" size="15" type="text" />
                                <button class="btn btn-danger home-btn" type="button">Join Meet</button>
                            </div>
                        </div>
                    </div>
                    <img class="home-img" src={HomeImage}/>   
                </div>
            </div>
        </>
    )
}

export default Home;