import React from "react";
import { Outlet } from "react-router";

export default function IndexBanner(){
    
        return (
            <div className="content-wrapper">
                <h1> Admission Banner</h1>
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Bordered Table</h3>

                        <a href="/admin/banner/create" type="button" className="btn btn-primary btn-block" style={{ width: '200px', float: 'right' }}>
                            <i className="fas fa-utensil-spoon"></i> Thêm mới
                        </a>

                    </div>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th style={{ width: 10 }}>id</th>
                                    <th>Ảnh</th>
                                    <th>Mô tả</th>
                                    <th>Link</th>
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
