import React, { Component } from "react";
export default class LivestreamDetail extends Component {

    render() {
        return (
            <>
                <h1>Chi tiết buổi livestream</h1>
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Danh sách các câu hỏi được đặt</h3>
                    </div>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th style={{ width: 10 }}>#</th>
                                    <th>Câu hỏi</th>
                                    <th>Thời gian</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1.</td>
                                    <td>
                                        Update software
                                    </td>
                                    <td>
                                        Today 15h00
                                    </td>
                                </tr>
                                <tr>
                                    <td>2.</td>
                                    <td>Clean database</td>
                                    <td>
                                    Today 15h00
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
                <div className="card card-primary">
                    <div className="card-header">
                        <h3 className="card-title">Đặt câu hỏi</h3>
                    </div>
                    <form>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    placeholder="Enter email"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Câu hỏi</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    placeholder="Nhập câu hỏi"
                                />
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">
                                Gửi
                            </button>
                        </div>
                    </form>
                </div>
            </>
        );
    }
}