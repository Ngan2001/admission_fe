import React, { useState, useEffect } from "react";
import API, { endpoints } from "../../../../API";
import { useNavigate, useParams } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { constantConfig } from "../../../../constantConfig";

export default function IndexAdmission() {
    const nav = useNavigate();

    const [admissions, setAdmissions] = useState([]);
    const [totalPages, setTotalPages] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [show, setShow] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0); //to refresh user list after delete the user

    const [modalShow, setModalShow] = useState(false);
    const [deleteAdmissionId, setDeleteAdmissionId] = useState(null);
    

    const handleModalClose = () => setModalShow(false);
    const handleModalShow = (admissionId) => {
        return () => {
            setDeleteAdmissionId(admissionId);
            setModalShow(true);
        }
    }
    const loadAdmissions = async () => {
        let url = pageNum === 1 ? endpoints["admission"] : `${endpoints["admission"]}?page=${pageNum}`;
        await API.get(url).then(res => {
            setAdmissions(res.data.results);

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
            loadAdmissions();
        }
    }

    useEffect(() => {
        loadAdmissions();
    }, [refreshKey, pageNum]);

    useEffect(() => {
    }, [totalPages]);

    useEffect(() => {
    }, [pageNum]);

    const goEdit = (admissionId) => {
        return() => {
            nav(`edit/${admissionId}`);
        }
    }

    const deleteAdmission = () => {
        handleModalClose();
        API.delete(endpoints["admission"] + `${deleteAdmissionId}/`).then(res => {
            if (res && res.status == 204) {
                setRefreshKey(oldKey => oldKey + 1);
                setShow(true);
                setTimeout(() => {
                    setShow(false);
                }, 2000);
            }
        })
    }
    return (
        <>
        <Modal show={modalShow} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có muốn xóa tin?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={deleteAdmission}>
                        Xóa
                    </Button>
                </Modal.Footer>
        </Modal>
        <div className="content-wrapper">
            <h1>Danh sách tin tuyển sinh</h1>
            {show &&
                <Alert key={'success'} variant={'success'} onClose={() => setShow(false)} dismissible>
                    Đã xóa tin
                </Alert>
            }
            <div className="card">
                <div className="card-header">
                <a href="/admin/admission/create" type="button" className="btn btn-primary btn-block" style={{ width: '150px', float: 'right' }}>
                    <i className="fa fa-plus"></i> Thêm mới
                </a>

                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th style={{ width: 10 }}>#</th>
                                <th>Tiêu đề</th>
                                <th>Loại tin</th>
                                <th>Nội dung</th>
                                <th>Hình ảnh</th>
                                <th style={{ width: 120 }}>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                        {admissions.map((u, index) =>
                                <tr key={u.id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        {u.title}
                                    </td>
                                    <td>{u.admission_type}</td>
                                    <td>
                                        <Link className="btn-item auction-btn mr-2" to={`detail/${u.id}`}>
                                            Xem chi tiết
                                        </Link>
                                    </td>
                                    <td>
                                        <img id="blah" alt="your image" src={u.thumbnail_image} style={{ height: '60px', width: '60px', border: '1px solid black' }} />
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-default mr-2" onClick={goEdit(u.id)}>
                                            <i className="fas fa-pencil-alt"></i>
                                        </button>
                                        <button type="button" className="btn btn-danger" onClick={handleModalShow(u.id)}>
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
        </>
    )

}
