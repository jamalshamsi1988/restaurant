import {  Route, Routes } from 'react-router-dom';

import AboutUs from './components/layout/aboutUs/AboutUs';
import OnlineOrder from './components/layout/OnlineOrder';
import Gallery from './components/layout/Gallery';
import HomePage from './components/shared/HomePage';





function App() {

  return (
   
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/AboutUs" element={<AboutUs />} />
    <Route path="/Gallery" element={<Gallery />} />
    <Route path="/OnlineOrder" element={<OnlineOrder />} />
   
  </Routes>

    
  );
}

export default App;
