import React, { Component } from "react";
export default class Login extends Component {

    render() {
        return (
            <div className="register-page" style={{ minHeight: "569.6px" }}>
            <div className="login-box">
            <div className="login-logo">
              <a href="../../index2.html">
                <b>Đăng nhập</b>
              </a>
            </div>
            <div className="card">
              <div className="card-body login-card-body">
                <p className="login-box-msg">Nhập thông tin</p>
                <form action="../../index3.html" method="post">
                  <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Tên đăng nhập" />
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
                  <div className="row">
                    <div className="col-8">
                      <div className="icheck-primary">
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Nhớ mật khẩu</label>
                      </div>
                    </div>
                    <div className="col-4">
                      <button type="submit" className="btn btn-primary btn-block">
                        Đăng nhập
                      </button>
                    </div>
                  </div>
                </form>
                <div className="social-auth-links text-center mb-3">
                  <p>- OR -</p>
                  <a href="#" className="btn btn-block btn-primary">
                    <i className="fab fa-facebook mr-2" /> Đăng nhập bằng FB
                  </a>
                  <a href="#" className="btn btn-block btn-danger">
                    <i className="fab fa-google-plus mr-2" /> Đăng nhập bằng Google+
                  </a>
                </div>
                <p className="mb-1">
                  <a href="forgot-password.html">Quên mật khẩu</a>
                </p>
                <p className="mb-0">
                  <a href="/register" className="text-center">
                    Tạo tài khoản
                  </a>
                </p>
              </div>
            </div>
          </div>
          </div>
        );
    }
}