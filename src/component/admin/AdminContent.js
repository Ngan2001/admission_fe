import React from "react";

class AdminContent extends React.Component {
    render() {
        return (
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Danh sách tài khoản</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Dashboard v1</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="content">
                    <div className="container-fluid">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Bordered Table</h3>

                                <button type="button" className="btn btn-primary btn-block" style={{width: '200px', float: 'right'}}>
                                <i class="fas fa-utensil-spoon"></i> Thêm mới
                                </button>

                            </div>
                            <div className="card-body">
                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th style={{ width: 10 }}>#</th>
                                            <th>Task</th>
                                            <th>Progress</th>
                                            <th style={{ width: 40 }}>Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1.</td>
                                            <td>Update software</td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div
                                                        className="progress-bar progress-bar-danger"
                                                        style={{ width: "55%" }}
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button" class="btn btn-default">
                                                    <i class="fas fa-pencil-alt"></i>
                                                </button>
                                                <button type="button" class="btn btn-default">
                                                    <i class="far fa-trash-alt"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>2.</td>
                                            <td>Clean database</td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div
                                                        className="progress-bar bg-warning"
                                                        style={{ width: "70%" }}
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                            <button type="button" class="btn btn-default">
                                                    <i class="fas fa-pencil-alt"></i>
                                                </button>
                                                <button type="button" class="btn btn-default">
                                                    <i class="far fa-trash-alt"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>3.</td>
                                            <td>Cron job running</td>
                                            <td>
                                                <div className="progress progress-xs progress-striped active">
                                                    <div
                                                        className="progress-bar bg-primary"
                                                        style={{ width: "30%" }}
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                            <button type="button" class="btn btn-default">
                                                    <i class="fas fa-pencil-alt"></i>
                                                </button>
                                                <button type="button" class="btn btn-default">
                                                    <i class="far fa-trash-alt"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>4.</td>
                                            <td>Fix and squish bugs</td>
                                            <td>
                                                <div className="progress progress-xs progress-striped active">
                                                    <div
                                                        className="progress-bar bg-success"
                                                        style={{ width: "90%" }}
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                            <button type="button" class="btn btn-default">
                                                    <i class="fas fa-pencil-alt"></i>
                                                </button>
                                                <button type="button" class="btn btn-default">
                                                    <i class="far fa-trash-alt"></i>
                                                </button>
                                            </td>
                                        </tr>
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


                    </div>
                </section>
            </div>
        )
    }
}
export default AdminContent;