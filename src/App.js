import {  Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import AboutUs from './components/layout/aboutUs/AboutUs';
import OnlineOrder from './components/layout/OnlineOrder';
import Gallery from './components/layout/Gallery';
import HomePage from './components/shared/HomePage';
import SoupCard from './components/appetizer/SoupCard';
import SaladCard from './components/appetizer/SaladCard';






function App() {

  return (
   

  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/AboutUs" element={<AboutUs />} />
    <Route path="/Gallery" element={<Gallery />} />
    <Route path="/OnlineOrder" element={<OnlineOrder />} />
    <Route path="/appetizers/:slug" element={ <SoupCard />} />
    <Route path="/appetizers/:slug" element={ <SaladCard/>} />
  </Routes>

  );
}

export default App;
