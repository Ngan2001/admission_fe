import React, { useState, useEffect } from "react";

import Modal from 'react-bootstrap/Modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { constantConfig } from "../../constantConfig";
import API, { endpoints } from "../../API";
import { Link, Outlet } from 'react-router-dom';
export default function UniversityIndex() {
  const [school, setSchool] = useState([]);
  const [totalPages, setTotalPages] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  const loadSchool = async () => {

    let url = pageNum === 1 ? endpoints["school"] : `${endpoints["school"]}?page=${pageNum}`;
    await API.get(url).then(res => {
      setSchool(res.data.results);

      var n_loop = Math.ceil(Number(res.data.count) / Number(constantConfig.PAGESIZE));
      const totalPagesTemp = [];
      for (var i = 1; i <= n_loop; i++) {
        totalPagesTemp.push(i);
      }
      setTotalPages(totalPagesTemp);
    })
  }
  useEffect(() => {
    loadSchool();
  }, []);
  return (
    <>
      <div className="row">
        <h1 className="text-uppercase text-primary mt-3 mb-2">Thông tin về trường</h1>
      </div>

      <div className="row">
        {
          school.map(item =>
            <div className="col-12 card" style={{ width: "18rem" }}>
              <div className="card-body">
                <p className="card-text" >
                  <h1>{item.title}</h1>
                  {/* <h1 className="btn btn-outline-success" to="detail" >{item.content}</h1> */}
                  <div dangerouslySetInnerHTML={{ __html: item.content }} />;

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