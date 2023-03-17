import React from "react";

export default function CreateBanner() {

    return (
        <div className="content-wrapper">
            <div className="card card-primary">
                <div className="card-header">
                    <h3 className="card-title">Tạo banner</h3>
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
                    <label htmlFor="exampleInputPassword1">Mô tả</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Link-url</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                    />
                </div>
            </div>
        </div>
    )

}
