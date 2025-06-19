import './App.css';
import { AboutUs } from './Components/AboutUs';
import { Home } from './Components/Home';
import { Nav } from './Components/Nav';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Products } from './Components/Products';
import { Services } from './Components/Services';
import { ContactUs } from "./Components/ContactUs";
import { Projects } from './Components/Projects';
import { Footer } from './Components/Footer';
import InfoPopUp from './Components/InfoPopUp';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <InfoPopUp/>


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
        </Routes>

        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
