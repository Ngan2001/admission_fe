import React from "react";

export default function CreateNews() {

    return (
        <div className="content-wrapper">
            <div className="card card-primary">
                <div className="card-header">
                    <h3 className="card-title">Tạo tin tuyển sinh</h3>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Tên</label>
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
                        <label htmlFor="exampleInputPassword1">Mô tả</label>
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
                        <div className="form-group" data-select2-id={29}>
                            <label>Loại tuyển sinh</label>
                            <select
                                className="form-control select2 select2-hidden-accessible"
                                style={{ width: "100%" }}
                                data-select2-id={1}
                                tabIndex={-1}
                                aria-hidden="true"
                            >
                                <option selected="selected" data-select2-id={3}>
                                    Đại học chính quy
                                </option>
                                <option data-select2-id={35}>Đại học chính quy</option>
                                <option data-select2-id={36}>Đại học văn bằng 2</option>
                                <option data-select2-id={37}>Hệ đào tạo từ xa</option>

                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Mô tả</label>
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
                    </div>
                    <div className="card-body">
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
