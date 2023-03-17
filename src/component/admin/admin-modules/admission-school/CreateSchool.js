import React from "react";

export default function CreateSchool() {

    return (
        <div className="content-wrapper">
            <div className="card card-primary">
                <div className="card-header">
                    <h3 className="card-title">Tạo mới thông tin về trường</h3>
                </div>
                <form>
                    <div className="card-body">

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Hình ảnh</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"

                            />
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
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Thông tin</label>
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
                            <label htmlFor="exampleInputPassword1">video</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                            />
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
