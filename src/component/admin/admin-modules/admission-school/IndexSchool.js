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

export default function IndexSchool() {
    const nav = useNavigate();
    const [school, setSchool] = useState([]);
    const [totalPages, setTotalPages] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    // thông báo xóa thành công 
    const [show, setShow] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0); //to refresh user list after delete the user
    // hện model có mún xóa hong
    const [modalShow, setModalShow] = useState(false);
    const [deleteSchoolId, setDeleteSchoolId] = useState(null);

    const handleModalClose = () => setModalShow(false);
    const handleModalShow = (schoolId) => {
        return () => {
            setDeleteSchoolId(schoolId);
            setModalShow(true);
        }
    }
    const loadSchool = async () => {
        let url = pageNum === 1 ? endpoints["school"] : `${endpoints["school"]}?page=${pageNum}`;
        await API.get(url).then(res => {
            console.log(res);
            setSchool(res.data.results);

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
            loadSchool();
        }
    }
    useEffect(() => {
        loadSchool();
    }, [refreshKey, pageNum]);

    useEffect(() => {
    }, [totalPages]);

    useEffect(() => {
    }, [pageNum]);

    const deleteSchool = () => {
        handleModalClose();
        API.delete(endpoints["school"] + `${deleteSchoolId}/`).then(res => {
            if (res && res.status == 204) {
                setRefreshKey(oldKey => oldKey + 1);
                setShow(true);
                setTimeout(() => {
                    setShow(false);
                }, 2000);
            }
        })
    }
    const goEdit = (schoolId) => {
        return () => {
            nav(`edit/${schoolId}`);
        }
    }
    return (
        <div className="content-wrapper">
             <Modal show={modalShow} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có muốn xóa khoa này?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={deleteSchool}>
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>
            <h1> Thông tin về trường</h1>
            <div className="card">
                <div className="card-header">
                    <a href="/admin/school/create" type="button" className="btn btn-primary btn-block" style={{ width: '150px', float: 'right' }}>
                        <i className="fa fa-plus"></i> Thêm mới
                    </a>

                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th style={{ width: 10 }}>id</th>
                                <th>Logo trường</th>
                                <th>Tên trường</th>
                                <th>Nội dung</th>
                                <th style={{ width: 40 }}>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                        {school.map((school, index) =>
                                <tr key={school.id}>
                                    <td>{index + 1}</td>
                                    <td> <img id="blah" alt="your image" src={school.logo} style={{ height: '50px', width: '60px', border: '1px solid black' }} />
                                    </td>
                                    <td>{school.title}</td>
                                    <td>{school.content}</td>
                                    <td>
                                        <button type="button" className="btn btn-default mr-2" onClick={goEdit(school.id)}>
                                            <i className="fas fa-pencil-alt"></i>
                                        </button>
                                        <button type="button" className="btn btn-danger" onClick={handleModalShow(school.id)}>
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
                                <Link className={"page-link " + (pageNum == page ? 'link-active' : '')} to={ page == 1 ? `` : `/admin/school/?page=${page}`} onClick={onClickPage(page)}>
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
