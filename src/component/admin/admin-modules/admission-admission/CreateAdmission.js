import React from "react";

export default function CreateAdmission() {

    return (
        <div className="content-wrapper">
            <div className="card card-primary">
                <div className="card-header">
                    <h3 className="card-title">Tạo mới tin tuyển sinh</h3>
                </div>
                <form>
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Tiêu đề </label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Nội dung</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"

                            />
                        </div>

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
                                    Tuyển sinh đại học chính quy
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
                                <span className="dropdown-wrapper" aria-hidden="true" />
                            </span>
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
