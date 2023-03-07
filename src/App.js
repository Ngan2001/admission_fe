import logo from './logo.svg';
import './App.css';
import Header from './component/layouts/Header';
import Banner from './component/layouts/Banner';
import Content from './component/layouts/Content';
import AdminContent from './component/admin/AdminContent';
import AdminSidebar from './component/admin/AdminSidebar';
import AdminHeader from './component/admin/AdminHeader';
import {BrowserRouter} from 'react-router-dom';
import {Routes,Route} from 'react-router';
import AdmissionIndex from './component/admin/admin-modules/admissions/AdmissionIndex'
import AdmissionCreate from './component/admin/admin-modules/admissions/AdmissionCreate'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/user" element={<AdmissionIndex />}>
            <Route path="user-create" element={<AdmissionCreate />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <AdminHeader />
      <AdminContent />
      <AdminSidebar />


      {/* <Header />
       <Banner />
       <Content /> */}
    </div>
  );
}

export default App;
