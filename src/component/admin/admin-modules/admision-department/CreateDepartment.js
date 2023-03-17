import React from "react";

export default function CreateDepartment() {

    return (
        <div className="content-wrapper">
            <div className="card card-primary">
                <div className="card-header">
                    <h3 className="card-title">Tạo thông tin về khoa</h3>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Tên khoa</label>
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
                        <label htmlFor="exampleInputPassword1">Giới thiệu</label>
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
                        <label htmlFor="exampleInputPassword1">Nội dung</label>
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
                        <label htmlFor="exampleInputPassword1">Website</label>
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
                        <label htmlFor="exampleInputFile">Chọn video</label>
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
