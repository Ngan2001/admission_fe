import React, { Component } from "react";
export default class AdmissionDetail extends Component {

    render() {
        return (
            <>
                <h1>Chi tiết tuyển sinh</h1>
                <div className="card card-widget">
                    <div className="card-body">
                        <p>
                            Far far away, behind the word mountains, far from the countries Vokalia
                            and Consonantia, there live the blind texts. Separated they live in
                            Bookmarksgrove right at
                        </p>
                        <p>
                            the coast of the Semantics, a large language ocean. A small river named
                            Duden flows by their place and supplies it with the necessary regelialia.
                            It is a paradisematic country, in which roasted parts of sentences fly
                            into your mouth.
                        </p>
                        <div className="attachment-block clearfix">
                            <img
                                className="attachment-img"
                                src="../admin-lte/dist/img/photo1.png"
                                alt="Attachment Image"
                            />
                            <div className="attachment-pushed">
                                <h4 className="attachment-heading">
                                    <a href="https://www.lipsum.com/">Lorem ipsum text generator</a>
                                </h4>
                                <div className="attachment-text">
                                    Description about the attachment can be placed here. Lorem Ipsum is
                                    simply dummy text of the printing and typesetting industry...{" "}
                                    <a href="#">more</a>
                                </div>
                            </div>
                        </div>
                        <span className="float-right text-muted">2 comments</span>
                    </div>
                    <div className="card-footer card-comments">
                        <div className="card-comment">
                            <img
                                className="img-circle img-sm"
                                src="../admin-lte/dist/img/user3-128x128.jpg"
                                alt="User Image"
                            />
                            <div className="comment-text">
                                <span className="username">
                                    Maria Gonzales
                                    <span className="text-muted float-right">8:03 PM Today</span>
                                </span>
                                It is a long established fact that a reader will be distracted by the
                                readable content of a page when looking at its layout.
                            </div>
                        </div>
                        <div className="card-comment">
                            <img
                                className="img-circle img-sm"
                                src="../admin-lte/dist/img/user5-128x128.jpg"
                                alt="User Image"
                            />
                            <div className="comment-text">
                                <span className="username">
                                    Nora Havisham
                                    <span className="text-muted float-right">8:03 PM Today</span>
                                </span>
                                The point of using Lorem Ipsum is that it hrs a morer-less normal
                                distribution of letters, as opposed to using 'Content here, content
                                here', making it look like readable English.
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                        <form action="#" method="post">
                            <img
                                className="img-fluid img-circle img-sm"
                                src="../admin-lte/dist/img/user4-128x128.jpg"
                                alt="Alt Text"
                            />
                            <div className="img-push">
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    placeholder="Nhấn Enter để gửi bình luận"
                                />
                                <button className="btn btn-outline-success" type="button" >
                                 Gửi
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </>
        );
    }
}