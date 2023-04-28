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

export default function IndexQuestions() {
    const nav = useNavigate();
    const [questions, setQuestions] = useState([]);
    const [totalPages, setTotalPages] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    // thông báo xóa thành công 
    const [show, setShow] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0); //to refresh user list after delete the user
    // hện model có mún xóa hong
    const [modalShow, setModalShow] = useState(false);
    const [deleteQuestionId, setDeleteQuestionId] = useState(null);

    const handleModalClose = () => setModalShow(false);
    const handleModalShow = (questions) => {
        return () => {
            setDeleteQuestionId(questions);
            setModalShow(true);
        }
    }
    const loadQuestions = async () => {

        let url = pageNum === 1 ? endpoints["admissionsquestion"] : `${endpoints["admissionsquestion"]}?page=${pageNum}`;
        await API.get(url).then(res => {
            // console.log(res);
            console.log(res.data.results);
            setQuestions(res.data.results);

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
            loadQuestions();
        }
    }
    useEffect(() => {
        loadQuestions();
    }, [refreshKey, pageNum]);

    useEffect(() => {
    }, [totalPages]);

    useEffect(() => {
    }, [pageNum]);
    const deleteQuestions = () => {
        handleModalClose();
        API.delete(endpoints["admissionsquestion"] + `${deleteQuestionId}/`).then(res => {
            if (res && res.status == 204) {
                setRefreshKey(oldKey => oldKey + 1);
                setShow(true);
                setTimeout(() => {
                    setShow(false);
                }, 2000);
            }
        })
    }

    const goEdit = (questionId) => {
        return () => {
            nav(`edit/${questionId}`);
            //         // bằng với  "edit/" + userId
        }
    }
    return (
        <div className="content-wrapper">
            <Modal show={modalShow} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận</Modal.Title>
                </Modal.Header>
                <Modal.Body>Bạn có muốn xóa câu hỏi này?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={deleteQuestions}>
                        Xóa
                    </Button>
                </Modal.Footer>
            </Modal>
            <h1>Câu hỏi thường gặp</h1>
            <div className="card">
                <div className="card-header">
                    <a href="/admin/questions/create" type="button" className="btn btn-primary btn-block" style={{ width: '200px', float: 'right' }}>
                        <i className="fas fa-utensil-spoon"></i> Thêm mới
                    </a>

                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th style={{ width: 10 }}>id</th>
                                <th>Câu hỏi</th>
                                <th>Người đặt câu hỏi</th>
                                <th>Câu trả lời</th>
                                <th>Thời gian</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                        {questions.map((questions, index) =>
                                <tr key={questions.id}>
                                    <td>{index + 1}</td>
                                    <td>{questions.question}</td>
                                    <td>{questions.user_id}</td>
                                    <td>{questions.is_answer}</td>
                                    <td>{questions.date_answer}</td>

                                    <td>
                                        <button type="button" className="btn btn-default mr-2" onClick={goEdit(questions.id)}>
                                            <i className="fas fa-pencil-alt"></i>
                                        </button>
                                        <button type="button" className="btn btn-danger" onClick={handleModalShow(questions.id)}>
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
                                <Link className={"page-link " + (pageNum == page ? 'link-active' : '')} to={page == 1 ? `` : `/admin/questions/?page=${page}`} onClick={onClickPage(page)}>
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