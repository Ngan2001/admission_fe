import React, { useState } from "react";
import API, { endpoints } from "../../../../API";
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactQuill from "react-quill";

export default function CreateDepartment() {
    const nav = useNavigate();
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [introduction, setIntroduction] = useState("");
    const [content, setContent] = useState("");
    const [website, setWebsite] = useState("");
    const [video, setVideo] = useState("");
    const [createMessage, setCreateMessage] = useState("");
    const [errors, setErrors] = useState({});

    const [modalShow, setModalShow] = useState(false);
    const handleModalClose = () => setModalShow(false);
    const handleModalShow = () => setModalShow(true);

    const handleSubmit = () => {
        var imgSrc = document.getElementById("blah").src;
        let errorsChk = {};
        let formIsValid = true;



        if (image == null || image == "") {
            errorsChk["image"] = "Không được để trống";
            formIsValid = false;
        }
        if (name == null || name == "") {
            errorsChk["name"] = "Không được để trống";
            formIsValid = false;
        }

        if (content == null || content == "") {
            errorsChk["content"] = "Không được để trống";
            formIsValid = false;
        }

        if (website == null || website == "") {
            errorsChk["website"] = "Không được để trống";
            formIsValid = false;
        }

        if (video == null || video == "") {
            errorsChk["video"] = "Không được để trống";
            formIsValid = false;
        }

        setErrors(errorsChk);
        return formIsValid;
    }
    const handleChangeImage = e => {
        setImage(URL.createObjectURL(e.target.files[0]))
    }
 
    const createDepartment = async () => {
        setErrors({});
        if (!handleSubmit()) {
            return;
        }

        // chuyển hình ảnh sang dạng base64
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var img = document.getElementById('blah');
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0, img.width, img.height);
        var dataURL = canvas.toDataURL("image/png");
        dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
        // end chuyển hình ảnh sang dạng base64
        var myData = dataURL;

        const data = {
            image : myData,
            name,
            content,
            website,
            'video_url': video,
        };

        // dòng này là gọi API
        const response = await API.post(endpoints["department"], data).then(res => {
            setCreateMessage('Tạo mới thành công!')
            handleModalShow();
            setTimeout(() => {
                handleModalClose();
                nav("/admin/department")
            }, 2000);

        }).catch(e => {
            let errorsCheck = {};
            setErrors(errorsCheck);

            setCreateMessage('Tạo mới thất bại!')
            handleModalShow();
            setTimeout(() => {
                handleModalClose();
            }, 2000);
        });
        // end dòng này là gọi API
    }
    return (
        <>
            <Modal show={modalShow} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thông báo</Modal.Title>
                </Modal.Header>
                <Modal.Body>{createMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
            <div className="content-wrapper">
                <div className="card card-primary">
                    <div className="card-header">
                        <h3 className="card-title">Tạo thông tin về khoa</h3>
                    </div>
                    <form>
                    <div className="form-group">
                                <label htmlFor="exampleInputFile">Chọn ảnh</label>
                                <div className="input-group">
                                    <img id="blah" alt="your image" src={image} style={{ height: '200px', width: '900px', border: '1px solid black', marginRight: '15px' }} />
                                    <input type="file" onChange={handleChangeImage} />
                                </div>
                            </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Tên khoa</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Nội dung</label>
                            <ReactQuill theme="snow" value={content} onChange={setContent} />
                            <span style={{ color: "red" }}>{errors['content']}</span>
                        </div>
                        <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Website</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    onChange={(e) => setWebsite(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Video</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    onChange={(e) => setVideo(e.target.value)}
                                />
                            </div>
                            
                        <div className="card-body">
                        </div>
                        <div className="card-footer text-center">
                            <a type="button" className="btn btn-primary mr-2" href="/admin/department" >
                                Trở về
                            </a>
                            <button type="button" className="btn btn-primary" onClick={createDepartment}>
                                Tạo mới
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )
}
