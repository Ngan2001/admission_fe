import React, { useState, useEffect } from "react";
import API, { endpoints } from "../../../../API";
import $ from 'jquery';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'react-quill/dist/quill.snow.css';


export default function UpdateQuetions() {
    const nav = useNavigate();
    let { questionId } = useParams();
    const [question, setQuestion] = useState("");
    // const [user, setUser] = useState("");
    const [answer, setAnswer] = useState("");
    // const [dateAnswer, setDateAnswer] = useState("");
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
        // if (dateAnswer == null || dateAnswer == "") {
        //     errorsChk["dateAnswer"] = "Không được để trống";
        //     formIsValid = false;
        // }
        setErrors(errorsChk);
        return formIsValid;
    }
    const updateQuestion = async () => {
        setErrors({});
        if (!handleSubmit()) {
            return;
        }


        const data = {

            'question_content': question,
            'answer': answer,
            // 'date_answer': dateAnswer,


        };

        // dòng này là gọi API
        const response = await API.put(endpoints["frequentlyquestions"] + `${questionId}/`, data).then(res => {
            setCreateMessage('Cập nhập thành công!')
            handleModalShow();
            setTimeout(() => {
                handleModalClose();
                nav("/admin/questions")
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
        const loadQuestions = async () => {
            await API.get(endpoints[`frequentlyquestions`] + `${questionId}`).then(res => {
                const { question_content, answer  } = res.data;

                setQuestion(question_content);
                setAnswer(answer);
                // const parseDateAnswer = date_answer.toString().split("T");
                // setDateAnswer(parseDateAnswer[0]);
            })
        }
        loadQuestions();
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
                                    value={question}
                                    onChange={(e) => setQuestion(e.target.value)}

                                />
                                <span style={{ color: "red" }}>{errors['question']}</span>
                            </div>
                          
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Câu trả lời</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    value={answer}
                                    onChange={(e) => setAnswer(e.target.value)}
                                
                                />
                                <span style={{ color: "red" }}>{errors['answer']}</span>
                            </div>
                            {/* <div className="form-group">
                                <label>Thời gian</label>
                                <div className="input-group">
                                    <input id="dateAnswer" className="form-control" type="date"
                                        value={dateAnswer}
                                        onChange={(e) => setDateAnswer(e.target.value)} />
                                    <span style={{ color: "red" }}>{errors['dateAnswer']}</span>
                                </div>
                            </div> */}
                        </div>
                        <div className="card-footer text-center">
                            <a type="button" className="btn btn-primary mr-2" href="/admin/questions" >
                                Trở về
                            </a>
                            <button type="button" className="btn btn-primary" onClick={updateQuestion}>
                                Cập Nhập
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </>
    )

}
