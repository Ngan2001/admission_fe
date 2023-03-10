import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";

export default class DepartmentIndex extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-6 card" style={{ width: "18rem" }}>
                    <img src="assets/images/khoa-tai-chinh.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">
                            <Link className="btn btn-outline-success" to="detail">Khoa tài chính ngân hàng</Link>
                        </p>
                    </div>
                </div>

                <div className="col-6 card" style={{ width: "18rem" }}>
                    <img src="assets/images/khoa-cntt.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">
                            <Link className="btn btn-outline-success" to="detail"> Khoa Công nghệ thông tin</Link>
                        </p>
                    </div>
                </div>


                <div className="col-6 card" style={{ width: "18rem" }}>
                    <img src="assets/images/khoa-ngoai-ngu.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">
                            <Link className="btn btn-outline-success" to="detail"> Khoa ngoại ngữ</Link>
                        </p>
                    </div>
                </div>


                <div className="col-6 card" style={{ width: "18rem" }}>
                    <img src="assets/images/khoa-ke-toan.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">
                            <Link className="btn btn-outline-success" to="detail">Khoa kế toán kiểm toán</Link>
                        </p>
                    </div>
                </div>
                <Outlet />
            </div>

        );
    }
}