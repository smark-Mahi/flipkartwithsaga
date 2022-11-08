
import Makeupcards from './Components/Makeupcards';
import {BrowserRouter as Router, Routes,Route,} from 'react-router-dom'
import Addtocart from './Components/Addtocart';
import Products from './Components/Products';
import Productsdetails from './Components/Productsdetails';
import Navbar from './Components/Navbar';
import Protected from './Components/Protected';
import Login from './Components/Login';

function App() {
  return (
    <div >
    <Router>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Protected Component={Makeupcards}/>}/>
    <Route path='/addtocart' element={<Addtocart/>}/>
    <Route path='products' element={<Products/>}/>
    <Route path='products/:id' element={<Productsdetails/>}/>
    <Route path='login' element={<Login/>}/>
    </Routes>
  </Router>

    </div>
  );
}

export default App;
