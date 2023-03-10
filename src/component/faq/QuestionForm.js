import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";
export default class QuestionForm extends Component {

    render() {
        return (
            <>
                <div className="card card-primary">
                    <div className="card-header">
                        <h3 className="card-title">Đặt câu hỏi</h3>
                    </div>
                    <form>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    placeholder="Enter email"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Câu hỏi</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    placeholder="Nhập câu hỏi"
                                />
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">
                                Gửi
                            </button>
                        </div>
                    </form>
                </div>

            </>
        );
    }
}