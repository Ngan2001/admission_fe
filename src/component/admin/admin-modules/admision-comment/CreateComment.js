import React from "react";

export default function CreateComment() {

    return (
        <div className="content-wrapper">
            <div className="card card-primary">
                <div className="card-header">
                    <h3 className="card-title"></h3>
                </div>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Câu hỏi</label>
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
                        <label htmlFor="exampleInputPassword1">Nội dung câu hỏi</label>
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
                        <label htmlFor="exampleInputPassword1">Câu trả lời</label>
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
