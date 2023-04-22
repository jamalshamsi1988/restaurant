import {  Route, Routes } from 'react-router-dom';


import Header from './components/layout/Header';
import CarouselHeader from './components/carousels/CarouselHeader';
import Category from './components/Category';
import MenuHeader from './components/MenuHeader';
import AllMenu from './components/AllMenu';
import AboutUs from './components/layout/AboutUs';
import OnlineOrder from './components/layout/OnlineOrder';
import Gallery from './components/layout/Gallery';
import Footer from './components/shared/Footer';





function App() {

  return (
    <>
    <Header />
    <CarouselHeader />
    <Category/>
    <MenuHeader />
   <AllMenu />
  
  <Routes>
    <Route path="/aboutus/:id" element={<AboutUs />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/onlineorder" element={<OnlineOrder />} />
    {/* <Route path="/allmenu" element={ <AllMenu />} /> */}
  </Routes>
  <Footer />
    </>
  );
}

export default App;
