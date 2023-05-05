import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { constantConfig } from "../../constantConfig";
import API, { endpoints } from "../../API";

export default function LivestreamIndex() {
    const nav = useNavigate();
    const currentDate = new Date();
    const [livestreamNotifications, setLivestreamNotifications] = useState([]);
    const [totalPages, setTotalPages] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [refreshKey, setRefreshKey] = useState(0); //to refresh user list after delete the user

    const loadLivestreamNotifications = async () => {

        let url = pageNum === 1 ? endpoints["livestreamsnotification"] : `${endpoints["livestreamsnotification"]}?page=${pageNum}`;
        await API.get(url).then(res => {
            

            let results = [];
            res.data.results.forEach(child => {
                results.push({...child, isTimeExceed: compareLivestreamClosed(child.start_date)});
            })

            results.forEach(item => {
                let startDateFormatArr = new Date(item.start_date).toISOString().slice(0, 16).split("T"); // vd: 2023-05-05T10:16:56.458545Z > 2023-05-05T10:16
                item.start_date = startDateFormatArr[0] + ", Lúc " + startDateFormatArr[1];
            });
            setLivestreamNotifications(results);

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
            loadLivestreamNotifications();
        }
    }

    const addQuestion = (livestreamId) => {
        return () => {
            nav(`detail/${livestreamId}`);
        }
    }

    const compareLivestreamClosed = (startTime) => {
        let dateCompare = new Date(startTime).getUTCDate();
        let timeStream = new Date(startTime).getUTCHours();
        if(dateCompare < currentDate.getDate() || (dateCompare == currentDate.getDate() && timeStream  <= currentDate.getHours() + 1)) { // giả giử cho phép đặt câu hỏi trước phát live 1h
            return true;
        } else return false;
    }

    useEffect(() => {
        loadLivestreamNotifications();
    }, [refreshKey, pageNum]);

    useEffect(() => {
    }, [totalPages]);

    useEffect(() => {
    }, [pageNum]);

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">Bordered Table</h3>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th style={{ width: 10 }}>#</th>
                                <th>Tiêu đề</th>
                                <th>Nội dung</th>
                                <th>Thời gian livestream</th>
                                <th>Thời lượng livestream (phút)</th>
                                <th>Trạng thái</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {livestreamNotifications.map((lsn, index) =>
                                <tr key={lsn.id}>
                                    <td>{index + 1}</td>
                                    <td>{lsn.title}</td>
                                    <td>{lsn.content}</td>
                                    <td>{lsn.start_date}</td>
                                    <td>{lsn.time}</td>
                                    <td class={ lsn.isTimeExceed ? "color-red" : "color-green"}>
                                        { lsn.isTimeExceed ? "Đã đóng live" : "Sắp phát live"}
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-default mr-2" onClick={addQuestion(lsn.id)}>
                                            Đặt câu hỏi
                                        </button>
                                    </td>
                                </tr>
                            )
                            }

                        </tbody>
                    </table>
                </div>
                <div className="card-footer clearfix">
                    <ul className="pagination pagination-sm m-0 float-right">
                        <li className="page-item">
                            <a className="page-link" href="#">
                                «
                            </a>
                        </li>
                        {totalPages.map(page =>
                            <li className="page-item">
                                <Link className={"page-link " + (pageNum == page ? 'link-active' : '')} to={page == 1 ? `` : `/admin/livestreamnotification/?page=${page}`} onClick={onClickPage(page)}>
                                    {page}
                                </Link>
                            </li>
                        )
                        }

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