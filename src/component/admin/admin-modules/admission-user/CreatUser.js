import React, { useState } from "react";
import API, { endpoints } from "../../../../API";
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';

export default function CreateUser() {
    const nav = useNavigate()

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birthday, setBirthday] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [avatar, setAvatar] = useState("")
    const [createMessage, setCreateMessage] = useState("")

    const createUser = async () => {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var img = document.getElementById('blah');
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/png");
        dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

        var myData = dataURL;

        const data = {
            'first_name': firstName,
            'last_name': lastName,
            'birthday_date': birthday,
            'phone': phone,
            'email': email,
            'address': address,
            username,
            password,
            passwordConfirm,
            'avatar': myData,
        };
        const response = await API.post(endpoints["user"], data).then(res => {
            setCreateMessage('Tạo mới thành công!')
            $('#modal-btn').click();
            setTimeout(() => {
                $('#modal-btn').click();
                nav("/admin/user")
            }, 2000);
            
        }).catch(e => {
            setCreateMessage('Tạo mới thất bại!')

            $('#modal-btn').click();
            setTimeout(() => {
                $('#modal-btn').click();
            }, 2000);
        });
    }
    const handleChangeImage = e => {
        setAvatar(URL.createObjectURL(e.target.files[0]))
    }

    return (
        <>
            <div className="content-wrapper">
                <div className="card card-primary">
                    <div className="card-header">
                        <h3 className="card-title">Tạo mới tài khoản</h3>
                    </div>
                    <form>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputFile">Chọn ảnh</label>
                                <div className="input-group">
                                    <img id="blah" alt="your image" src={avatar} style={{ height: '100px', width: '100px', border: '1px solid black', marginRight: '15px' }} />
                                    <input type="file" onChange={handleChangeImage} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Họ</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Tên</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div class="form-group">
                                <label>Ngày sinh</label>
                                <div class="input-group">
                                    <input id="startDate" class="form-control" type="date"
                                        onChange={(e) => setBirthday(e.target.value)} />
                                </div>

                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Địa chỉ</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Số điện thoại</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Tài khoản đăng nhập</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Mật khẩu</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Xác nhận mật khẩu</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    onChange={(e) => setPasswordConfirm(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="card-footer text-center">
                            <a type="button" className="btn btn-primary mr-2" href="/admin/user" >
                                Trở về
                            </a>
                            <button type="button" className="btn btn-primary" onClick={createUser}>
                                Tạo mới
                            </button>
                        </div>
                    </form>
                </div>

            </div>

            <button id="modal-btn" type="button" class="btn btn-primary  opacity-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            {/* Modal */}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            {createMessage}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
