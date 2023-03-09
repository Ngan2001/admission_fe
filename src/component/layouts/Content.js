import React, { Component } from "react";
import DepartmentIndex from "../department/DepartmentIndex";
import RightSidebar from "./RightSidebar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
export default class Content extends Component {
    render() {
        const chatBoxCss = {
            bottom: '0',
            right: '0',
            marginBottom: '0'
        }
        return (
            <>
                <div className="">
                    <div className="content-header">
                        <div className="row">
                            <div className="col-8">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne"
                                                aria-expanded="true"
                                                aria-controls="collapseOne"
                                            >
                                                Hệ chính quy
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOne"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <ul className="list-group list-group-horizontal-xxl">
                                                    <li className="list-group-item"><a href="#">Thông tin các loại tài khoản Văn bằng 2, Liên thông CĐ-ĐH, Khóa 2021</a></li>
                                                    <li className="list-group-item"><a href="#">Thủ tục nhập học Tân sinh viên Văn bằng 2 - Liên thông Khóa 2021</a></li>
                                                    <li className="list-group-item"><a href="#">Kết quả tuyển sinh ĐH Văn bằng 2, Liên thông CĐ-ĐH năm 2021</a></li>
                                                    <li className="list-group-item text-center"><a href="#">Xem tất cả</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo"
                                                aria-expanded="false"
                                                aria-controls="collapseTwo"
                                            >
                                                Hệ liên thông
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingTwo"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the second item's accordion body.</strong> It is hidden
                                                by default, until the collapse plugin adds the appropriate classes that
                                                we use to style each element. These classes control the overall
                                                appearance, as well as the showing and hiding via CSS transitions. You
                                                can modify any of this with custom CSS or overriding our default
                                                variables. It's also worth noting that just about any HTML can go within
                                                the <code>.accordion-body</code>, though the transition does limit
                                                overflow.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree"
                                                aria-expanded="false"
                                                aria-controls="collapseThree"
                                            >
                                                Cao học
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingThree"
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">
                                                <strong>This is the third item's accordion body.</strong> It is hidden
                                                by default, until the collapse plugin adds the appropriate classes that
                                                we use to style each element. These classes control the overall
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <BrowserRouter>
                                    <Routes>
                                        <Route path="/department">
                                            <DepartmentIndex />
                                        </Route>
                                    </Routes>
                                </BrowserRouter> */}
                            </div>
                            <div className="col-4">
                                <RightSidebar />
                            </div>
                        </div>
                    </div>
                    {/* <a
                        id="back-to-top"
                        href="#"
                        className="btn btn-primary back-to-top"
                        role="button"
                        aria-label="Scroll to top"
                    >
                        <i className="fas fa-chevron-up" />
                    </a> */}


                    <div style={chatBoxCss} className="card card-primary card-outline direct-chat direct-chat-primary shadow-none collapsed-card back-to-top">
                        <div className="card-header">
                            <h3 className="card-title">Hỗ trợ sinh viên</h3>
                            <div className="card-tools">
                                <span title="3 New Messages" className="badge bg-danger">
                                    1
                                </span>
                                <button
                                    type="button"
                                    className="btn btn-tool"
                                    data-card-widget="collapse"
                                >
                                    <i className="fas fa-plus" />
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-tool"
                                    title="Contacts"
                                    data-widget="chat-pane-toggle"
                                >
                                    <i className="fas fa-comments" />
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove">
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body" style={{ display: "none" }}>
                            <div className="direct-chat-messages">
                                <div className="direct-chat-msg">
                                    <div className="direct-chat-infos clearfix">
                                        <span className="direct-chat-name float-left">Ban tư vấn</span>
                                        <span className="direct-chat-timestamp float-right">
                                            23 Jan 2:00 pm
                                        </span>
                                    </div>
                                    <img
                                        className="direct-chat-img"
                                        src="admin-lte/dist/img/user1-128x128.jpg"
                                        alt="Message User Image"
                                    />
                                    <div className="direct-chat-text">
                                        Mình là ban tư vấn, bạn có thắc mắc gì không ạ?
                                    </div>
                                </div>
                                <div className="direct-chat-msg right">
                                    <div className="direct-chat-infos clearfix">
                                        <span className="direct-chat-name float-right">Thí sinh</span>
                                        <span className="direct-chat-timestamp float-left">
                                            23 Jan 2:05 pm
                                        </span>
                                    </div>
                                    <img
                                        className="direct-chat-img"
                                        src="admin-lte/dist/img/user1-128x128.jpg"
                                        alt="Message User Image"
                                    />
                                    <div className="direct-chat-text">Xin chào</div>
                                </div>
                            </div>
                            <div className="direct-chat-contacts">
                                <ul className="contacts-list">
                                    <li>
                                        <a href="#">
                                            <img
                                                className="contacts-list-img"
                                                src="../dist/img/user1-128x128.jpg"
                                                alt="User Avatar"
                                            />
                                            <div className="contacts-list-info">
                                                <span className="contacts-list-name">
                                                    Count Dracula
                                                    <small className="contacts-list-date float-right">
                                                        2/28/2015
                                                    </small>
                                                </span>
                                                <span className="contacts-list-msg">
                                                    How have you been? I was...
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-footer" style={{ display: "none" }}>
                            <form action="#" method="post">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        name="message"
                                        placeholder="Nhập ..."
                                        className="form-control"
                                    />
                                    <span className="input-group-append">
                                        <button type="submit" className="btn btn-primary">
                                            Gửi
                                        </button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>

            </>




        )
    }
}