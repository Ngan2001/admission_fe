import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
export default class LivestreamIndex extends Component {

    render() {
        return (
            <>
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Bordered Table</h3>
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th style={{ width: 10 }}>#</th>
                                    <th>Nội dung</th>
                                    <th>Thời gian</th>
                                    <th style={{ width: 40 }}>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1.</td>
                                    <td>
                                    <Link className="btn btn-outline-success" to="detail">Update software</Link>
                                        
                                    </td>
                                    <td>
                                        Today 15h00
                                    </td>
                                    <td>
                                    <Link className="btn btn-outline-success" to="detail">Đặt câu hỏi</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2.</td>
                                    <td>Clean database</td>
                                    <td>
                                    Today 15h00
                                    </td>
                                    <td>
                                    <Link className="btn btn-outline-success" to="detail">Đặt câu hỏi</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3.</td>
                                    <td>Cron job running</td>
                                    <td>
                                        <div className="progress progress-xs progress-striped active">
                                            <div
                                                className="progress-bar bg-primary"
                                                style={{ width: "30%" }}
                                            />
                                        </div>
                                    </td>
                                    <td>
                                    <Link className="btn btn-outline-success" to="detail">Đặt câu hỏi</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4.</td>
                                    <td>Fix and squish bugs</td>
                                    <td>
                                        <div className="progress progress-xs progress-striped active">
                                            <div
                                                className="progress-bar bg-success"
                                                style={{ width: "90%" }}
                                            />
                                        </div>
                                    </td>
                                    <td>
                                    <Link className="btn btn-outline-success" to="detail">Đặt câu hỏi</Link>
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
            </>
        );
    }
}