import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { constantConfig } from "../../constantConfig";
import API, { endpoints } from "../../API";
import axios from 'axios';


export default function Content() {
        const [types, setTypes] = useState([]);
        const [pageNum, setPageNum] = useState(1);
        const loadTypes = new Promise((resolve, reject) => {
            let url = pageNum === 1 ? endpoints["admissionType"] : `${endpoints["admissionType"]}?page=${pageNum}`;
            API.get(url).then(res => {
                resolve(res.data.results);
            });
          });

        const loadAdmissions = new Promise((resolve, reject) => {
            let url = pageNum === 1 ? endpoints["admission"] : `${endpoints["admission"]}?page=${pageNum}`;
            API.get(url).then(res => {
                resolve(res.data.results);
            });
        });

        const fetchData = () => {
            Promise.all([loadAdmissions, loadTypes]).then((values) => {
                let admissionsRes = values[0];
                let typesRes = values[1];
                let tempTypes = [];
                for(let i = 0; i < typesRes.length; i++) {
                    tempTypes.push(typesRes[i]);
                    let admissionsByType = admissionsRes.filter(item => item.admission_type == typesRes[i].id);
                    if(admissionsByType && admissionsByType.length > 0) {
                        tempTypes[i]['admissions'] = admissionsByType;
                    } else {
                        tempTypes[i]['admissions'] = [];
                    }
                }
                setTypes(tempTypes);
              });
        }

        useEffect(() => {
            fetchData();
        }, []);

        

        return (
            <>
                <h1 className="text-uppercase text-primary mt-3 mb-5">Thông tin tuyển sinh</h1>

                {types.map(t => 
                <>
                    <div key={t.id} className="text-uppercase text-primary mt-3 mb-2 fs-4">{t.type_name}
                    {/* &#x3E; cai nay la dau >  . trinh IDE ko doc duoc  */}
                        <Link className="float-end fs-6" to={'admission/' + t.id}>Xem tất cả &#x3E;&#x3E;</Link>
                    </div>
                    <ul className="list-group list-group-flush">
                    { t.admissions?.map(a => 
                        <li key={a.id} className="list-group-item d-flex flex-row align-items-center" style={{height: '60px', padding: '0'}}>
                            <div className="flex-shrink-1">
                                <img style={{height: '55px', width:'55px'}} src={a.thumbnail_image} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="">
                                <span>
                                    <Link className="btn-item auction-btn ml-4 mr-2" to={`/admission/${t.id}/detail/${a.id}`} style={{color: '#0D4DA1'}}>
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