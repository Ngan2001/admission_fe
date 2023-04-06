import React, { useState, useEffect } from "react";
import API, { endpoints } from "../../../../API";
import { useNavigate, useParams } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { constantConfig } from "../../../../constantConfig";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


export default function IndexDepartment() {
    const nav = useNavigate();

    const [departments, setDepartments] = useState([]);
    const [totalPages, setTotalPages] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    // thông báo xóa thành công 
    const [show, setShow] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0); //to refresh user list after delete the user
    // hện model có mún xóa hong
    const [modalShow, setModalShow] = useState(false);
    const [deleteDepartmentId, setDeleteDepartmentId] = useState(null);

    const handleModalClose = () => setModalShow(false);
    const handleModalShow = (dpId) => {
        return () => {
            setDeleteDepartmentId(dpId);
            setModalShow(true);
        }
    }
    const loadDepartment = async () => {
        let url = pageNum === 1 ? endpoints["department"] : `${endpoints["department"]}?page=${pageNum}`;
        await API.get(url).then(res => {
            console.log(res);
            setDepartments(res.data.results);

            var n_loop = Math.ceil(Number(res.data.count) / Number(constantConfig.PAGESIZE));
            const totalPagesTemp = [];
            for (var i = 1; i <= n_loop; i++) {
                totalPagesTemp.push(i);
            }
            setTotalPages(totalPagesTemp);
        })
    }
    const onClickPage = (page) => {

        return () => {
            setPageNum(page);
            loadDepartment();
        }
    }
    useEffect(() => {
        loadDepartment();
    }, [refreshKey, pageNum]);

    useEffect(() => {
    }, [totalPages]);

    useEffect(() => {
    }, [pageNum]);
    const deleteDepartment = () => {
        handleModalClose();
        API.delete(endpoints["department"] + `${deleteDepartmentId}/`).then(res => {
            if (res && res.status == 204) {
                setRefreshKey(oldKey => oldKey + 1);
                setShow(true);
                setTimeout(() => {
                    setShow(false);
                }, 2000);
            }
        })
    }
    const goEdit = (departmentId) => {
        return () => {
            nav(`edit/${departmentId}`);
            //         // bằng với  "edit/" + userId
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
                    <Button variant="primary" onClick={deleteDepartment}>
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>

            <h1>Thông tin khoa/ ngành</h1>
            <div className="card">
                <div className="card-header">
                    <a href="/admin/department/create" type="button" className="btn btn-primary btn-block" style={{ width: '150px', float: 'right' }}>
                        <i className="fa fa-plus"></i> Thêm mới
                    </a>

                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th style={{ width: 10 }}>#</th>
                                <th>Hình ảnh</th>
                                <th>Tên khoa</th>
                                <th>Nội dung</th>
                                <th>video</th>
                                <th style={{ width: 40 }}>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {departments.map((dp, index) =>
                                <tr key={dp.id}>
                                    <td>{index + 1}</td>
                                    <td> <img id="blah" alt="your image" src={dp.image} style={{ height: '50px', width: '60px', border: '1px solid black' }} />
                                    </td>
                                    <td>{dp.name}</td>
                                    <td>{dp.content}</td>
                                    <td>{dp.video_url}</td>
                                    <td>
                                        <button type="button" className="btn btn-default mr-2" onClick={goEdit(dp.id)}>
                                            <i className="fas fa-pencil-alt"></i>
                                        </button>
                                        <button type="button" className="btn btn-danger" onClick={handleModalShow(dp.id)}>
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
                    </ul>
                </div>
            </div>
            <Outlet />
        </div>
    )

}
