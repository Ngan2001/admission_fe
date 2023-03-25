import React, { useState, useEffect } from "react";
import API, { endpoints } from "../../../../API";
import $ from 'jquery';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function UpdateUser() {
    let { userId } = useParams()

    const nav = useNavigate()

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birthday, setBirthday] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [username, setUsername] = useState("")
    const [avatar, setAvatar] = useState("")
    const [password, setPassword] = useState("")

    const [updateMessage, setUpdateMessage] = useState("")

    const [modalShow, setModalShow] = useState(false);
    const handleModalClose = () => setModalShow(false);
    const handleModalShow = () => setModalShow(true);

    useEffect(() => {
        const loadUsers = async () => {
            await API.get(endpoints[`user`] + `${userId}`).then(res => {
                const {address, last_name, first_name, email, username, avatar, birthday_date, phone} = res.data;

                setAddress(address);
                setLastName(last_name);
                setFirstName(first_name);
                setEmail(email);
                setUsername(username);
                setAvatar(avatar);
                setBirthday(birthday_date);
                setPhone(phone);
            })
        }
        loadUsers()
    }, [])


    const handleChangeImage = e => {
        setAvatar(URL.createObjectURL(e.target.files[0]))
    }

    const updateUser = async () => {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var img = document.getElementById('blah');
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0,img.width, img.height);
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
            'avatar': myData,
            'is_superuser': true,
            password
        };

        const response = await API.put(endpoints["user"] + `${userId}/`, data).then(res => {
            setUpdateMessage('Cập nhật thành công!')
            handleModalShow();
            setTimeout(() => {
                handleModalClose();
                nav("/admin/user")
            }, 2000);
            
        }).catch(e => {
            setUpdateMessage('Cập nhật thất bại!')
            handleModalShow();
            setTimeout(() => {
                handleModalClose();
            }, 2000);
        });
    }

    return (
        <>
            <Modal show={modalShow} onHide={handleModalClose}>
                <Modal.Header closeButton>
                <Modal.Title>Thông báo</Modal.Title>
                </Modal.Header>
                <Modal.Body>{updateMessage}</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleModalClose}>
                    Đóng
                </Button>
                </Modal.Footer>
            </Modal>
            <div className="content-wrapper">
                <div className="card card-primary">
                    <div className="card-header">
                        <h3 className="card-title">Cập nhật tài khoản</h3>
                    </div>
                    <form>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputFile">Chọn ảnh</label>
                                <div className="input-group">
                                    <img id="blah" alt="your image" src={avatar} style={{ height: '100px', width: '100px', border: '1px solid black', marginRight: '15px' }} />
                                    <input type="file" onChange={handleChangeImage}  />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Họ</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    value={lastName}
                                    
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Tên</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    value={firstName}
                                    
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Ngày sinh</label>
                                <div className="input-group">
                                    <input id="startDate" className="form-control" type="date"
                                    value={birthday}
                                    
                                    onChange={(e) => setBirthday(e.target.value)} />
                                </div>

                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Địa chỉ</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    value={address} 
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Số điện thoại</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    value={phone} 
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Tài khoản đăng nhập</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    value={username} disabled
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
                        </div>
                        <div className="card-footer text-center">
                            <a type="button" className="btn btn-primary mr-2" href="/admin/user" >
                                Trở về
                            </a>
                            <button type="button" className="btn btn-primary" onClick={updateUser}>
                                Cập nhật
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )

}
