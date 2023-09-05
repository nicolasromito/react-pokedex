import pag from "../Assets/Logo.jpg";
 import "./Banner.css";
import { Link } from "react-router-dom";

function Banner() {
    return (
        <div >
            <Link to="/">
                <img  className='imgLogo'
                    src={pag} 
                    alt="" />
            </Link>
        </div>
    )
}

export default Banner