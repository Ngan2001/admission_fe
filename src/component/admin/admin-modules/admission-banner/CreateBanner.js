import React, { useState }  from "react";
import API, { endpoints } from "../../../../API";
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function CreateBanner() {
    const nav = useNavigate();
    const[image, setImage] = useState("");
    const[link, setLink] = useState("");
    // show model tạo thành công
    const [createMessage, setCreateMessage] = useState("");
    // hiện lỗi khi điền thông tin
    const [errors, setErrors] = useState({});
    const [modalShow, setModalShow] = useState(false);
    const handleModalClose = () => setModalShow(false);
    const handleModalShow = () => setModalShow(true);

    // hàm bắt lỗi input bị trống 
    const handleSubmit = () => {
        var imgSrc = document.getElementById("blah").src;
        let errorsChk = {};
        let formIsValid = true;

        
          
        setErrors(errorsChk);
        return formIsValid;
    }

    const handleChangeImage = e => {
        setImage(URL.createObjectURL(e.target.files[0]))
    }
    const createBanner = async () => {
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
            "image_url": myData
        };

        // dòng này là gọi API
        const response = await API.post(endpoints["banner"], data).then(res => {
            setCreateMessage('Tạo mới thành công!')
            handleModalShow();
            setTimeout(() => {
                handleModalClose();
                nav("/admin/banner")
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
        <div className="content-wrapper">
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
            <div className="card card-primary">
                <div className="card-header">
                    <h3 className="card-title">Tạo banner</h3>
                </div>
                <div className="form-group">
                                <label htmlFor="exampleInputFile">Chọn ảnh</label>
                                <div className="input-group">
                                    <img id="blah" alt="your image" src={image} style={{ height: '500px', width: '1500px', border: '1px solid black', marginRight: '15px' }} />
                                    <input type="file" onChange={handleChangeImage} />
                                </div>
                            </div>
                            <div className="card-footer text-center">
                            <a type="button" className="btn btn-primary mr-2" href="/admin/banner" >
                                Trở về
                            </a>
                            <button type="button" className="btn btn-primary" onClick={createBanner}>
                                Tạo mới
                            </button>
                        </div>
            </div>
        </div>
    )

}
