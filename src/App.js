
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product';
import Urun from './components/Urun';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';
import Logın from './components/Logın';
import {Routes ,Route} from "react-router-dom"
import LOGın from './components/Logın';
import SignUp from './components/SignUp';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}> </Route>
      <Route exact path='/products' element={<Product/>}> </Route>
      <Route exact path='/products/:id' element={<Urun/>}> </Route>
      <Route exact path='/cart' element={<Cart/>}> </Route>
      <Route exact path='/about'  element={<About/>}> </Route>
      <Route exact path="/contact" element={<Contact/>}></Route>
      <Route exact path="/login" element={<LOGın/>}></Route>
      <Route exact path="/signup" element={<SignUp/>}></Route>
   
     
      
    </Routes>
    </>
  
  );
}

export default App;
