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

    let url = pageNum === 1 ? endpoints["admissionsquestion"] : `${endpoints["admissionsquestion"]}?page=${pageNum}`;
    await API.get(url).then(res => {
      // console.log(res);
      console.log(res.data.results);

      res.data.results.forEach(item => {
        item.date_answer = item.date_answer.toString().split("T")[0];
      })
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
  questions.map(item => 
    <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {item.question}
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {item.answer}
                  {/* <strong>This is the first item's accordion body.</strong> It is shown by
                  default, until the collapse plugin adds the appropriate classes that we
                  use to style each element. These classes control the overall appearance,
                  as well as the showing and hiding via CSS transitions. You can modify
                  any of this with custom CSS or overriding our default variables. It's
                  also worth noting that just about any HTML can go within the{" "}
                  <code>.accordion-body</code>, though the transition does limit overflow. */}
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