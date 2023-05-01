import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Slider from './component/Slider/Slider';
import Home from './component/Home/Home';
import Service from './component/Service/Service';
import Foot from './component/Foot/Foot';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Product from './component/Product/Product';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/service' element={<Service/>}/>
      <Route path='/contact' element={<Contact/>}/>
      {/* <Route path='/review' element={<Review/>}/> */}

    </Routes>
    <Foot/>
    </>
  );
}

export default App;
