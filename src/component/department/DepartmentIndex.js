import React, { Component } from "react";
export default class DepartmentIndex extends Component {

    render() {
        return (
            <div className="row">
            <div className="col-4 card" style={{ width: "18rem" }}>
                <img src="admin-lte/dist/img/avatar5.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">
                        Khoa tài chính ngân hàng
                    </p>
                </div>
            </div>

            <div className="col-4 card" style={{ width: "18rem" }}>
                <img src="admin-lte/dist/img/avatar5.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">
                        Khoa Công nghệ thông tin
                    </p>
                </div>
            </div>


            <div className="col-4 card" style={{ width: "18rem" }}>
                <img src="admin-lte/dist/img/avatar5.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">
                        Khoa ngoại ngữ
                    </p>
                </div>
            </div>


            <div className="col-4 card" style={{ width: "18rem" }}>
                <img src="admin-lte/dist/img/avatar5.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">
                        Khoa kế toán kiểm toán
                    </p>
                </div>
            </div>
            </div>
            
        );
    }
}