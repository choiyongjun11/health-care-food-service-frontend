import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/about/Home';
import About from './pages/about/About';
import Login from './pages/auth/Login';
import Sigin from './pages/auth/Sigin';
import Health from './pages/people/Health';

import Market from './pages/market/Market';
import Analysis from './pages/people/Analysis';
import Logout from './pages/auth/Logout';
import Mypage from './pages/people/Mypage';

import FoodPage from './pages/foods/page';
import FoodDetailPage from './pages/foods/fooddetailpage';

import FoodDetailInfo from './components/Fooddetailinfo';


function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sigin" element={<Sigin />} />

        <Route path="/members/:id" element={<Mypage />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/about" element={<About />} /> 
        <Route path="/target" element={<Health />} />

        <Route path="/foods" element={<FoodPage />} />
        <Route path="/foods/:id" element={<FoodDetailPage />} />
        <Route path="/market" element={<Market />} />
        <Route path="/analysis" element={<Analysis/>} />
        <Route path="/test" element= {<FoodDetailInfo/>} />


      </Routes>
    </BrowserRouter>

  );
}

export default App;
