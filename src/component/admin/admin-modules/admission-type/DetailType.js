import React, { useState, useEffect } from "react";
import API, { endpoints } from "../../../../API";
import $ from 'jquery';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function DetailType() {
    let { typeId } = useParams();

    const nav = useNavigate();
    const [admissionTypeName, setAdmissionTypeName] = useState("");
    const [admissionTypeDescription, setAdmissionTypeDescription] = useState("");

    useEffect(() => {
        const loadTypes = async () => {
            await API.get(endpoints[`admissionType`] + `${typeId}`).then(res => {
                const {type_name, decription} = res.data;

                setAdmissionTypeName(type_name);
                setAdmissionTypeDescription(decription);
            })
        }
        loadTypes()
    }, []);

    return (
        <>
            <div className="content-wrapper">
                <div className="card card-primary">
                    <div className="card-header">
                        <h3 className="card-title">Chi tiết loại tuyển sinh</h3>
                    </div>
                    <form>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputFile">Tên loại tuyển sinh</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    disabled
                                    value={admissionTypeName}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Mô tả</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    disabled
                                    value={admissionTypeDescription}
                                />
                            </div>
                        </div>
                        <div className="card-footer">
                            <a type="button" className="btn btn-primary" href="/admin/admission-type">
                                Trở về
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}
