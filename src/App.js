import logo from './logo.svg';
import './App.css';
import Header from './component/layouts/Header';
import Banner from './component/layouts/Banner';
import Content from './component/layouts/Content';
import AdminContent from './component/admin/AdminContent';
import AdminSidebar from './component/admin/AdminSidebar';
import AdminHeader from './component/admin/AdminHeader';
function App() {
  return (
    <div>
      
      <AdminHeader />
      <AdminContent/>
      <AdminSidebar/>


      {/* <Header />
       <Banner />
       <Content /> */}
    </div>
  );
}

export default App;
