import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import API, { endpoints } from "../../API";
import { constantConfig } from "../../constantConfig";

export default function AdmissionIndex() {
    const nav = useNavigate();
    let { admissionType } = useParams();

    const [admissions, setAdmissions] = useState([]);
    const [totalPages, setTotalPages] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const loadAdmissions = async () => {
        let url = pageNum === 1 ? endpoints["admission"] : `${endpoints["admission"]}?page=${pageNum}`;
        await API.get(url).then(res => {
            let admissionsRes = [];
            if(res.data && res.data.results.length > 0) {
                admissionsRes = res.data.results;
                admissionsRes = admissionsRes.filter(item => item.admission_type == admissionType);
            }
            setAdmissions(admissionsRes);

            var n_loop = Math.ceil(Number(res.data.count) / Number(constantConfig.PAGESIZE));
            const totalPagesTemp = [];
            for (var i = 1; i <= n_loop; i++) {
                totalPagesTemp.push(i);
            }
            setTotalPages(totalPagesTemp);
        })
    }

    const onClickPage = (page) => {
        return () => {
            setPageNum(page);
            loadAdmissions();
        }
    }

    useEffect(() => {
        loadAdmissions();
    }, [pageNum]);

    useEffect(() => {
    }, [totalPages]);

    return (
        <>
        <h1>Danh sách tin tuyển sinh</h1>
        <div className="card">
            <div className="card-header">
                <a href="/" type="button" className="" style={{ width: '150px'}}>
                   Trở về
                </a>
            </div>
            <div className="card-body">
                <ul className="list-group list-group-flush">
                    { admissions?.map(a => 
                        <li key={a.id} className="list-group-item d-flex flex-row align-items-center" style={{height: '60px', padding: '0'}}>
                            <div className="flex-shrink-1">
                                <img style={{height: '55px', width:'55px'}} src={a.thumbnail_image} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="">
                                <span>
                                    <Link className="btn-item auction-btn ml-4 mr-2" to={`detail/${a.id}`} style={{color: '#0D4DA1'}}>
                                        {a.title}
                                    </Link>
                                </span>
                            </div>
                        </li>
                    )}
                    </ul>
                {/* <table className="table table-bordered">
                    <tbody>
                    {admissions.map((u, index) =>
                            <tr key={u.id}>
                                <td>
                                <img id="blah" alt="your image" src={u.thumbnail_image} style={{ height: '60px', width: '60px', border: '1px solid black' }} />
                                    <Link className="btn-item auction-btn mr-2" to={`detail/${u.id}`}>
                                        {u.title}
                                    </Link>
                                </td>
                            </tr>
                        )
                        }
                    </tbody>
                </table> */}
            </div>
            <div className="card-footer clearfix">
                <ul className="pagination pagination-sm m-0 float-right">
                    <li className="page-item">
                        <a className="page-link" href="#">
                            «
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            1
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            2
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            3
                        </a>
                    </li>
                    <li className="page-item">
                        <a className="page-link" href="#">
                            »
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <Outlet />
        </>
    );
    
}