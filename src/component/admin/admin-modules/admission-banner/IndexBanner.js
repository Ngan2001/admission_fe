import React, { useState, useEffect } from "react";
import API, { endpoints } from "../../../../API";
import { Outlet, Link } from "react-router";
import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { constantConfig } from "../../../../constantConfig";

export default function IndexBanner() {
    const nav = useNavigate();
    const [banners, setBanners] = useState([]);
    const [totalPages, setTotalPages] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [show, setShow] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0); //to refresh user list after delete the user

    const [modalShow, setModalShow] = useState(false);
    const [deleteBannerId, setDeleteBannerId] = useState(null)
    const handleModalClose = () => setModalShow(false);
    const handModelShow = (bannerId) => {
        return () => {
            setDeleteBannerId(bannerId);
            setModalShow(true);
        }
    }

    const loadBanner = async () => {
        let url = pageNum === 1 ? endpoints["banner"] : `${endpoints["banner"]}?page=${pageNum}`;
        await API.get(url).then(res => {
            setBanners(res.data.results);

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
            loadBanner();
        }
    }
    useEffect(() => {
        loadBanner();
    }, [refreshKey, pageNum]);

    useEffect(() => {
    }, [totalPages]);

    useEffect(() => {
    }, [pageNum]);

    const deleteBanner = () => {
        handleModalClose();
        API.delete(endpoints["banner"] + `${deleteBannerId}/`).then(res => {
            if (res && res.status == 204) {
                setRefreshKey(oldKey => oldKey + 1);
                setShow(true);
                setTimeout(() => {
                    setShow(false);
                }, 2000);
            }
        })
    }

    const goEdit = (bannerId) => {
        return () => {
            nav(`edit/${bannerId}`);
        }
    }
    const handleModalShow = (bannerId) => {
        return () => {
            setDeleteBannerId(bannerId);
            setModalShow(true);
        }
    }


    return (
        <div className="content-wrapper">
            <Modal show={modalShow} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có muốn xóa banner này?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={deleteBanner}>
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>
            <h1>Danh sách Banner</h1>
            {show &&
                <Alert key={'success'} variant={'success'} onClose={() => setShow(false)} dismissible>
                    Đã xóa banner
                </Alert>
            }
            <div className="card">
                <div className="card-header">
                    <a href="/admin/banner/create" type="button" className="btn btn-primary btn-block" style={{ width: '150px', float: 'right' }}>
                        <i className="fa fa-plus"></i> Thêm mới
                    </a>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th style={{ width: 10 }}>#</th>
                                <th>Hình ảnh</th>
                                <th style={{ width: 120 }}>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {banners.map((b, index) =>
                                <tr key={b.id}>
                                    <td>{index + 1}</td>

                                    <td> <img id="blah" alt="your image" src={b.image_url} style={{ height: '100px', width: '600px', border: '1px solid black' }} />
                                    </td>

                                    <td>
                                        <button type="button" className="btn btn-danger" onClick={handleModalShow(b.id)}>
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
