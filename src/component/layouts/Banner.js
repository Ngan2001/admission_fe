import React, { Component } from "react";
export default class Banner extends Component {
    render() {
        return (
            <div
                id="carouselExampleInterval"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner" style={{height:'250px'}}>
                    <div className="carousel-item active" data-bs-interval={10000}>
                        <img  style={{height:'250px'}} src="assets/images/dore-banner1.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval={2000}>
                        <img  style={{height:'250px'}} src="assets/images/dore-banner2.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img  style={{height:'250px'}} src="assets/images/dore-banner1.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        )
    }
}