import { Route, Routes } from 'react-router-dom';
import './App.css';
import Mainpage from './Components/Mainpage';
import AllNavbars from './Components/Navbars/AllNavbars';
import Navbar1 from './Components/Navbars/Navbar1';
import AllSidebars from './Components/Sidebars/AllSidebars';
import Sidebar1 from './Components/Sidebars/Sidebar1';
import AllCards from './Components/Cards/AllCards';
import Card1 from './Components/Cards/Card1';
import Card2 from './Components/Cards/Card2';
import Parallaxpage1 from './Components/ParallaxPages/Parallaxpage1';
import AllParallaxpage from './Components/ParallaxPages/AllParallaxpage';
import Plx2 from './Components/ParallaxPages/Plx2';
function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='AllNavbars' element={<AllNavbars />} />
        <Route path='AllSidebars' element={<AllSidebars />} />
        <Route path='AllCards' element={<AllCards />} />
        <Route path='AllParallaxpage' element={<AllParallaxpage />} />
        <Route path='Navbar1' element={<Navbar1 />} />
        <Route path='Sidebar1' element={<Sidebar1 />} />
        <Route path='Card1' element={<Card1 />} />
        <Route path='Card2' element={<Card2 />} />
        <Route path='Parallaxpage1' element={<Parallaxpage1 />} />
        <Route path='Plx2' element={<Plx2 />} />

      </Routes>
    </>
  );
}

export default App;
