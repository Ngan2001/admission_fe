import React from "react";

export default function CreateUser() {

    return (
        <div className="content-wrapper">
            <div className="card card-primary">
                <div className="card-header">
                    <h3 className="card-title">Tạo mới tài khoản</h3>
                </div>
                <form>
                    <div className="card-body">

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Họ</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Tên</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"

                            />
                        </div>
                        <div class="form-group">
                            <label>Ngày sinh</label>
                            <div class="input-group">
                            <input id="startDate" class="form-control" type="date" />
                                {/* <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="far fa-calendar-alt"></i></span>
                                </div>
                                <input type="text" class="form-control" data-inputmask-alias="datetime" data-inputmask-inputformat="dd/mm/yyyy" data-mask="" inputmode="numeric"/> */}
                            </div>

                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Địa chỉ</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Số điện thoại</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Email</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Tài khoản đăng nhập</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Mật khẩu</label>
                            <input
                                type="password"
                                className="form-control"
                                id="exampleInputPassword1"

                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Xác nhận mật khẩu</label>
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
                    </div>
                    <div className="card-footer text-center">
                        <a type="button" className="btn btn-primary mr-2" href="/admin/user">
                            Trở về
                        </a>
                        <button type="submit" className="btn btn-primary">
                            Tạo mới
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )

}
