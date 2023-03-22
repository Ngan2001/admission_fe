import React, { useState, useEffect } from "react";
import API, { endpoints } from "../../../../API";
import $ from 'jquery';
import { useNavigate, useParams } from 'react-router-dom';


export default function UserDetail() {
    let { userId } = useParams()

    const nav = useNavigate()

    const [obj, setObj] = useState({first_name: '', address: ''})
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birthday, setBirthday] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [username, setUsername] = useState("")
    const [avatar, setAvatar] = useState("")


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

    return (
        <>
            <div className="content-wrapper">
                <div className="card card-primary">
                    <div className="card-header">
                        <h3 className="card-title">Chi tiết tài khoản</h3>
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
                            <div class="form-group">
                                <label>Ngày sinh</label>
                                <div class="input-group">
                                    <input id="startDate" class="form-control" type="date"
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
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="card-footer text-center">
                            <a type="button" className="btn btn-primary mr-2" href="/admin/user" >
                                Trở về
                            </a>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )

}
