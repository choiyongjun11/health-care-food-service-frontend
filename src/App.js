import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Sigin from './pages/Sigin';
import Health from './pages/Health';
import Foods from './pages/Foods';
import Market from './pages/Market';
import Analysis from './pages/Analysis';
import SimpleLogin from './examples/Simplelogin';

function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sigin" element={<Sigin />} /> 
        <Route path="/target" element={<Health />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/market" element={<Market />} />
        <Route path="/analysis" element={<Analysis/>} />
        <Route path="/simplelogin" element={<SimpleLogin/>} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
