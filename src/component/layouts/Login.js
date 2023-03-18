import React, { Component } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from "react";
import API, { endpoints } from "../../API";

export default function Login() {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  const location = useLocation()
  const nav = useNavigate()
  // const login = async () => {
  //   if (location.pathname.includes('admin-login')) {
  //     nav("/admin");
  //   } else {
  //     nav("/");
  //   }

  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      "username": user,
      "password": pwd
    }
    const response = await API.post(endpoints["authenticate"], data);
    console.log(response);
    if(response && response.status == 200) {
      nav("/admin")
    }
  }
  // }, [])
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
            <form >
              <div className="input-group mb-3">
                <input type="email" className="form-control" 
                onChange={(e) => setUser(e.target.value)}
                value={user}
                placeholder="Tên đăng nhập" />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
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
                  <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>
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
  )
}