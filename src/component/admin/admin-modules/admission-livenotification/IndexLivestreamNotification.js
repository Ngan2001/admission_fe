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

export default function IndexLivestreamNotification() {
    const nav = useNavigate();

    const [livestreamNotifications, setLivestreamNotifications] = useState([]);
    const [totalPages, setTotalPages] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    // thông báo xóa thành công 
    const [show, setShow] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0); //to refresh user list after delete the user
    // hện model có mún xóa hong
    const [modalShow, setModalShow] = useState(false);
    const [deleteLivestreamNotificationId, setDeleteLivestreamNotificationId] = useState(null);

    const handleModalClose = () => setModalShow(false);
    const handleModalShow = (lnId) => {
        return () => {
            setDeleteLivestreamNotificationId(lnId);
            setModalShow(true);
        }
    }
    const loadLivestreamNotifications = async () => {

        let url = pageNum === 1 ? endpoints["livestreamsnotification"] : `${endpoints["livestreamsnotification"]}?page=${pageNum}`;
        await API.get(url).then(res => {
            res.data.results.forEach(item => {
                let startDateFormatArr = new Date(item.start_date).toISOString().slice(0, 16).split("T");
                item.start_date = startDateFormatArr[0] + ", Lúc " + startDateFormatArr[1];
            });
            
            setLivestreamNotifications(res.data.results);

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
            loadLivestreamNotifications();
        }
    }
    useEffect(() => {
        loadLivestreamNotifications();
    }, [refreshKey, pageNum]);

    useEffect(() => {
    }, [totalPages]);

    useEffect(() => {
    }, [pageNum]);
    const deleteLivestreamNotification = () => {
        handleModalClose();
        API.delete(endpoints["livestreamsnotification"] + `${deleteLivestreamNotificationId}/`).then(res => {
            if (res && res.status == 204) {
                setRefreshKey(oldKey => oldKey + 1);
                setShow(true);
                setTimeout(() => {
                    setShow(false);
                }, 2000);
            }
        })
    }
    const goEdit = (livestreamId) => {
        return () => {
            nav(`edit/${livestreamId}`);
            //         // bằng với  "edit/" + userId
        }
    }
    return (
        <div className="content-wrapper">

            <Modal show={modalShow} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có muốn xóa thông báo này?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={deleteLivestreamNotification}>
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>

            <h1>Thông báo livestream </h1>
            <div className="card">
                <div className="card-header">
                    <a href="/admin/livestream/create" type="button" className="btn btn-primary btn-block" style={{ width: '200px', float: 'right' }}>
                        <i className="fas fa-utensil-spoon"></i> Thêm mới
                    </a>

                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th style={{ width: 10 }}>#</th>
                                <th>Tiêu đề</th>
                                <th>Nội dung</th>
                                <th>Thời gian livestream</th>
                                <th>Thời lượng livestream(phút)</th>

                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {livestreamNotifications.map((lsn, index) =>
                                <tr key={lsn.id}>
                                    <td>{index + 1}</td>
                                    <td>{lsn.title}</td>
                                    <td>{lsn.content}</td>
                                    <td>{lsn.start_date}</td>
                                    <td>{lsn.time}</td>

                                    <td>
                                        <button type="button" className="btn btn-default mr-2" onClick={goEdit(lsn.id)}>
                                            <i className="fas fa-pencil-alt"></i>
                                        </button>
                                        <button type="button" className="btn btn-danger" onClick={handleModalShow(lsn.id)}>
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
                                <Link className={"page-link " + (pageNum == page ? 'link-active' : '')} to={page == 1 ? `` : `/admin/livestreamnotification/?page=${page}`} onClick={onClickPage(page)}>
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
