import React, { useState, useEffect } from "react";
import $ from 'jquery';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import API, { endpoints } from '../../API';
import { formatDateTimeResponse } from "../../Utils";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { Link } from "react-router-dom";

export default function AdmissionDetail() {

    const [showToast, setShowToast] = useState(false);

    let { admissionId } = useParams();

    const [commentInDB, setCommentInDB] = useState([]);
    const [comment, setComment] = useState("");
    const [commentReply, setCommentReply] = useState("");
    const [refreshKey, setRefreshKey] = useState(0);
    const [commentList, setCommentList] = useState(
        [
            {
                name: 'Maria Gonzales',
                avatar: '/admin-lte/dist/img/user3-128x128.jpg',
                time: '17:12 Ngày 09/4/2023',
                content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                commentChilds: [
                    {
                        name: 'Established',
                        avatar: '/admin-lte/dist/img/user4-128x128.jpg',
                        time: '17:12 Ngày 09/4/2023',
                        content: 'It is a long established fact that a reader will be distracted.',
                        isReplying: false
                    },
                    {
                        name: 'Distracted',
                        avatar: '/admin-lte/dist/img/user8-128x128.jpg',
                        time: '17:12 Ngày 09/4/2023',
                        content: 'It is a long established fact that a reader will be distracted.',
                        isReplying: false
                    }
                ]
            },
            {
                name: 'Nora Havisham',
                avatar: '/admin-lte/dist/img/user5-128x128.jpg',
                time: '17:12 Ngày 09/4/2023',
                content: 'The point of using Lorem Ipsum is that it hrs a morer-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.'
            },
        ]
    );

    const nav = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [thumbnailImage, setThumbnailImage] = useState("");
    const [admissionType, setAdmissionType] = useState("");
    const [types, setTypes] = useState([]);

    const [isLogged, setIsLogged] = useState(false);
    const [userAvatarURL, setUserAvatarURL] = useState("");
    const [username, setUsername] = useState("");
    const [userId, setUserId] = useState("");


    const loginToComment = () => {
        localStorage.setItem('previousUrl', window.location.pathname)
    }

    useEffect(() => {
        const loadComment = async () => {
            await API.get(endpoints["comment"] + `?admissionId=${admissionId}`).then(res => {

                let commentWithOriginalId = res.data.filter(item => item.origin_comment_id);
                let commentWithoutOriginalId = res.data.filter(item => !item.origin_comment_id);
                commentWithoutOriginalId.forEach(c => {
                    let commentChilds = commentWithOriginalId.filter(child => child.origin_comment_id == c.id);
                    c['commentChilds'] = [];
                    commentChilds.forEach(child => {
                        c['commentChilds'].push({...child, name: child.username, time: formatDateTimeResponse(child.created_date)});
                    })
                });


                let data = commentWithoutOriginalId.map(item => {
                    return { ...item, name: item.username, time: formatDateTimeResponse(item.created_date) }
                });
                setCommentInDB(data);
            });
        }

        loadComment();
    }, [refreshKey]);

    useEffect(() => {
        const loadAdmissions = async () => {
            await API.get(endpoints[`admission`] + `${admissionId}`).then(res => {
                const { title, content, thumbnail_image, admission_type } = res.data;

                setTitle(title);
                setContent(content);
                setThumbnailImage(thumbnail_image);
                setAdmissionType(admission_type);
            })
        }
        loadAdmissions();
    }, []);

    useEffect(() => {
        let checkUserLogin = localStorage.getItem("isLogged");
        if (checkUserLogin) {
            setIsLogged(checkUserLogin);
            let user = JSON.parse(localStorage.getItem("user"));

            if (user != null && user != undefined) {
                setUserAvatarURL(user.avatar);
                setUsername(user.username);
                setUserId(JSON.parse(localStorage.getItem("user_id")));
            }
        }
    }, []);



    const repComment =  (ind) => {
        return  () => {
            // just show only one reply element 
            if (commentInDB[ind]['commentChilds'] && commentInDB[ind]['commentChilds'].filter(item => item['isReplying'] && item['isReplying'] == true).length > 0) return;
            // if (commentList[ind]['commentChilds'] && commentList[ind]['commentChilds'].filter(item => item['isReplying'] && item['isReplying'] == true).length > 0) return;

            let objComment = {
                name: username,
                avatar: userAvatarURL,
                time: getCurrentDateFormat(),
                content: comment,
                isReplying: true
            };

            let newState = [...commentInDB];
            if (newState[ind]['commentChilds']) {
                newState[ind]['commentChilds'].push(objComment);
            } else {
                newState[ind]['commentChilds'] = [];
                newState[ind]['commentChilds'].push(objComment);
            }

            setCommentInDB(newState);
        };
    }

    const sendCommentReply =  (ind) => {
        return async () => {

            let objComment2 = {
                name: username,
                avatar: userAvatarURL,
                time: getCurrentDateFormat(),
                content: commentReply,
                'admissions_id': admissionId,
                'user_id': userId,
                'origin_comment_id': commentInDB[ind]['id']
            };
            const response = await API.post(endpoints["comment"], objComment2).then(res => {
                setRefreshKey(oldKey => oldKey + 1);
    
                setShowToast(true);
                setCommentReply("");
    
                setTimeout(() => {
                    setShowToast(false);
                }, 2000);
            }).catch(e => {
    
            });
        };
    }

    

    const postComment = async () => {
        if (!comment) return;
        let objComment = {
            name: username,
            avatar: userAvatarURL,
            time: getCurrentDateFormat(),
            content: comment,
            'admissions_id': admissionId,
            'user_id': userId,
            'origin_comment_id': null
        };
        const response = await API.post(endpoints["comment"], objComment).then(res => {
            objComment.time = formatDateTimeResponse(res.data.created_date);

            setShowToast(true);
            setCommentInDB([...commentInDB, objComment]);
            setComment("");

            setTimeout(() => {
                setShowToast(false);
            }, 2000);
        }).catch(e => {

        });
    }

    const getCurrentDateFormat = () => {
        const today = new Date();
        const yyyy = today.getFullYear();
        let MM = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();

        let hh = today.getHours();
        let mm = today.getMinutes();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;


        const formattedToday = hh + ':' + mm + ' Ngày ' + dd + '/' + MM + '/' + yyyy;
        return formattedToday;
    }

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
                    <Toast.Body>Bình luận của bạn đã được đăng!</Toast.Body>
                </Toast>
            </ToastContainer>
            <h1 className="text-uppercase text-primary mt-3 mb-2">{title}</h1>
            <div className="card card-widget">
                <div className="card-body mt-3 mb-2">
                    {title}
                </div>
                <div className="card-footer card-comments mt-5">
                    <h1 className="mt-3 mb-4">Phần bình luận</h1>
                    {commentInDB?.map((item, index) => (
                        <div className="card-comment" key={item.id}>
                            <img
                                className="img-circle img-sm"
                                src={item.avatar}
                                alt="User Image" />
                            <div className="comment-text">
                                <span className="username">
                                    {item.name}
                                    <span className="text-muted float-right">{item.time}</span>
                                </span>
                                {item.content}

                                <br />
                                {item.name != username && (
                                    <button type="button" className="btn btn-link" onClick={repComment(index)}>Trả lời</button>
                                )}

                            </div>
                            {item.commentChilds?.map(subItem =>
                                <>
                                    {!subItem.isReplying && (
                                        <div key={subItem.id} className="card-comment card-comment-child" style={{ marginLeft: '40px' }}>
                                            <img
                                                className="img-circle img-sm"
                                                src={subItem.avatar}
                                                alt="User Image" />
                                            <div className="comment-text">
                                                <span className="username">
                                                    {subItem.name}
                                                    <span className="text-muted float-right">{subItem.time}</span>
                                                </span>
                                                {subItem.content}
                                            </div>
                                        </div>
                                    )}
                                    {subItem.isReplying && (
                                        <div key={subItem.id} className="card-comment card-comment-child" style={{ marginLeft: '40px' }}>
                                            <img
                                                className="img-fluid img-circle img-sm"
                                                src={userAvatarURL}
                                                alt="Alt Text"
                                            />
                                            <div className="img-push">
                                                <input
                                                    type="text"
                                                    className="form-control form-control-sm"
                                                    placeholder="Nhấn Enter để gửi bình luận"
                                                    value={commentReply}
                                                    onChange={(e) => setCommentReply(e.target.value)}
                                                />
                                                <button className="btn btn-outline-success mt-3" type="button" onClick={sendCommentReply(index)}>
                                                    Gửi
                                                </button>
                                            </div>
                                        </div>
                                    )
                                    }

                                </>
                            )}

                        </div>
                    ))}
                </div>
                {isLogged && (
                    <div className="card-footer">
                        <form action="#" method="post">
                            <img
                                className="img-fluid img-circle img-sm"
                                src={userAvatarURL}
                                alt="Alt Text"
                            />
                            <div className="img-push">
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    placeholder="Nhấn Enter để gửi bình luận"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                />
                                <button className="btn btn-outline-success mt-3" type="button" onClick={postComment}>
                                    Gửi
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {!isLogged && (
                    <div className="card-footer">
                        Bạn cần 
                        <Link to="/login" onClick={loginToComment}> đăng nhập </Link>
                         để có thể bình luận
                    </div>
                )}

            </div>

        </>
    );
}