import React, { Component } from "react";
import DepartmentIndex from "../department/DepartmentIndex";
import RightSidebar from "./RightSidebar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
export default class Content extends Component {
    render() {
        const chatBoxCss = {
            bottom: '0',
            right: '0',
            marginBottom: '0'
        }
        return (
            <>
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
                                    <li className="list-group-item text-center">
                                        <Link className="list-group-item text-center" to="admission">Xem tất cả</Link>
                                    </li>
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

            </>




        )
    }
}