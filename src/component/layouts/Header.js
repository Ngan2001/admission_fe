import React, { Component } from "react";
import Register from "./Register";
import Login from "./Login";
import { Outlet, Link } from "react-router-dom";
export default class Header extends Component {
    
    render() {
        const buttonCSS = {
            width: '200px',
            height: '40px',
            background: 'white',
            marginLeft: '10px'
        }
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid" style={{ background: '#1150a0' }}>
                    <a className="navbar-brand" href="#">
                        <img style={{ height: '50px', width: '50px' }} src="assets/images/school-logo.png" className="d-block w-100" alt="..." />
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
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Link
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Action
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Another action
                                        </a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Something else here
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            {/* <input
                                className="form-control me-2 w-25"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit" style={buttonCSS}>
                                Search
                            </button> */}

                            <Link className="btn btn-outline-success" style={buttonCSS} to="/login">Đăng nhập</Link>
                            <Link className="btn btn-outline-success" style={buttonCSS} to="/register">Đăng ký</Link>
                        </form>
                    </div>
                </div>
            </nav>

        );
    }
}