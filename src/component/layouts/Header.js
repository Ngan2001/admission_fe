import React, { Component } from "react";
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
                        <img src="admin-lte/dist/img/user3-128x128.jpg" class="rounded-circle" alt="..." style={{ height: '40px', width: '40px' }}></img>
                        {/* <a href="#" class="link-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Nguyễn Thị Kim Ngân</a> */}
                        <div className="dropdown">
                            <button
                                className="btn dropdown-toggle border-0 text-white"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false" >
                                Nguyễn Thị Kim Ngân
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Đăng xuất
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        );
}