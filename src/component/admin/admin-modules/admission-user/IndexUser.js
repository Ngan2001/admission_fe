import React, { useState, useEffect } from "react";
import API, { endpoints } from "../../../../API";
import { Outlet } from "react-router-dom"

export default function IndexUser() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        const loadUsers = async () => {
            await API.get(endpoints["user"]).then(res => {
                setUsers(res.data)
            })
           
        }
        loadUsers()
    }, [])


    return (
        <div className="content-wrapper">
            <h1>Danh sách tài khoản</h1>
            <div className="card">
                <div className="card-header">
                    <a href="/admin/user/create" type="button" className="btn btn-primary btn-block" style={{ width: '200px', float: 'right' }}>
                        <i className="fas fa-utensil-spoon"></i> Thêm mới
                    </a>

                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th style={{ width: 10 }}>#</th>
                                <th>Tên người dùng</th>
                                <th>Số điện thoại</th>
                                <th>Email</th>
                                <th>Quyền</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((u, index) =>
                                <tr key={u.id}>
                                    <td>{index + 1}</td>
                                    <td>{u.first_name}</td>
                                    <td>{u.phone}</td>
                                    <td>{u.is_superuser == true ? 'Ban tư vấn' : 'Sinh viên'}</td>
                                    <td>{u.email}</td>
                                    <td>
                                        <button type="button" className="btn btn-default mr-2">
                                            <i className="fas fa-pencil-alt"></i>
                                        </button>
                                        <button type="button" className="btn btn-danger">
                                            <i className="far fa-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>
                <div className="card-footer clearfix">
                    <ul className="pagination pagination-sm m-0 float-right">
                        <li className="page-item">
                            <a className="page-link" href="#">
                                «
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                1
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                2
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                3
                            </a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#">
                                »
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </div>
    )

}
