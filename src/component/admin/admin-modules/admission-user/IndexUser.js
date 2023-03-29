import React, { useState, useEffect } from "react";
import API, { endpoints } from "../../../../API";
import { useNavigate, useParams } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { constantConfig } from "../../../../constantConfig";


export default function IndexUser() {
    const nav = useNavigate();
   
    const [users, setUsers] = useState([]);
    const [totalPages, setTotalPages] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [show, setShow] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0); //to refresh user list after delete the user

    const [modalShow, setModalShow] = useState(false);
    const [deleteUserId, setDeleteUserId] = useState(null);

    const handleModalClose = () => setModalShow(false);
    const handleModalShow = (userId) => {
        return () => {
            setDeleteUserId(userId);
            setModalShow(true);
        }
    }
    const loadUsers = async () => {
        let url = pageNum === 1 ? endpoints["user"] : `${endpoints["user"]}?page=${pageNum}`;
        await API.get(url).then(res => {
            setUsers(res.data.results);

            var n_loop = Math.ceil(Number(res.data.count) / Number(constantConfig.PAGESIZE));
                const  totalPagesTemp = [];
                for(var i = 1; i <= n_loop; i++) {
                    totalPagesTemp.push(i);
                }
                setTotalPages(totalPagesTemp);

            // if(Number(res.data.results.length) === 1) {
            //     setTotalPages([1]);
            // } else {
            //     var n_loop = Math.ceil(Number(res.data.count) / Number(myConstClass.PAGESIZE));
            //     const  totalPagesTemp = [];
            //     for(var i = 1; i <= n_loop; i++) {
            //         totalPagesTemp.push(i);
            //     }
            //     setTotalPages(totalPagesTemp);
            // }
        })
    }

    const onClickPage = (page) => {
        
        return () => {
            setPageNum(page);
            loadUsers();
        }
    }

    useEffect(() => {
        loadUsers();
    }, [refreshKey,pageNum]);

    useEffect(() => {
    }, [totalPages]);

    useEffect(() => {
    }, [pageNum]);


    const deleteUser = () => {
        handleModalClose();
        API.delete(endpoints["user"] + `${deleteUserId}/`).then(res => {
            if (res && res.status == 204) {
                setShow(true)
                // loadUsers2()
                setTimeout(() => {
                    setShow(false)
                    setRefreshKey(oldKey => oldKey + 1)
                }, 2000);
            }
        })
    }

    const goEdit = (userId) => {
        return() => {
            nav(`edit/${userId}`);
        }
    }

    return (
        <div className="content-wrapper">

            <Modal show={modalShow} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có muốn xóa người dùng?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={deleteUser}>
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>

            <h1>Danh sách tài khoản</h1>
            {show &&
                <Alert key={'success'} variant={'success'} onClose={() => setShow(false)} dismissible>
                    Đã xóa người dùng
                </Alert>
            }

            <div className="card">
                <div className="card-header">
                    <a href="/admin/user/create" type="button" className="btn btn-primary btn-block" style={{ width: '150px', float: 'right' }}>
                        <i className="fa fa-plus"></i> Thêm mới
                    </a>

                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th style={{ width: 10 }}>#</th>
                                <th>Tên người dùng</th>
                                <th>Ngày sinh</th>
                                <th>Địa chi</th>
                                <th>Số điện thoại</th>
                                <th>Email</th>
                                <th>Tên tài khoản</th>
                                <th>Mật khẩu</th>
                                <th>Ảnh</th>
                                <th>Quyền</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1.</td>
                                <td>Update software</td>
                                <td>
                                    567890
                                </td>
                                <td>
                                    gygygyg@mail.com
                                </td>
                                <td>
                                    Hiệu trưởng
                                </td>
                                <td>
                                    <button type="button" className="btn btn-default">
                                        <i className="fas fa-pencil-alt"></i>
                                    </button>
                                    <button type="button" className="btn btn-default">
                                        <i className="far fa-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                {/* Phân trang */}
                <div className="card-footer clearfix">
                    <ul className="pagination pagination-sm m-0 float-right">
                        <li className="page-item">
                            <a className="page-link" href="#">
                                «
                            </a>
                        </li>
                        {totalPages.map(page => 
                            <li className="page-item">
                                <Link className={"page-link " + (pageNum == page ? 'link-active' : '')} to={ page == 1 ? `` : `/admin/user/?page=${page}`} onClick={onClickPage(page)}>
                                            {page}
                                </Link>
                            </li>
                            )
                        }

                        <li className="page-item">
                            <a className="page-link" href="#">
                                »
                            </a>
                        </li>

                        {/* <li className="page-item">
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
                        </li> */}
                    </ul>
                </div>
            </div>
            <Outlet />
        </div>
    )

}
