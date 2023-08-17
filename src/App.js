import './App.css';
import Navbar from'./Components/Navbar/Navbar'
import Home from'./Components/Home/Home';
import Products from './Components/Products/products';
import Aboutus from './Components/About-Us/AboutUs';
import Footer from './Components/Footer/Footer'


import {BrowserRouter as Router , Route , Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
   <div>

<Navbar/>


   <div className='Pages'>

   <Routes>
   
         <Route exact path='/' element={<Home/>}></Route>
         <Route path='/Products' element={<Products/>}></Route>
         <Route exact path='/About' element={<Aboutus/>}></Route>

   </Routes>

   
   
   </div>

    
   

   </div>
   </Router>
  );
}

export default App;
