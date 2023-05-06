import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { constantConfig } from "../../constantConfig";
import API, { endpoints } from "../../API";
import { Link, Outlet } from 'react-router-dom';


export default function BannerIndex() {
    const[banners, setBanners] = useState([]);
    const [totalPages, setTotalPages] = useState([]);
    const [pageNum, setPageNum] = useState(1);

    const loadBanner = async () => {

        let url = pageNum === 1 ? endpoints["banner"] : `${endpoints["banner"]}?page=${pageNum}`;
        await API.get(url).then(res => {
          setBanners(res.data.results);
    
          var n_loop = Math.ceil(Number(res.data.count) / Number(constantConfig.PAGESIZE));
          const totalPagesTemp = [];
          for (var i = 1; i <= n_loop; i++) {
            totalPagesTemp.push(i);
          }
          setTotalPages(totalPagesTemp);
        })
      }
      useEffect(() => {
        loadBanner();
    }, []);

        return (
           
                <div
                id="carouselExampleInterval"
                className="carousel slide"
                data-bs-ride="carousel"
            >
 
                <div className="carousel-inner" style={{height:'475px'}}>
                {(banners && banners.length > 0) && banners.map(item => 
                <div className="carousel-item active" data-bs-interval={8000}>
                        <img  style={{height:'475px'}} src={item.image_url} className="d-block w-100" alt="..." />
                </div>)
                }
                {(!banners || banners.length ==0 ) && (
                    <div className="carousel-item active" data-bs-interval={8000}>
                        <img  style={{height:'475px'}} src="../../../assets/images/800px-Default_Banner.jpg" className="d-block w-100" alt="..." />
                </div>
                )} 
                    
                
                    {/* <div className="carousel-item" data-bs-interval={2000}>
                        <img  style={{height:'475px'}} src={item.logo} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img  style={{height:'475px'}} src={item.logo} className="d-block w-100" alt="..." />
                    </div> */}
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