import React, { Component } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from "react";
import API, { endpoints } from "../../API";
import jwt_decode from "jwt-decode";

export default function Login() {
  
  const [isLoginFail, setIsLoginFail] = useState(false);
  const [pwd, setPwd] = useState("");
  const [user, setUser] = useState("");

  const location = useLocation();
  const nav = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userLogin, setUserLogin] = useState({firstName, lastName, email, username, avatar});

  const loadUsers = async (user_id) => {
    await API.get(endpoints[`user`] + `${user_id}`).then(res => {
        const {last_name, first_name, email, username, avatar} = res.data;
        let userRes = {
          firstName: first_name,
          lastName: last_name,
          email: email,
          username: username,
          avatar: avatar,
        }
        setUserLogin(userRes);
        localStorage.setItem("user", JSON.stringify(userRes));
    })
}


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      "username": user,
      "password": pwd
    }
    console.log('response');
    const response = await API.post(endpoints["authenticate"], data).then(res => {
      console.log(res);
      if(res && res.status == 200) {
        let token = res.data.access;
        localStorage.setItem("token", token);
        var decoded = jwt_decode(token);
        localStorage.setItem("user_id", decoded.user_id);
        localStorage.setItem("isLogged", true);
        
      loadUsers(decoded.user_id).then(
        res => {
          if (location.pathname.includes('admin-login')) {
            nav("/admin");
          } else {
            nav("/");
          }
        }
      )
       
    }
    }).catch(e => {
      setIsLoginFail(true);
    });
    
  }
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
              {isLoginFail && (
                  <span style={{ color: "red" }}>{'Đăng nhập thất bại!'}</span>
                )}
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
              <a href="/" className="btn btn-block btn-danger">
                Trờ về
              </a>
            </div>
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