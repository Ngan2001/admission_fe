import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { constantConfig } from "../../constantConfig";
import API, { endpoints } from "../../API";
import { Link, Outlet } from 'react-router-dom';
export default function DepartmentDetail() {
    let { departmentId } = useParams();
    // const [departments, setDepartments] = useState(null);
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [totalPages, setTotalPages] = useState([]);
    const [pageNum, setPageNum] = useState(1);

    const loadDepartment = async () => {
        await API.get(endpoints[`department`] + `${departmentId}`).then(res => {
            const {image, name, content, video_url, website} = res.data;

            setName(name);
            setContent(content);
        })
    }
    useEffect(() => {
        loadDepartment();
    }, []);
    return (
        <>
            <div className="row">
                <h1 className="text-uppercase text-primary mt-3 mb-2">{name}</h1>
                <div dangerouslySetInnerHTML={{ __html:content }} />;

            </div>

            <div className="row">
             <h1></h1>

                {/* <div className="col-6 card" style={{ width: "18rem" }}>
                    <img src="assets/images/khoa-ngoai-ngu.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">
                            <Link className="btn btn-outline-success" to="detail"> Khoa ngoại ngữ</Link>
                        </p>
                    </div>
                </div>


                <div className="col-6 card" style={{ width: "18rem" }}>
                    <img src="assets/images/khoa-ke-toan.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">
                            <Link className="btn btn-outline-success" to="detail">Khoa kế toán kiểm toán</Link>
                        </p>
                    </div>
                </div> */}
                <Outlet />
            </div>
        </>

    );

}