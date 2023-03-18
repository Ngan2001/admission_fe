import React, { Component } from "react";
import DepartmentIndex from "../department/DepartmentIndex";
import RightSidebar from "./RightSidebar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
export default function Content() {
        const chatBoxCss = {
            bottom: '0',
            right: '0',
            marginBottom: '0'
        }
        return (
            <>
                <h1 className="text-uppercase text-primary mt-3 mb-5">THÔNG TIN TUYỂN SINH</h1>

                <div className="text-uppercase text-primary mt-3 mb-2 fs-4">Hệ chính quy
                
                <Link className="float-end fs-6" to="admission">Xem tất cả	&#x3E;&#x3E;</Link>
                </div>

                <ul className="list-group list-geeeeeeeeeroup-flush">
                    <li className="list-group-item d-flex flex-row align-items-center" style={{height: '60px', padding: '0'}}>
                        <div className="flex-shrink-1">
                            <img style={{height: '55px', width:'55px'}} src="assets/images/question.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="">
                           <span>Tổng hợp thông tin Tuyển sinh ĐHCQ năm 2022</span>
                        </div>
                    </li>

                    <li className="list-group-item d-flex flex-row align-items-center" style={{height: '60px', padding: '0'}}>
                        <div className="flex-shrink-1">
                            <img style={{height: '55px', width:'55px'}} src="assets/images/question.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="">
                           <span>Thông báo tiếp nhận Tân sinh viên Khóa 2022</span>
                        </div>
                    </li>

                    <li className="list-group-item d-flex flex-row align-items-center" style={{height: '60px', padding: '0'}}>
                        <div className="flex-shrink-1">
                            <img style={{height: '55px', width:'55px'}} src="assets/images/question.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="">
                           <span>Tổng hợp thông tin Tuyển sinh ĐHCQ năm 2022</span>
                        </div>
                    </li>

                    <li className="list-group-item d-flex flex-row align-items-center" style={{height: '60px', padding: '0'}}>
                        <div className="flex-shrink-1">
                            <img style={{height: '55px', width:'55px'}} src="assets/images/question.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="">
                           <span>Thông báo về thời gian công bố kết quả tuyển sinh và thủ tục nhập học</span>
                        </div>
                    </li>

                    <li className="list-group-item d-flex flex-row align-items-center" style={{height: '60px', padding: '0'}}>
                        <div className="flex-shrink-1">
                            <img style={{height: '55px', width:'55px'}} src="assets/images/question.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="">
                           <span>Thông báo v/v Ngưỡng điểm nhận hồ sơ đăng ký xét tuyển kết quả thi tốt nghiệp</span>
                        </div>
                    </li>
                </ul>
            </>
        )
}