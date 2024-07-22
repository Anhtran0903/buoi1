

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Hook1 from './component/hook/Hook1';
import Product from './component/hook/Product';
import Products from './component/hook/Products';
import Nav from './component/hook/tab/Nav';
import Main from './component/main/Main';

function App() {
  return (
   <>

   <Header/>
      <Nav />
    <Products/>
   
   </>
  );
}

export default App;
