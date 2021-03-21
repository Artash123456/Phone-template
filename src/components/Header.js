import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./components.scss";
const Header = () => {
    const [scrlHeight, setscrlHeight] = useState(0)
    const [scrl, setscrl] = useState({y:null})
    useEffect(() => {
        window.addEventListener("scroll",scrollChange)
        return () => {
            window.removeEventListener("scroll", scrollChange)
        }
    }, [scrl])
        const scrollChange = e =>{
           let scroll = e.path[1].scrollY
           setscrlHeight(scroll)
        }

    return (
        <div className={scrlHeight>=150?"header white":"header"}>
            <div className="center">
            <div className="logo">React template</div>
            <ul className="nav">
                <li className={scrlHeight >=817 && scrlHeight<1464?"yel":""} >DOWNLOAD</li>
                <li className={scrlHeight>=1465&& scrlHeight<2440?"yel":""} >FEATURED</li>
                <li className={scrlHeight>=2441?"yel":""}>  CONTACT</li>
            </ul>
            </div>
        </div>
    )
}
export default Header;