import { Link } from "react-router-dom";

const Navheader = () => {
    return (

        <>
            <header className="logo">
                <Link to={"/view"}><div className="red1"><img src={require("../Cards/Image/insta_logo.jpg")} alt="logo" /></div></Link>
                <Link className="link" to={"/add"}><div className="red"><img src={require("../Cards/Image/camera-icon.png")} alt="logo" /></div></Link>
            </header>

        </>
    )
}

export default Navheader;