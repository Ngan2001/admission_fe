import React, { Component } from "react";
export default class Content extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-8">
                        <div className="accordion" id="accordionExample">
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
                                        Hệ chính quy
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="headingOne"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <ul class="list-group list-group-horizontal-xxl">
                                            <li class="list-group-item"><a href="#">Thông tin các loại tài khoản Văn bằng 2, Liên thông CĐ-ĐH, Khóa 2021</a></li>
                                            <li class="list-group-item"><a href="#">Thủ tục nhập học Tân sinh viên Văn bằng 2 - Liên thông Khóa 2021</a></li>
                                            <li class="list-group-item"><a href="#">Kết quả tuyển sinh ĐH Văn bằng 2, Liên thông CĐ-ĐH năm 2021</a></li>
                                            <li class="list-group-item text-center"><a href="#">Xem tất cả</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        Hệ liên thông
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwo"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingTwo"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <strong>This is the second item's accordion body.</strong> It is hidden
                                        by default, until the collapse plugin adds the appropriate classes that
                                        we use to style each element. These classes control the overall
                                        appearance, as well as the showing and hiding via CSS transitions. You
                                        can modify any of this with custom CSS or overriding our default
                                        variables. It's also worth noting that just about any HTML can go within
                                        the <code>.accordion-body</code>, though the transition does limit
                                        overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        Cao học
                                    </button>
                                </h2>
                                <div
                                    id="collapseThree"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="headingThree"
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden
                                        by default, until the collapse plugin adds the appropriate classes that
                                        we use to style each element. These classes control the overall
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card" style={{ width: "18rem" }}>
                            <iframe width="288" height="140" src="https://www.youtube.com/embed/Us1okcXiHpA" title="Giới thiệu Trường ĐH Mở TP. Hồ Chí Minh" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> </div>

                        <div className="card mb-3" style={{ width: "18rem" }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="assets/images/question.jpg" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Câu hỏi thường gặp</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card mb-3" style={{ width: "18rem" }}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="assets/images/school-logo.png" className="img-fluid rounded-start" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Tổng quan về OU</h5>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="card" style={{ width: "18rem" }}>
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                            </div>
                        </div>

                        <div className="card" style={{ width: "18rem" }}>
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

            </>




        )
    }
}