//import './App.css';
import react from 'react'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import NavBar from './NavBar';
import Dashboard from './Dashboard'
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Products from './Products';
import Description from './Description'



//import { Routes } from 'react-router-dom';



function App() {

  return (
    <div className="App">
<BrowserRouter>
<NavBar></NavBar>
<Routes>
  <Route path='/' element={<Dashboard></Dashboard>}></Route>
  <Route path='/AboutUs' element={<AboutUs></AboutUs>}></Route>
  <Route path='/ContactUs' element={<ContactUs></ContactUs>}></Route>
  <Route path='/Dashboard' element={<Dashboard></Dashboard>}></Route>
  <Route path='/Products' element={<Products></Products>}></Route>
  <Route path='/Description' element={<Description></Description>}></Route>
  
</Routes>

</BrowserRouter>
    </div>
  );
}

export default App;
