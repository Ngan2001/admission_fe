import React, { Component } from "react";
export default function Register() {
    return (
      <div className="register-page" style={{ minHeight: "569.6px" }}>
      <div className="register-box">
        <div className="register-logo">
          <a href="../../index2.html">
            <b>Đăng ký</b>
          </a>
        </div>
        <div className="card">
          <div className="card-body register-card-body">
            <p className="login-box-msg">Nhập thông tin</p>
            <form action="../../index.html" method="post">
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Tên" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Mật khẩu"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Nhập mật khẩu"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      name="terms"
                      defaultValue="agree"
                    />
                    <label htmlFor="agreeTerms">
                      Tôi đồng ý với <a href="#">điều khoản</a>
                    </label>
                  </div>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Đăng ký
                  </button>
                </div>
              </div>
            </form>
            <a href="login.html" className="text-center">
              Tôi đã có tài khoản
            </a>
          </div>
        </div>
      </div>
      </div>
    );
}