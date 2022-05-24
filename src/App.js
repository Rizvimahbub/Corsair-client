import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Tools from './Pages/Home/Tools/Tools';
import ToolInfo from './Pages/Home/ToolInfo/ToolInfo';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/tools' element={<Tools/>}></Route>
        <Route path='/tool/:id' element={<ToolInfo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
