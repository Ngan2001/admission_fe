import React, { useState } from "react";
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import API, { endpoints } from '../../API';

export default function Register() {
  let avatarDefault = "assets/images/no-avatar.jpg";
  const nav = useNavigate()

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [avatar, setAvatar] = useState("");
  const [createMessage, setCreateMessage] = useState("");
  const [errors, setErrors] = useState({});

  const [modalShow, setModalShow] = useState(false);
  const handleModalClose = () => setModalShow(false);
  const handleModalShow = () => setModalShow(true);

  const handleSubmit = () => {
    var imgSrc = document.getElementById("blah").src;
    let errorsChk = {};
    let formIsValid = true;

    
    if(imgSrc.includes("no-avatar")) {
      errorsChk["avatar"] = "Không được để trống";
      formIsValid =false;
    }
    if(firstName == null || firstName == "") {
      errorsChk["firstName"] = "Không được để trống";
      formIsValid =false;
    }
    if(lastName == null || lastName == "") {
      errorsChk["lastName"] = "Không được để trống";
      formIsValid =false;
    }
    if(birthday == null || birthday == "") {
      errorsChk["birthday"] = "Không được để trống";
      formIsValid =false;
    }
    if(phone == null || phone == "") {
      errorsChk["phone"] = "Không được để trống";
      formIsValid =false;
    }

    if(address == null || address == "") {
      errorsChk["address"] = "Không được để trống";
      formIsValid =false;
    }

    

    if(email == null || email == "") {
      errorsChk["email"] = "Không được để trống";
      formIsValid =false;
    }

    if (email != null && !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      errorsChk["email"]= " Email không hợp lệ ";
      formIsValid =false;
    }

    if(password == null || password == "") {
      errorsChk["password"] = "Không được để trống";
      formIsValid =false;
    }

    if(passwordConfirm == null || passwordConfirm == "") {
      errorsChk["passwordConfirm"] = "Không được để trống";
      formIsValid =false;
    }

    if(passwordConfirm != null && password != null && password != passwordConfirm) {
      errorsChk["passwordConfirm"] = "Xác nhận mật khẩu không khớp";
      formIsValid =false;
    }

    setErrors(errorsChk);
    return formIsValid;
  }

  const createUser = async () => {
    setErrors({});
    if(!handleSubmit()) {
      return;
    }
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    var img = document.getElementById('blah');
    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0, img.width, img.height);
    var dataURL = canvas.toDataURL("image/png");
    dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

    var myData = dataURL;

    // const data = {
    //   'first_name': firstName,
    //   'last_name': lastName,
    //   'birthday_date': birthday,
    //   'phone': phone,
    //   'email': email,
    //   'address': address,
    //   username,
    //   password,
    //   passwordConfirm,
    //   'avatar': myData,
    //   'is_superuser': false
    // };

    let formData = new FormData(); 
        formData.append('first_name', firstName);
        formData.append('last_name', lastName);
        formData.append('birthday_date', birthday);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('address', address);
        formData.append('username', username);
        formData.append('password', password);
        formData.append('passwordConfirm', passwordConfirm);
        formData.append('avatar', myData);
        formData.append('is_superuser', false);

    const response = await API.post(endpoints["user"], formData).then(res => {
      setCreateMessage('Tạo mới thành công!')
      handleModalShow();
      setTimeout(() => {
        handleModalClose();
        nav("/login");
      }, 2000);

    }).catch(e => {
      let errorsCheck = {};
      if(e.response.data['username']) {
        errorsCheck["username"] = "Tài khoản đã tồn tại";
      }

      if(e.response.data['phone']) {
        errorsCheck["phone"] = "Số điện thoại phải ít hơn 11 số";
      }
      setErrors(errorsCheck);

      setCreateMessage('Tạo mới thất bại!');
      handleModalShow();
      setTimeout(() => {
        handleModalClose();
      }, 2000);
    });
  }
  const handleChangeImage = e => {
    setAvatar(URL.createObjectURL(e.target.files[0]))
  }

  return (
    <div className="register-page" style={{ minHeight: "569.6px" }}>
      <div className="register-box" style={{ width: "700px" }}>
        <div className="register-logo">
          <a href="../../index2.html">
            <b>Đăng ký</b>
          </a>
        </div>
        <div className="card">
          <div className="card-body register-card-body">
            <form>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="exampleInputFile">Chọn ảnh</label>
                  <div className="input-group">
                    <img id="blah" src={avatar === "" ? avatarDefault : avatar} style={{ height: '100px', width: '100px', border: '1px solid black', marginRight: '15px' }} />
                    <input type="file" onChange={handleChangeImage} />
                    <span style={{ color: "red" }}>{errors['avatar']}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Họ</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      <span style={{ color: "red" }}>{errors['lastName']}</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Tên</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <span style={{ color: "red" }}>{errors['firstName']}</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label>Ngày sinh</label>
                      <div className="input-group">
                        <input id="startDate" className="form-control" type="date"
                          onChange={(e) => setBirthday(e.target.value)} />
                      </div>
                      <span style={{ color: "red" }}>{errors['birthday']}</span>
                    </div>
                  </div>
                </div>

                <div className="row">

                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Số điện thoại</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={(e) => setPhone(e.target.value)}
                      />
                       <span style={{ color: "red" }}>{errors['phone']}</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Địa chỉ</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={(e) => setAddress(e.target.value)}
                      />
                      <span style={{ color: "red" }}>{errors['address']}</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <span style={{ color: "red" }}>{errors['email']}</span>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Tài khoản đăng nhập</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <span style={{ color: "red" }}>{errors['username']}</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Mật khẩu</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <span style={{ color: "red" }}>{errors['password']}</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Xác nhận mật khẩu</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={(e) => setPasswordConfirm(e.target.value)}
                      />
                      <span style={{ color: "red" }}>{errors['passwordConfirm']}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer text-center">
                <a type="button" className="btn btn-primary mr-2" href="/" >
                  Trở về
                </a>
                <button type="button" className="btn btn-primary" onClick={createUser}>
                  Tạo mới
                </button>
              </div>
            </form>
            <a href="/login" className="text-center">
              Tôi đã có tài khoản
            </a>
          </div>
        </div>
      </div>

      <Modal show={modalShow} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thông báo</Modal.Title>
        </Modal.Header>
        <Modal.Body>{createMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Đóng
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}