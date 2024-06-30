import { Route, Routes } from 'react-router-dom';
import './App.css';
import Mainpage from './Components/Mainpage';
import AllNavbars from './Components/Navbars/AllNavbars';
import Navbar1 from './Components/Navbars/Navbar1';
import AllSidebars from './Components/Sidebars/AllSidebars';
import Sidebar1 from './Components/Sidebars/Sidebar1';
import AllCards from './Components/Cards/AllCards';
import Card1 from './Components/Cards/Card1';
function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='AllNavbars' element={<AllNavbars />} />
        <Route path='AllSidebars' element={<AllSidebars />} />
        <Route path='AllCards' element={<AllCards />} />
        <Route path='Navbar1' element={<Navbar1 />} />
        <Route path='Sidebar1' element={<Sidebar1 />} />
        <Route path='Card1' element={<Card1 />} />
      </Routes>
    </>
  );
}

export default App;
