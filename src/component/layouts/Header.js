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

        const brandTxt = {
            color: '#fff',
            textTransform: 'uppercase',
            fontSize: '20px',
            fontWeight: '400',
        }
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{padding: 0}}>
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
                        <form className="ms-auto" role="search">
                            {/* <input
                                className="form-control me-2 w-25"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit" style={buttonCSS}>
                                Search
                            </button> */}

                            <Link className="btn btn-outline-primary" style={buttonCSS} to="/login">Đăng nhập</Link>
                            <Link className="btn btn-outline-primary" style={buttonCSS} to="/register">Đăng ký</Link>
                        </form>
                    </div>
                </div>
            </nav>

        );
    }
}