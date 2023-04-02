import React, { useState, useEffect } from "react";
import API, { endpoints } from "../../../../API";
import $ from 'jquery';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function UpdateType() {
    let { typeId } = useParams();

    const nav = useNavigate();
    const [admissionTypeName, setAdmissionTypeName] = useState("");
    const [admissionTypeDecription, setAdmissionTypeDecription] = useState("");

    const [errors, setErrors] = useState({});

    const [modalShow, setModalShow] = useState(false);
    const handleModalClose = () => setModalShow(false);
    const handleModalShow = () => setModalShow(true);
    const [createMessage, setCreateMessage] = useState("");

    const handleSubmit = () => {
        let errorsChk = {};
        let formIsValid = true;

        if (admissionTypeName == null || admissionTypeName == "") {
            errorsChk["admissionTypeName"] = "Không được để trống";
            formIsValid = false;
        }

        if (admissionTypeDecription == null || admissionTypeDecription == "") {
            errorsChk["admissionTypeDecription"] = "Không được để trống";
            formIsValid = false;
        }

        setErrors(errorsChk);
        return formIsValid;
    }

    const updateType = async () => {
        setErrors({});
        if (!handleSubmit()) {
            return;
        }

        const data = {
            'type_name': admissionTypeName,
            'decription': admissionTypeDecription
        };

        // dòng này là gọi API
        const response = await API.put(endpoints["admissionType"] + `${typeId}/`, data).then(res => {
            setCreateMessage('Cập nhật thành công!')
            handleModalShow();
            setTimeout(() => {
                handleModalClose();
                nav("/admin/admission-type")
            }, 2000);

        }).catch(e => {
            setCreateMessage('Cập nhật thất bại!')
            handleModalShow();
            setTimeout(() => {
                handleModalClose();
            }, 2000);
        });
        // end dòng này là gọi API
    }

    useEffect(() => {
        const loadTypes = async () => {
            await API.get(endpoints[`admissionType`] + `${typeId}`).then(res => {
                const {type_name, decription} = res.data;

                setAdmissionTypeName(type_name);
                setAdmissionTypeDecription(decription);
            })
        }
        loadTypes();
    }, []);

    return (
        <>
            <div className="content-wrapper">
                <div className="card card-primary">
                    <div className="card-header">
                        <h3 className="card-title">Tạo loại tuyển sinh</h3>
                    </div>
                    <form>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputFile">Tên loại tuyển sinh</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    value={admissionTypeName}
                                    onChange={(e) => setAdmissionTypeName(e.target.value)}
                                />
                                <span style={{ color: "red" }}>{errors['admissionTypeName']}</span>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Mô tả</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    value={admissionTypeDecription}
                                    onChange={(e) => setAdmissionTypeDecription(e.target.value)}
                                />
                                <span style={{ color: "red" }}>{errors['admissionTypeDescription']}</span>
                            </div>
                        </div>
                        <div className="card-footer">
                            <a type="button" className="btn btn-primary mr-2" href="/admin/admission-type">
                                Trở về
                            </a>
                            <button type="button" className="btn btn-primary" onClick={updateType}>
                                Cập nhật
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
