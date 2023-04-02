import React, { useState, useEffect } from "react";
import API, { endpoints } from "../../../../API";
import $ from 'jquery';
import { useNavigate, useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function DetailAdmission() {
    let { admissionId } = useParams();

    const nav = useNavigate();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [thumbnailImage, setThumbnailImage] = useState("");
    const [admissionType, setAdmissionType] = useState("");
    const [types, setTypes] = useState([]);

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

    const loadTypes = async () => {
        await API.get(endpoints["admissionType"]).then(res => {
            setTypes(res.data.results);
        })
    }

    useEffect(() => {
        loadTypes();
    }, []);
    return (
        <div className="content-wrapper">
                <div className="card card-primary">
                    <div className="card-header">
                        <h3 className="card-title">Chi tiết tin tuyển sinh</h3>
                    </div>
                    <form>
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputFile">Anh</label>
                                <div className="input-group">
                                    <img id="blah" alt="your image" src={thumbnailImage} style={{ height: '100px', width: '100px', border: '1px solid black', marginRight: '15px' }} />
                                    <input type="file"  disabled/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Tiêu đề</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    value={title}
                                    disabled
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Nội dung</label>
                                <ReactQuill theme="snow" value={content} onChange={setContent} readOnly={true} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Loại tin</label>
                                <select  disabled
                                    value={admissionType}
                                    className="form-control" name="types" id="types">
                                    
                                    <option value="">{'Chọn loại tin'}</option>
                                    {types.map(t => 
                                        <option key={t.id} value={t.id}>{t.type_name}</option>
                                    )}
                                </select>
                            </div>
                        </div>
                        <div className="card-footer text-center">
                            <a type="button" className="btn btn-primary mr-2" href="/admin/admission" >
                                Trở về
                            </a>
                        </div>
                    </form>
                </div>
            </div>
    )

}
