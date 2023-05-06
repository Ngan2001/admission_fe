import React, { useState, useEffect } from "react";

import Modal from 'react-bootstrap/Modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { constantConfig } from "../../constantConfig";
import API, { endpoints } from "../../API";
import { Link, Outlet } from 'react-router-dom';
export default function DepartmentIndex () {
    const [departments, setDepartments] = useState([]);
    const [totalPages, setTotalPages] = useState([]);
    const [pageNum, setPageNum] = useState(1);

    const loadDepartment = async () => {

        let url = pageNum === 1 ? endpoints["department"] : `${endpoints["department"]}?page=${pageNum}`;
        await API.get(url).then(res => {
    
          setDepartments(res.data.results);
    
          var n_loop = Math.ceil(Number(res.data.count) / Number(constantConfig.PAGESIZE));
          const totalPagesTemp = [];
          for (var i = 1; i <= n_loop; i++) {
            totalPagesTemp.push(i);
          }
          setTotalPages(totalPagesTemp);
        })
      }
      useEffect(() => {
        loadDepartment();
    }, []);
        return (
            <>
            <div className="row">
                <h1 className="text-uppercase text-primary mt-3 mb-2">Danh sách khoa</h1>
            </div>
            
            <div className="row">
                {
                    departments.map(item => 
                        <div className="col-6 card" style={{ width: "18rem" }}>
                            <img src={item.image} className="card-img-top" alt="..." style={{ width: "490px", height:"300px" }}/>
                            <div className="card-body">
                                <p className="card-text" style={{textAlign:"center"}}>
                                    <Link className="btn btn-outline-success" to={'detail/' + item.id} >{item.name}</Link>
                                </p>
                            </div>
                        
                        </div>
        
                        )
        
                }
                
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