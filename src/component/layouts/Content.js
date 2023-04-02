import React, { useState, useEffect } from "react";
import DepartmentIndex from "../department/DepartmentIndex";
import RightSidebar from "./RightSidebar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";


import { useNavigate, useParams } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { constantConfig } from "../../constantConfig";
import API, { endpoints } from "../../API";
import { type } from "@testing-library/user-event/dist/type";



export default function Content() {
        const chatBoxCss = {
            bottom: '0',
            right: '0',
            marginBottom: '0'
        }

        const[a,setA] = useState("nhnhnhnhn");
        const handleModalClose = () => setA("abc");

        const [types, setTypes] = useState([]);
        const [admissions, setAdmissions] = useState([]);
        const [totalPages, setTotalPages] = useState([]);
        const [pageNum, setPageNum] = useState(1);
        const [show, setShow] = useState(false);
        const [refreshKey, setRefreshKey] = useState(0); //to refresh user list after delete the user
        
        const loadAdmissions = async () => {
            let url = pageNum === 1 ? endpoints["admission"] : `${endpoints["admission"]}?page=${pageNum}`;
            await API.get(url).then(res => {
                setAdmissions(res.data.results);
    
                var n_loop = Math.ceil(Number(res.data.count) / Number(constantConfig.PAGESIZE));
                const totalPagesTemp = [];
                for (var i = 1; i <= n_loop; i++) {
                    totalPagesTemp.push(i);
                }
                setTotalPages(totalPagesTemp);
            })
        }

        const loadTypes = async () => {
            let url = pageNum === 1 ? endpoints["admissionType"] : `${endpoints["admissionType"]}?page=${pageNum}`;
            await API.get(url).then(res => {
                setTypes(res.data.results);
    
                var n_loop = Math.ceil(Number(res.data.count) / Number(constantConfig.PAGESIZE));
                const totalPagesTemp = [];
                for (var i = 1; i <= n_loop; i++) {
                    totalPagesTemp.push(i);
                }
                setTotalPages(totalPagesTemp);
            })
        }

        const groupAdmission = () => {
            let tempTypes = types;
            for(let i = 0; i < types.length; i++) {
                let admissionsByType = admissions.filter(item => item.admission_type == types[i].id);
                if(admissionsByType && admissionsByType.length > 0) {
                    tempTypes[i]['admissions'] = admissionsByType;
                } else {
                    tempTypes[i]['admissions'] = [];
                }
            }
            setTypes(tempTypes);
        }

        useEffect(() => {
            async function fetchMyAPI() {
                await loadAdmissions();
                await loadTypes();
                groupAdmission();
            }

            fetchMyAPI();

            
        }, []);

        return (
            <>
                <h1 className="text-uppercase text-primary mt-3 mb-5">Thông tin tuyển sinh</h1>

                {types.map(t => 
                <>
                    <div key={t.id} className="text-uppercase text-primary mt-3 mb-2 fs-4">{t.type_name}
                    {/* &#x3E; cai nay la dau >  . trinh IDE ko doc duoc  */}
                        <Link className="float-end fs-6" to="admission">Xem tất cả &#x3E;&#x3E;</Link>
                    </div>
                    <ul className="list-group list-group-flush">
                    { t.admissions?.map(a => 
                        <li key={a.id} className="list-group-item d-flex flex-row align-items-center" style={{height: '60px', padding: '0'}}>
                            <div className="flex-shrink-1">
                                <img style={{height: '55px', width:'55px'}} src={a.thumbnail_image} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="">
                                <span>
                                    <Link className="btn-item auction-btn ml-4 mr-2" to={`detail/${a.id}`} style={{color: '#0D4DA1'}}>
                                        {a.title}
                                    </Link>
                                </span>
                            </div>
                        </li>
                    )}
                    </ul>
                </>
                )}
            </>
        )
}