import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from './Screens/HomeScreen/Home.jsx';
import Menu from './components/Menu';
import New from './Screens/New/New';
import Categories from './Screens/Categories/CategoryMenu';
import CreateAccount from './Screens/CreateAccount/CreateAccount';
import Cart from './Screens/Cart/Cart';
import MyBag from './Screens/mybag/MyBag';
import Brand from './Screens/Brand/Brand';
import Login from './Screens/Login/Login';
import SellerSignIn from './Screens/SellerSignIn/SellerSignIn';

import Fo from './components/Fo';
// import CategoryProduct from './Screens/Categories/CategoryProduct';
import CategoryProductDetails from './Screens/Categories/SingleProuctPage/CategoryProductDetails';
function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/categories" element={<Categories />} />
        <Route exact path="/brand" element={<Brand />} />
        <Route exact path="/new" element={<New />} />
        <Route exact path="/createaccount" element={<CreateAccount />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/bag" element={<MyBag />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/sellersignin" element={<SellerSignIn />} />
        <Route path='/product/:id' element={<CategoryProductDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Fo />
    </div>
  );
}

export default App;
