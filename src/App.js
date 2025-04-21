import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Sigin from './pages/Sigin';
import Health from './pages/Health';
import FoodList from './pages/Foodlist';
import Market from './pages/Market';
import Analysis from './pages/Analysis';
import Logout from './pages/Logout';
import Sigintest from './examples/Sigintest';
import Mypage from './pages/Mypage';


function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sigin" element={<Sigin />} />

        <Route path="/mypage" element={<Mypage />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/about" element={<About />} /> 
        <Route path="/target" element={<Health />} />
        <Route path="/foodlist" element={<FoodList />} />
        <Route path="/market" element={<Market />} />
        <Route path="/analysis" element={<Analysis/>} />
        
        <Route path="/sigintest" element={<Sigintest/>} />


      </Routes>
    </BrowserRouter>

  );
}

export default App;
