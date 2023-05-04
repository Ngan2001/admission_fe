import React, { useState, useEffect } from "react";

export default function AdminSidebar() {
    const [isLogged, setIsLogged] = useState(false);
    const [userAvatarURL, setUserAvatarURL] = useState("");
    const [username, setUsername] = useState("");

    useEffect(() => {
        let checkUserLogin = localStorage.getItem("isLogged");
        if(checkUserLogin) {
            setIsLogged(checkUserLogin);
            let user = JSON.parse(localStorage.getItem("user"));

            if(user != null && user != undefined) {
                setUserAvatarURL(user.avatar ? user.avatar : '../assets/images/no-avatar.jpg');
                setUsername(user.username);
            }
        }
    }, []);

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <div className="sidebar">

                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src={userAvatarURL} className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a href="/admin" className="d-block">{username}</a>
                    </div>
                </div>
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                        <li className="nav-item">
                            <a href="/admin/user" className="nav-link">
                                <i className="nav-icon fas fa-user "></i>
                                <p>
                                    Tài khoản
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/admin/school" className="nav-link">
                                {/* <i className="nav-icon icon-home" ></i> */}
                                <i className="nav-icon fas fa-home"></i>
                                <p>
                                    Thông tin trường
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/admin/admission-type" className="nav-link">
                                <i className="nav-icon fas fa-th-list"></i>
                                <p>
                                    Loại tuyển sinh
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/admin/admission" className="nav-link">
                                <i className="nav-icon fas fa-newspaper"></i>
                                <p>
                                    Tin tuyển sinh
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/admin/banner" className="nav-link">
                                <i className="nav-icon fas fa-columns"></i>
                                <p>
                                    Banner
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/admin/department" className="nav-link">
                                <i className="nav-icon fas fa-book-open"></i>
                                <p>
                                    Khoa
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/admin/livestream" className="nav-link">
                                <i className="nav-icon fas fa-bell"></i>
                                <p>
                                    Thông báo livestreams
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/admin/questions" className="nav-link">
                                <i className="nav-icon fas fa-question"></i>
                                <p>
                                    Bảng câu hỏi thường gặp
                                </p>
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>

        </aside>
    )

}
