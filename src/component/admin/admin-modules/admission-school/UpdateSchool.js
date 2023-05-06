import React, { useState, useEffect } from "react";
import API, { endpoints } from "../../../../API";
import $ from 'jquery';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function UpdateSchool() {

    const nav = useNavigate();
    let imageDefault = "/assets/images/default-thumbnail.jpg";
    let { schoolId } = useParams();

    const [logo, setLogo] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [createMessage, setCreateMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [modalShow, setModalShow] = useState(false);
    const handleModalClose = () => setModalShow(false);
    const handleModalShow = () => setModalShow(true);
    const handleSubmit = () => {
        var imgSrc = document.getElementById("blah").src;
        let errorsChk = {};
        let formIsValid = true;

        if (logo == null || logo == "") {
            errorsChk["logo"] = "Không được để trống";
            formIsValid = false;
        }


        if (title == null || title == "") {
            errorsChk["title"] = "Không được để trống";
            formIsValid = false;
        }
        if (content == null || content == "") {
            errorsChk["content"] = "Không được để trống";
            formIsValid = false;
        }
        setErrors(errorsChk);
        return formIsValid;
    }
    const handleChangeImage = e => {
        setLogo(URL.createObjectURL(e.target.files[0]))
    }

    const updateSchool = async () => {
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

            logo: myData,
            title,
            content,


        };

        // dòng này là gọi API
        const response = await API.put(endpoints["school"] + `${schoolId}/`, data).then(res => {
            setCreateMessage('Tạo mới thành công!')
            handleModalShow();
            setTimeout(() => {
                handleModalClose();
                nav("/admin/school")
            }, 2000);

        }).catch(e => {
            let errorsCheck = {};
            setErrors(errorsCheck);

            setCreateMessage('Cập nhập thất bại!')
            handleModalShow();
            setTimeout(() => {
                handleModalClose();
            }, 2000);
        });
        // end dòng này là gọi API
    }
    useEffect(() => {
        const loadSchool = async () => {
            await API.get(endpoints[`school`] + `${schoolId}`).then(res => {
                const {logo, title, content } = res.data;

                setLogo(logo);
                setTitle(title);
                setContent(content);
                
            })
        }
        loadSchool();
    }, []);
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
                        <h3 className="card-title">Chỉnh sửa thông tin</h3>
                    </div>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputFile">Chọn logo</label>
                            <div className="input-group">
                                <img id="blah" alt="your image" src={logo} style={{ height: '100px', width: '100px', border: '1px solid black', marginRight: '15px' }} />
                                <input type="file" onChange={handleChangeImage} />
                            </div>
                            <span style={{ color: "red" }}>{errors['thumbnailImage']}</span>

                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Tên trường</label>
                            <input
                                type="text"
                                className="form-control"
                                id="exampleInputPassword1"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Nội dung</label>
                            <ReactQuill style={{"white-space": "normal"}}   theme="snow" value={content} onChange={setContent} />
                            <span style={{ color: "red" }}>{errors['content']}</span>
                        </div>



                        <div className="card-body">
                        </div>
                        <div className="card-footer text-center">
                            <a type="button" className="btn btn-primary mr-2" href="/admin/school" >
                                Trở về
                            </a>
                            <button type="button" className="btn btn-primary" onClick={updateSchool}>
                                Cập nhật
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )

}