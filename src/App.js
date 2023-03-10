import logo from './logo.svg';
import './App.css';
import Header from './component/layouts/Header';
import Banner from './component/layouts/Banner';
import Content from './component/layouts/Content';
import AdminContent from './component/admin/AdminContent';
import AdminSidebar from './component/admin/AdminSidebar';
import AdminHeader from './component/admin/AdminHeader';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import AdmissionIndex from './component/admin/admin-modules/admissions/AdmissionIndex'
import AdmissionCreate from './component/admin/admin-modules/admissions/AdmissionCreate'
import Footer from './component/layouts/Footer';
import Login from './component/layouts/Login';
import Register from './component/layouts/Register';
import DepartmentIndex from './component/department/DepartmentIndex';
import { Outlet } from "react-router-dom";
import RightSidebar from './component/layouts/RightSidebar';


function App() {
  const chatBoxCss = {
    bottom: '0',
    right: '0',
    marginBottom: '0'
}
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/user" element={<AdmissionIndex />}>
            <Route path="user-create" element={<AdmissionCreate />} />
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter> */}

      {/* <AdminHeader />
      <AdminContent />
      <AdminSidebar /> */}


      <Header />
      <Banner />

      <div className="">
                    <div className="content-header">
                        <div className="row">
                            <div className="col-8">
                            <Outlet />
                               
                            </div>
                            <div className="col-4" style={{paddingLeft: '50px'}}>
                                <RightSidebar />
                            </div>
                        </div>
                    </div>


                    <div style={chatBoxCss} className="card card-primary card-outline direct-chat direct-chat-primary shadow-none collapsed-card back-to-top">
                        <div className="card-header">
                            <h3 className="card-title">Hỗ trợ sinh viên</h3>
                            <div className="card-tools">
                                <span title="3 New Messages" className="badge bg-danger">
                                    1
                                </span>
                                <button
                                    type="button"
                                    className="btn btn-tool"
                                    data-card-widget="collapse"
                                >
                                    <i className="fas fa-plus" />
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-tool"
                                    title="Contacts"
                                    data-widget="chat-pane-toggle"
                                >
                                    <i className="fas fa-comments" />
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove">
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                        </div>
                        <div className="card-body" style={{ display: "none" }}>
                            <div className="direct-chat-messages">
                                <div className="direct-chat-msg">
                                    <div className="direct-chat-infos clearfix">
                                        <span className="direct-chat-name float-left">Ban tư vấn</span>
                                        <span className="direct-chat-timestamp float-right">
                                            23 Jan 2:00 pm
                                        </span>
                                    </div>
                                    <img
                                        className="direct-chat-img"
                                        src="admin-lte/dist/img/user1-128x128.jpg"
                                        alt="Message User Image"
                                    />
                                    <div className="direct-chat-text">
                                        Mình là ban tư vấn, bạn có thắc mắc gì không ạ?
                                    </div>
                                </div>
                                <div className="direct-chat-msg right">
                                    <div className="direct-chat-infos clearfix">
                                        <span className="direct-chat-name float-right">Thí sinh</span>
                                        <span className="direct-chat-timestamp float-left">
                                            23 Jan 2:05 pm
                                        </span>
                                    </div>
                                    <img
                                        className="direct-chat-img"
                                        src="admin-lte/dist/img/user1-128x128.jpg"
                                        alt="Message User Image"
                                    />
                                    <div className="direct-chat-text">Xin chào</div>
                                </div>
                            </div>
                            <div className="direct-chat-contacts">
                                <ul className="contacts-list">
                                    <li>
                                        <a href="#">
                                            <img
                                                className="contacts-list-img"
                                                src="../dist/img/user1-128x128.jpg"
                                                alt="User Avatar"
                                            />
                                            <div className="contacts-list-info">
                                                <span className="contacts-list-name">
                                                    Count Dracula
                                                    <small className="contacts-list-date float-right">
                                                        2/28/2015
                                                    </small>
                                                </span>
                                                <span className="contacts-list-msg">
                                                    How have you been? I was...
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-footer" style={{ display: "none" }}>
                            <form action="#" method="post">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        name="message"
                                        placeholder="Nhập ..."
                                        className="form-control"
                                    />
                                    <span className="input-group-append">
                                        <button type="submit" className="btn btn-primary">
                                            Gửi
                                        </button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>


                </div>

       
      

      <Footer />
    </div>
  );
}

export default App;
