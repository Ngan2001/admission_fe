import React, { useState, useEffect } from "react";
import Register from "./Register";
import Login from "./Login";
import { Outlet, Link } from "react-router-dom";
export default function Header() {
        const buttonCSS = {
            width: '200px',
            height: '40px',
            background: 'white',
            marginLeft: '10px'
        }

        const brandTxt = {
            color: '#fff',
            textTransform: 'uppercase',
            fontSize: '20px',
            fontWeight: '400',
        }

        const [isLogged, setIsLogged] = useState(false);
        const [userAvatarURL, setUserAvatarURL] = useState("");
        const [username, setUsername] = useState("");

        useEffect(() => {
            let checkUserLogin = localStorage.getItem("isLogged");
            if(checkUserLogin) {
                setIsLogged(checkUserLogin);
                let user = JSON.parse(localStorage.getItem("user"));
    
                if(user != null && user != undefined) {
                    setUserAvatarURL(user.avatar);
                    setUsername(user.username);
                }
            }
        }, []);

        const logOut = () => {
            localStorage.clear();
            setIsLogged(false);
        }

        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ padding: 0 }}>
                <div className="container-fluid" style={{ background: '#1150a0' }}>
                    <a className="navbar-brand" href="/">
                        <img style={{ height: '90px', width: '120px' }} src="assets/images/school-logo.png" className="d-block w-100" alt="..." />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <span style={brandTxt} >Cổng thông tin tuyển sinh<br />
                            Trường Đại học Mở Thành phố Hồ Chí Minh</span>
                        { !isLogged && 
                            <form className="ms-auto" role="search">
                                <Link className="btn btn-outline-primary" style={buttonCSS} to="/login">Đăng nhập</Link>
                                <Link className="btn btn-outline-primary" style={buttonCSS} to="/register">Đăng ký</Link>
                            </form>
                        }

                        { isLogged && 
                            <div className="d-flex ms-auto">
                                <img src={userAvatarURL} className="rounded-circle" alt="..." style={{ height: '40px', width: '40px' }}></img>
                                <div className="dropdown">
                                    <button
                                        className="btn dropdown-toggle border-0 text-white"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false" >
                                            {username}
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a className="dropdown-item" href="#" onClick={logOut}>
                                                Đăng xuất
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        }
                        
                        
                    </div>
                </div>
            </nav>

        );
}