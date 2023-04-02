import React from "react";

export default function AdminSidebar() {

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <div className="sidebar">

                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="../../../admin-lte/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">Alexander Pierce</a>
                    </div>
                </div>
                <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-sidebar">
                                <i className="fas fa-search fa-fw"></i>
                            </button>
                        </div>
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
                            <a href="pages/kanban.html" className="nav-link">
                                <i className="nav-icon fas fa-columns"></i>
                                <p>
                                    Thông tin trường
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/admin/admission-type" className="nav-link">
                                <i className="nav-icon fas fa-columns"></i>
                                <p>
                                    Loại tuyển sinh
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="/admin/admission" className="nav-link">
                                <i className="nav-icon fas fa-columns"></i>
                                <p>
                                    Tin tuyển sinh
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/kanban.html" className="nav-link">
                                <i className="nav-icon fas fa-columns"></i>
                                <p>
                                    Banner
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/kanban.html" className="nav-link">
                                <i className="nav-icon fas fa-columns"></i>
                                <p>
                                    Khoa
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/kanban.html" className="nav-link">
                                <i className="nav-icon fas fa-columns"></i>
                                <p>
                                    Thông báo livestreams
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/kanban.html" className="nav-link">
                                <i className="nav-icon fas fa-columns"></i>
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
