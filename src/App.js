import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Tools from './Pages/Home/Tools/Tools';
import ToolInfo from './Pages/Home/ToolInfo/ToolInfo';
import BusinessSummary from './Pages/Home/BusinessSummary/BusinessSummary';
import Login from './Pages/Shared/Login/Login';
import Registration from './Pages/Shared/Registration/Registration';
import Ique from './Pages/Home/Ique/Ique';
import Reviews from './Pages/Home/Reviews/Reviews';
import VideoSection from './Pages/Home/VideoSection/VideoSection';
import Footer from './Pages/Footer/Footer';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Users from './Pages/Dashboard/Users';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders';
import AddProduct from './Pages/Dashboard/AddProduct';
import PasswordReset from './Pages/Shared/PasswordResetPage/PasswordReset';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import AdminMakingPage from './Pages/Dashboard/AdminMakingPage';
import Payment from './Pages/Dashboard/Payment';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyOrders />}></Route>
          <Route path='addReview' element={<AddReview />}></Route>
          <Route path='users' element={<Users/>}></Route>
          <Route path='myProfile' element={<MyProfile />}></Route>
          <Route path='manageOrders' element={<ManageAllOrders />}></Route>
          <Route path='addProduct' element={<AddProduct />}></Route>
          <Route path='admin' element={<MakeAdmin />}></Route>
          <Route path='payment/:id' element={<Payment />}></Route>
          <Route path='adminmakingPage' element={<AdminMakingPage />}></Route>
        </Route>
        <Route path='/tools' element={<Tools />}></Route>    
        <Route path='/tool/:id' element={
          <RequireAuth>
            <ToolInfo />
          </RequireAuth>
        }></Route>
        <Route path='/business' element={<BusinessSummary />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/passwordReset' element={<PasswordReset />}></Route>
        <Route path='/ique' element={<Ique />}></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/video' element={<VideoSection />}></Route>
        <Route path='/footer' element={<Footer />}></Route>
        <Route path='/registration' element={<Registration />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
