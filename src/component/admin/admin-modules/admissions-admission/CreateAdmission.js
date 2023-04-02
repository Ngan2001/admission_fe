import React, { useState, useEffect } from "react";
import API, { endpoints } from "../../../../API";
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreateAdmission() {
    const nav = useNavigate();
    let imageDefault = "/assets/images/default-thumbnail.jpg";

    const [types, setTypes] = useState([]);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [typeId, setTypeId] = useState('');
    const [thumbnailImage, setThumbnailImage] = useState('');

    const [createMessage, setCreateMessage] = useState("");
    const [errors, setErrors] = useState({});

    const [modalShow, setModalShow] = useState(false);
    const handleModalClose = () => setModalShow(false);
    const handleModalShow = () => setModalShow(true);

    const handleChangeImage = e => {
        setThumbnailImage(URL.createObjectURL(e.target.files[0]))
    }

    const loadTypes = async () => {
        await API.get(endpoints["admissionType"]).then(res => {
            setTypes(res.data.results);
        })
    }

    useEffect(() => {
        loadTypes();
    }, []);

    const handleSubmit = () => {
        var imgSrc = document.getElementById("blah").src;
        let errorsChk = {};
        let formIsValid = true;
    
        
        if(imgSrc.includes("default-thumbnail")) {
          errorsChk["thumbnailImage"] = "Không được để trống";
          formIsValid =false;
        }
        if(title == null || title == "") {
          errorsChk["title"] = "Không được để trống";
          formIsValid =false;
        }
        if(content == null || content == "") {
          errorsChk["content"] = "Không được để trống";
          formIsValid =false;
        }
        if(typeId == null || typeId == "") {
          errorsChk["typeId"] = "Không được để trống";
          formIsValid =false;
        }
    
        setErrors(errorsChk);
        return formIsValid;
    }

    const createAdmission = async () => {
        setErrors({});
        if(!handleSubmit()) {
            return;
        }

        // chuyển hình ảnh sang dạng base64
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var img = document.getElementById('blah');
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0,img.width, img.height);
        var dataURL = canvas.toDataURL("image/png");
        dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
        // end chuyển hình ảnh sang dạng base64
        var myData = dataURL;

        const data = {
            'title': title,
            'content': content,
            'thumbnail_image': myData,
            'admission_type': typeId,
        };

        // dòng này là gọi API
        const response = await API.post(endpoints["admission"], data).then(res => {
            setCreateMessage('Tạo mới thành công!')
            handleModalShow();
            setTimeout(() => {
                handleModalClose();
                nav("/admin/admission")
            }, 2000);
            
        }).catch(e => {

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
            <div className="content-wrapper">
                <div className="card card-primary">
                    <div className="card-header">
                        <h3 className="card-title">Tạo mới tin tuyển sinh</h3>
                    </div>
                    <form>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputFile">Chọn ảnh</label>
                                <div className="input-group">
                                    <img id="blah" alt="your image" src={thumbnailImage === "" ? imageDefault : thumbnailImage} style={{ height: '100px', width: '100px', border: '1px solid black', marginRight: '15px' }} />
                                    <input type="file" onChange={handleChangeImage} />
                                </div>
                                <span style={{ color: "red" }}>{errors['thumbnailImage']}</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Tiêu đề</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                <span style={{ color: "red" }}>{errors['title']}</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Nội dung</label>
                                <ReactQuill theme="snow" value={content} onChange={setContent} />
                                <span style={{ color: "red" }}>{errors['content']}</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Loại tin</label>
                                <select 
                                    value={typeId}
                                    className="form-control" name="types" id="types" onChange={(e) => setTypeId(e.target.value)}>
                                    
                                    <option value="">{'Chọn loại tin'}</option>
                                    {types.map(t => 
                                        <option key={t.id} value={t.id}>{t.type_name}</option>
                                    )}
                                </select>
                                <span style={{ color: "red" }}>{errors['typeId']}</span>
                            </div>
                        </div>
                        <div className="card-footer text-center">
                            <a type="button" className="btn btn-primary mr-2" href="/admin/admission" >
                                Trở về
                            </a>
                            <button type="button" className="btn btn-primary" onClick={createAdmission}>
                                Tạo mới
                            </button>
                        </div>
                    </form>
                </div>
            </div>
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
        </>
    )

}
