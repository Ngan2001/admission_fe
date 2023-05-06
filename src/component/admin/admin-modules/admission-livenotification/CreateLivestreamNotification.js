import React, { useState } from "react";
import API, { endpoints } from "../../../../API";
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function CreateLivestreamNotification() {
    const nav = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [startDate, setStartDate] = useState("");
    const [time, setTime] = useState("");
    const [createMessage, setCreateMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [modalShow, setModalShow] = useState(false);
    const handleModalClose = () => setModalShow(false);
    const handleModalShow = () => setModalShow(true);
    const handleSubmit = () => {
        let errorsChk = {};
        let formIsValid = true;




        if (title == null || title == "") {
            errorsChk["title"] = "Không được để trống";
            formIsValid = false;
        }

        if (content == null || content == "") {
            errorsChk["content"] = "Không được để trống";
            formIsValid = false;
        }
        if (startDate == null || startDate == "") {
            errorsChk["startDate"] = "Không được để trống";
            formIsValid = false;
        }
        if (time == null || time == "") {
            errorsChk["time"] = "Không được để trống";
            formIsValid = false;
        }
        setErrors(errorsChk);
        return formIsValid;
    }
    const createLivestream = async () => {
        setErrors({});
        if (!handleSubmit()) {
            return;
        }


        const data = {

            title,
            content,
            'start_date': startDate,
            time,

        };

        // dòng này là gọi API
        const response = await API.post(endpoints["livestreamsnotification"], data).then(res => {
            setCreateMessage('Tạo mới thành công!')
            handleModalShow();
            setTimeout(() => {
                handleModalClose();
                nav("/admin/livestream")
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
                        <h3 className="card-title">Thông báo livestream</h3>
                    </div>
                    <form>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Tiêu đề </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                onChange={(e) => setTitle(e.target.value)}

                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Nội dung</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                onChange={(e) => setContent(e.target.value)}

                                />
                            </div>
                            <div className="form-group">
                                <label>Thời gian livestream</label>
                                <div className="input-group">
                                    {/* <input id="startDate" className="form-control" type="date"
                                        onChange={(e) => setStartDate(e.target.value)} /> */}

                                    <input type="datetime-local" id="meetinstartDate"  className="form-control"
                                        name="startDate" onChange={(e) => setStartDate(e.target.value)}/>
                                    <span style={{ color: "red" }}>{errors['startDate']}</span>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Thời lượng livestream (phút)</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                onChange={(e) => setTime(e.target.value)}

                                />
                            </div>
                        </div>
                        <div className="card-footer text-center">
                            <a type="button" className="btn btn-primary mr-2" href="/admin/livestream" >
                                Trở về
                            </a>
                            <button type="button" className="btn btn-primary" onClick={createLivestream}>
                                Tạo mới
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )

}
