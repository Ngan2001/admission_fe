import React, { useState } from "react";
import API, { endpoints } from "../../../../API";
import $ from 'jquery';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function CreateQuetions() {
    const nav = useNavigate();
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [dateAnswer, setDateAnswer] = useState("");
    const [createMessage, setCreateMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [modalShow, setModalShow] = useState(false);
    const handleModalClose = () => setModalShow(false);
    const handleModalShow = () => setModalShow(true);
    const handleSubmit = () => {
        let errorsChk = {};
        let formIsValid = true;

        if (question == null || question == "") {
            errorsChk["question"] = "Không được để trống";
            formIsValid = false;
        }

        
        if (answer == null || answer == "") {
            errorsChk["answer"] = "Không được để trống";
            formIsValid = false;
        }
        if (dateAnswer == null || dateAnswer == "") {
            errorsChk["dateAnswer"] = "Không được để trống";
            formIsValid = false;
        }
        setErrors(errorsChk);
        return formIsValid;
    }
    const createQuestion = async () => {
        setErrors({});
        if (!handleSubmit()) {
            return;
        }


        const data = {

            question,
            'answer': answer,
            'date_answer': dateAnswer,
    

        };

        // dòng này là gọi API
        const response = await API.post(endpoints["admissionsquestion"], data).then(res => {
            setCreateMessage('Tạo mới thành công!')
            handleModalShow();
            setTimeout(() => {
                handleModalClose();
                nav("/admin/questions")
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
                        <h3 className="card-title">Câu hỏi thường gặp</h3>
                    </div>
                    <form>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Câu hỏi </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    onChange={(e) => setQuestion(e.target.value)}

                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Câu trả lời</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                onChange={(e) => setAnswer(e.target.value)}

                                />
                            </div>
                            <div className="form-group">
                                <label>Thời gian</label>
                                <div className="input-group">
                                    <input id="startDate" className="form-control" type="date"
                                        onChange={(e) => setDateAnswer(e.target.value)} />
                                        <span style={{ color: "red" }}>{errors['dateAnswer']}</span>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer text-center">
                            <a type="button" className="btn btn-primary mr-2" href="/admin/questions" >
                                Trở về
                            </a>
                            <button type="button" className="btn btn-primary" onClick={createQuestion}>
                                Tạo mới
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )

}
