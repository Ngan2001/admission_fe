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
            }
        }
    }, []);

    return (
        <>
            <h1 className="text-uppercase text-primary mt-3 mb-2">{title}</h1>
            <div className="card card-widget">
                <div className="card-body mt-3 mb-2">
                    {title}
                </div>
                <div className="card-footer card-comments mt-5">
                    <h1 className="mt-3 mb-4">Phần bình luận</h1>
                    <div className="card-comment">
                        <img
                            className="img-circle img-sm"
                            src="/admin-lte/dist/img/user3-128x128.jpg"
                            alt="User Image"
                        />
                        <div className="comment-text">
                            <span className="username">
                                Maria Gonzales
                                <span className="text-muted float-right">8:03 PM Today</span>
                            </span>
                            It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout.
                        </div>
                    </div>
                    <div className="card-comment">
                        <img
                            className="img-circle img-sm"
                            src="/admin-lte/dist/img/user5-128x128.jpg"
                            alt="User Image"
                        />
                        <div className="comment-text">
                            <span className="username">
                                Nora Havisham
                                <span className="text-muted float-right">8:03 PM Today</span>
                            </span>
                            The point of using Lorem Ipsum is that it hrs a morer-less normal
                            distribution of letters, as opposed to using 'Content here, content
                            here', making it look like readable English.
                        </div>
                    </div>
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
                            />
                            <button className="btn btn-outline-success mt-3" type="button" >
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