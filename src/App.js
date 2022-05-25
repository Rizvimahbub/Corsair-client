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


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/tools' element={<Tools/>}></Route>
        <Route path='/tool/:id' element={<ToolInfo/>}></Route>
        <Route path='/business' element={<BusinessSummary/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/ique' element={<Ique/>}></Route>
        <Route path='/reviews' element={<Reviews/>}></Route>
        <Route path='/video' element={<VideoSection/>}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
