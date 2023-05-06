import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { constantConfig } from "../../constantConfig";
import API, { endpoints } from "../../API";
export default function FAQIndex() {
  const [questions, setQuestions] = useState([]);
  const [dateAnswer, setDateAnswer] = useState([]);
  const [totalPages, setTotalPages] = useState([]);
  const [pageNum, setPageNum] = useState(1);


  const loadQuestions = async () => {

    let url = pageNum === 1 ? endpoints["frequentlyquestions"] : `${endpoints["frequentlyquestions"]}?page=${pageNum}`;
    await API.get(url).then(res => {

      setQuestions(res.data.results);

      var n_loop = Math.ceil(Number(res.data.count) / Number(constantConfig.PAGESIZE));
      const totalPagesTemp = [];
      for (var i = 1; i <= n_loop; i++) {
        totalPagesTemp.push(i);
      }
      setTotalPages(totalPagesTemp);
    })
  }
  useEffect(() => {
    loadQuestions();
}, []);
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title text-uppercase text-primary">Các câu hỏi thường gặp

          </h3>
          <Link className="btn btn-outline-success float-end fs-6" to="question">Đặt câu hỏi</Link>
        </div>
        <div className="card-body">
          <div className="accordion" id="accordionExample">
{
  questions.map((item,index) => 
    <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={'#collapse' + index}
                  aria-expanded="true"
                  aria-controls={'collapse' + index}
                >
                  {index + 1} {'. '} {item.question_content}
                </button>
              </h2>
              <div
                id={'collapse' + index}
                className={"accordion-collapse collapse "}
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                 {item.answer}
                </div>
              </div>
            </div>
  )
}
          </div>

        </div>
      </div>
      <Outlet />
    </>
  );
}