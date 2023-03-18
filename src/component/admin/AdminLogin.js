import React, { Component } from "react";
import { useNavigate } from "react-router-dom"

export default function AdminLogin() {

  const nav = useNavigate()
  const goDashboard = () => {
    localStorage.setItem('isLogged', true);
    nav("/")
  }
    
    return (
      <div className="register-page" style={{ minHeight: "569.6px" }}>
        <welcome />

        <div className="login-box">
          <div className="login-logo">
            <a href="../../index2.html">
              <b>Đăng nhập</b>
            </a>
          </div>
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Nhập thông tin</p>
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
                  <button type="submit" className="btn btn-primary btn-block" onClick={goDashboard}>
                    Đăng nhập
                  </button>
                </div>
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