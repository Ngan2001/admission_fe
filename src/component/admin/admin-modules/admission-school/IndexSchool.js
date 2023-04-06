import React, { useState, useEffect } from "react";
import API, { endpoints } from "../../../../API";
import { useNavigate, useParams } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { constantConfig } from "../../../../constantConfig";

export default function IndexSchool() {
    const nav = useNavigate();
    const [school, setSchool] = useState([]);
    const [totalPages, setTotalPages] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    // thông báo xóa thành công 
    const [show, setShow] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0); //to refresh user list after delete the user
    // hện model có mún xóa hong
    const [modalShow, setModalShow] = useState(false);
    const [deleteUserId, setDeleteUserId] = useState(null);

    const handleModalClose = () => setModalShow(false);
    const handleModalShow = (schoolId) => {
        return () => {
            setDeleteUserId(schoolId);
            setModalShow(true);
        }
    }
    return (
        <div className="content-wrapper">
            <h1> Thông tin về trường</h1>
            <div className="card">
                <div className="card-header">
                    <a href="/admin/school/create" type="button" className="btn btn-primary btn-block" style={{ width: '150px', float: 'right' }}>
                        <i className="fa fa-plus"></i> Thêm mới
                    </a>

                    <button type="button" className="btn btn-primary btn-block" style={{ width: '200px', float: 'right' }}>
                        <i className="fas fa-utensil-spoon"></i> Thêm mới
                    </button>

                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th style={{ width: 10 }}>#</th>
                                <th>Hình ảnh</th>
                                <th>Thông tin</th>
                                <th style={{ width: 40 }}>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1.</td>
                                <td>Update software</td>
                                <td>
                                    567890
                                </td>
                                <td>
                                    gygygyg@mail.com
                                </td>
                                <td>
                                    Hiệu trưởng
                                </td>
                                <td>
                                    <button type="button" className="btn btn-default">
                                        <i className="fas fa-pencil-alt"></i>
                                    </button>
                                    <button type="button" className="btn btn-default">
                                        <i className="far fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div className="card-footer clearfix">
                    <ul className="pagination pagination-sm m-0 float-right">
                        <li className="page-item">
                            <a className="page-link" href="#">
                                «
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                1
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                2
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                3
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                »
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </div>
    )

}
