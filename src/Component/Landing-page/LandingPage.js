import React from "react";
import "./LandingPage.css";
import {Link} from 'react-router-dom';

const LandingPage = () => {
    return (
        <>
            <div className="landing-page">
                <div className="page">
                    <div className="landing-img">
                        <img src={require("../Cards/Image/landing_img.png")} alt="landing " />
                    </div>
                    <div className="landing-text">
                        <p>10x Team 04</p>

                       <Link to={"/view"}><button className="btn">Enter</button></Link>
                      

                        
                    </div>
                </div>


            </div>
        </>
    )
}
export default LandingPage;