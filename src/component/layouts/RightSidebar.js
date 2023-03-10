import React, { Component } from "react";
export default class RightSidebar extends Component {

    render() {
        return (
            <>
                <div className="card" style={{ width: "100%" }}>
                    <iframe width="100%" height="170px" src="https://www.youtube.com/embed/Us1okcXiHpA" title="Giới thiệu Trường ĐH Mở TP. Hồ Chí Minh" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div className="card mb-3" style={{ width: "100%" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="assets/images/question.jpg" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                            
                                <h5 className="card-title"><a href="faq">Câu hỏi thường gặp</a></h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card mb-3" style={{ width: "100%" }}>
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


                <div className="card" style={{ width: "100%" }}>
                    <img src="assets/images/khoa.jpg" className="card-img-top" alt="Khoa" />
                    <div className="card-body">
                        <p className="card-text">
                            <a href="department">Các khoa/ nghành</a>
                        </p>
                    </div>
                </div>

                <div className="card" style={{ width: "100%" }}>
                    <img src="assets/images/livestream.jpg" className="card-img-top" alt="livestream" />
                    <div className="card-body">
                        <p className="card-text">
                            <a href="livestream">Lịch livestream</a>
                        </p>
                    </div>
                </div>
            </>
        );
    }
}