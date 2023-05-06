import React, { useState, useEffect } from "react";
import $ from 'jquery';
import { useNavigate, useParams } from 'react-router-dom';
import API, { endpoints } from "../../API";
import { formatDateTimeResponse } from "../../Utils";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { Link } from "react-router-dom";

export default function LivestreamDetail() {
    let { livestreamId } = useParams();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [startDate, setStartDate] = useState("");
    const [time, setTime] = useState("");
    const [comment, setComment] = useState("");
    const [userId, setUserId] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const [commentInDB, setCommentInDB] = useState([]);
    const [refreshKey, setRefreshKey] = useState(0);

    const postQuestion = async () => {
        if (!comment) return;
        let objComment = {
            'livestreams_id': livestreamId,
            content: comment,
            'user_id': userId
        };
        const response = await API.post(endpoints["livestreamscomment"], objComment).then(res => {
            // objComment.time = formatDateTimeResponse(res.data.created_date);
            setRefreshKey(oldKey => oldKey + 1);
            setShowToast(true);
            // setCommentInDB([...commentInDB, objComment]);
            setComment("");

            setTimeout(() => {
                setShowToast(false);
            }, 2000);
        }).catch(e => {

        });
    }

    const loginToComment = () => {
         localStorage.setItem('previousUrl', window.location.pathname)
    }

    useEffect(() => {
        const loadLivestreamComment = async () => {
            await API.get(endpoints["livestreamscomment"] + `?livestreamId=${livestreamId}`).then(res => {

                let data = res.data.results.map(item => {
                    return { ...item, name: item.username, time: formatDateTimeResponse(item.created_date) }
                });
                setCommentInDB(data);
            });
        }

        loadLivestreamComment();
    }, [refreshKey]);

    useEffect(() => {
        const loadLive = async () => {
            await API.get(endpoints[`livestreamsnotification`] + `${livestreamId}`).then(res => {
                const { title, content, start_date, time } = res.data;

                setTitle(title);
                setContent(content);
                setStartDate(start_date.slice(0, 16)); 
                setTime(time);
            })
        }
        loadLive();
    }, []);

    useEffect(() => {
        let checkUserLogin = localStorage.getItem("isLogged");
        if (checkUserLogin) {
            setIsLogged(checkUserLogin);
            let user = JSON.parse(localStorage.getItem("user"));

            if (user != null && user != undefined) {
                setUserId(JSON.parse(localStorage.getItem("user_id")));
            }
        }
    }, []);

    return (
        <>
            <ToastContainer className="p-3" position={'top-end'} containerPosition={'fixed'}>
                <Toast bg={'primary'} show={showToast}>
                    <Toast.Header closeButton={false}>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">Thông báo</strong>
                        {/* <small>11 mins ago</small> */}
                    </Toast.Header>
                    <Toast.Body>Câu hỏi của bạn đã được đăng!</Toast.Body>
                </Toast>
            </ToastContainer>
            <h1>Chi tiết buổi livestream</h1>
            
            <div className="card">
            <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Tiêu đề </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    value={title}
                                    disabled
                                    onChange={(e) => setTitle(e.target.value)}

                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Nội dung</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    value={content}
                                    disabled
                                    onChange={(e) => setContent(e.target.value)}

                                />
                            </div>
                            <div className="form-group">
                                <label>Thời gian livestream</label>
                                <div className="input-group">
                                    <input type="datetime-local" id="startDate" value={startDate} className="form-control"
                                        disabled name="startDate" onChange={(e) => setStartDate(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Thời lượng livestream (phút)</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        value={time}
                                        disabled
                                        onChange={(e) => setTime(e.target.value)}

                                    />
                                </div>
                            </div>
                        </div>
                <div className="card-header">
                    <h3 className="card-title fw-bold">Danh sách các câu hỏi được đặt</h3>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th style={{ width: 10 }}>#</th>
                                <th>Câu hỏi</th>
                                <th>Sinh viên</th>
                                <th>Thời gian</th>
                            </tr>
                        </thead>
                        <tbody>
                            {commentInDB?.map((item, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>
                                        {item.content}
                                    </td>
                                    <td>{item.username}</td>
                                    <td>
                                        {item.time}
                                    </td>
                                </tr>
                            ))}
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
            <div className="card card-primary">
                <div className="card-header">
                    <h3 className="card-title">Đặt câu hỏi</h3>
                </div>

                {isLogged && (
                    <form>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Câu hỏi</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    placeholder="Nhập câu hỏi"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-primary" onClick={postQuestion}>
                                Gửi
                            </button>
                        </div>
                    </form>
                )}

                {!isLogged && (
                    <div className="card-footer">
                        Bạn cần 
                        <Link to="/login" onClick={loginToComment}> đăng nhập </Link>
                        để có thể đặt câu hỏi
                    </div>
                )}
                
            </div>
        </>
    );
}