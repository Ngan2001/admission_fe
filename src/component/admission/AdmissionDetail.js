import React, { useState, useEffect } from "react";
import $ from 'jquery';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import API, { endpoints } from '../../API';


export default function AdmissionDetail() {

    let { admissionId } = useParams();
    const [comment, setComment] = useState("");
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

    useEffect(() => {
        const loadAdmissions = async () => {
            await API.get(endpoints[`admission`] + `${admissionId}`).then(res => {
                const {title, content, thumbnail_image, admission_type} = res.data;

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
        if(checkUserLogin) {
            setIsLogged(checkUserLogin);
            let user = JSON.parse(localStorage.getItem("user"));

            if(user != null && user != undefined) {
                setUserAvatarURL(user.avatar);
                setUsername(user.username);
            }
        }
    }, []);

    const repComment = (ind) => {
        return () => {
            // just show only one reply element 
            if(commentList[ind]['commentChilds'] && commentList[ind]['commentChilds'].filter(item => item['isReplying'] && item['isReplying']  == true).length > 0) return;

            let objComment = {
                name: username,
                avatar: userAvatarURL,
                time: getCurrentDateFormat(),
                content: comment,
                isReplying: true
            };

            let newState = [...commentList];
            if(newState[ind]['commentChilds']) {
                newState[ind]['commentChilds'].push(objComment);
            } else {
                newState[ind]['commentChilds'] = [];
                newState[ind]['commentChilds'].push(objComment);
            }
            
            setCommentList(newState);
        };
    }

    const postComment = () => {
        if(!comment) return;
        let objComment = {
            name: username,
            avatar: userAvatarURL,
            time: getCurrentDateFormat(),
            content: comment
        };
        setCommentList([...commentList, objComment]);
        setComment("");
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


        const formattedToday = hh + ':' + mm + ' Ngày ' +  dd + '/' + MM + '/' + yyyy;
        return formattedToday;
    }

    return (
        <>
            <h1 className="text-uppercase text-primary mt-3 mb-2">{title}</h1>
            <div className="card card-widget">
                <div className="card-body mt-3 mb-2">
                    {title}
                </div>
                <div className="card-footer card-comments mt-5">
                    <h1 className="mt-3 mb-4">Phần bình luận</h1>
                    { commentList?.map((item, index) => (
                        <div className="card-comment">
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

                                <br/>
                                {item.name != username && (
                                    <a href="javascript:void(0)" onClick={repComment(index)}>Trả lời</a>
                                )}
                                
                            </div>
                            {item.commentChilds?.map(subItem => 
                                <>
                                {!subItem.isReplying && (
                                    <div className="card-comment card-comment-child" style={{marginLeft: '40px'}}>
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
                                    <div className="card-comment card-comment-child" style={{marginLeft: '40px'}}>
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
                
            </div>

        </>
    );
}