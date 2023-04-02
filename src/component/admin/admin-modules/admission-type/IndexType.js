import React, { useState, useEffect } from "react";
import API, { endpoints } from "../../../../API";
import { useNavigate, useParams } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { constantConfig } from "../../../../constantConfig";

export default function IndexType() {
    const nav = useNavigate();

    const [types, setTypes] = useState([]);
    const [totalPages, setTotalPages] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [show, setShow] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0); //to refresh user list after delete the user

    const [modalShow, setModalShow] = useState(false);
    const [deleteTypeId, setDeleteTypeId] = useState(null);
    

    const handleModalClose = () => setModalShow(false);
    const handleModalShow = (typeId) => {
        return () => {
            setDeleteTypeId(typeId);
            setModalShow(true);
        }
    }
    const loadTypes = async () => {
        let url = pageNum === 1 ? endpoints["admissionType"] : `${endpoints["admissionType"]}?page=${pageNum}`;
        await API.get(url).then(res => {
            setTypes(res.data.results);

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
            loadTypes();
        }
    }

    useEffect(() => {
        loadTypes();
    }, [refreshKey, pageNum]);

    useEffect(() => {
    }, [totalPages]);

    useEffect(() => {
    }, [pageNum]);

    const goEdit = (userId) => {
        return() => {
            nav(`edit/${userId}`);
        }
    }

    const deleteType = () => {
        handleModalClose();
        API.delete(endpoints["admissionType"] + `${deleteTypeId}/`).then(res => {
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
        <div className="content-wrapper">
            <h1> Loại tin tuyển sinh</h1>
            {show &&
                <Alert key={'success'} variant={'success'} onClose={() => setShow(false)} dismissible>
                    Đã xóa loại tin
                </Alert>
            }
            <div className="card">
                <div className="card-header">
                    <a href="/admin/admission-type/create" type="button" className="btn btn-primary btn-block" style={{ width: '150px', float: 'right' }}>
                        <i className="fa fa-plus"></i> Thêm mới
                    </a>

                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th style={{ width: 10 }}>#</th>
                                <th>Tên loại</th>
                                <th>Mô tả</th>
                                <th style={{ width: 120 }}>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {types.map((u, index) =>
                                <tr key={u.id}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <Link className="btn-item auction-btn mr-2" to={`detail/${u.id}`}>
                                            {u.type_name}
                                        </Link>
                                    </td>
                                    <td>{u.decription}</td>
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
                        {totalPages.map(page => 
                            <li key={page} className="page-item">
                                <Link className={"page-link " + (pageNum == page ? 'link-active' : '')} to={ page == 1 ? `` : `/admin/admission-type/?page=${page}`} onClick={onClickPage(page)}>
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

            <Modal show={modalShow} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có muốn xóa loại tin này?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={deleteType}>
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>
            <Outlet />
        </div>
    )

}
