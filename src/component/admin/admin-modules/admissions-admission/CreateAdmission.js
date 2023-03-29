import React from "react";

export default function CreateAdmission() {

    return (
        <div className="content-wrapper">
            <div className="card card-primary">
                <div className="card-header">
                    <h3 className="card-title">Tạo mới người dùng</h3>
                </div>
                <form>
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Họ Tên người dùng</label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1"
                                placeholder="Enter email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Tên người dùng</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Ngày sinh</label>
                            <div
                                className="input-group date"
                                id="reservationdate"
                                data-target-input="nearest"
                            >
                                <input
                                    type="text"
                                    className="form-control datetimepicker-input"
                                    data-target="#reservationdate"
                                />
                                <div
                                    className="input-group-append"
                                    data-target="#reservationdate"
                                    data-toggle="datetimepicker"
                                >
                                    <div className="input-group-text">
                                        <i className="fa fa-calendar" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Địa chỉ</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Số điện thoại </label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                            />
                        </div>
                        <div className="form-group" data-select2-id={29}>
                            <label>Minimal</label>
                            <select
                                className="form-control select2 select2-hidden-accessible"
                                style={{ width: "100%" }}
                                data-select2-id={1}
                                tabIndex={-1}
                                aria-hidden="true"
                            >
                                <option selected="selected" data-select2-id={3}>
                                    Quản trị viên
                                </option>
                                <option data-select2-id={35}>Sinh viên</option>
                                <option data-select2-id={36}>Giảng viên</option>
                                <option data-select2-id={37}>Ban tư vấn</option>

                            </select>
                            <span
                                className="select2 select2-container select2-container--default select2-container--below"
                                dir="ltr"
                                data-select2-id={2}
                                style={{ width: "100%" }}
                            >
                                <span className="selection">
                                    <span
                                        className="select2-selection select2-selection--single"
                                        role="combobox"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        tabIndex={0}
                                        aria-disabled="false"
                                        aria-labelledby="select2-te0m-container"
                                    >
                                        <span
                                            className="select2-selection__rendered"
                                            id="select2-te0m-container"
                                            role="textbox"
                                            aria-readonly="true"
                                            title="Alabama"
                                        >
                                            Alabama
                                        </span>
                                        <span className="select2-selection__arrow" role="presentation">
                                            <b role="presentation" />
                                        </span>
                                    </span>
                                </span>
                                <span className="dropdown-wrapper" aria-hidden="true" />
                            </span>
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputFile">Chọn ảnh</label>
                            <div className="input-group">
                                <div className="custom-file">
                                    <input
                                        type="file"
                                        className="custom-file-input"
                                        id="exampleInputFile"
                                    />
                                    <label className="custom-file-label" htmlFor="exampleInputFile">
                                        Choose file
                                    </label>
                                </div>
                                <div className="input-group-append">
                                    <span className="input-group-text">Upload</span>
                                </div>
                            </div>
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                            />
                            <label className="form-check-label" htmlFor="exampleCheck1">
                                Hoạt động
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                            />
                            <label className="form-check-label" htmlFor="exampleCheck1">
                                Quyền cao nhất
                            </label>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-primary">
                            Tạo mới
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )

}
