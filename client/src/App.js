
import { useState } from 'react';
import './App.css';
import LogIn from './Components/users/login';
import FooterR from './Components/widgets/footer';
import CustomNavbar from './Components/widgets/NavBar';
import { Routes, Route } from 'react-router-dom'
import SignUp from './Components/users/register';
import UserProfile from './Components/users/UserProfile'
import Home from './Components/widgets/Home';
import EditProfile from './Components/users/editUser';
import PrivetRoute from './Components/PrivetRoutesUser';
import PrivetRouteAdmin from './Components/PrivetRoutesAdmin';
import ListCategory from './Components/category/listCategory';
import ListCategoryA from './Components/category/listCategoryAdmin';
import ListUser from './Components/users/ListUser';
import { ListProducts } from './Components/products/listProduct';
import { ListProductsAdm } from './Components/products/ListProductsAdmin';
import CreateProduct from './Components/products/addProduct';
import EditProduct from './Components/products/editProduct';
import { Product } from './Components/products/product';
import { MyPanel } from './Components/panel/panel';
import { PanelListOrder } from './Components/panel/ListPay';




function App() {
  const [activeKey, setActiveKey] = useState(null);
  return (
    <div>
      <CustomNavbar activeKey={activeKey} onSelect={setActiveKey} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/SignIn' element={<LogIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Store' element={<ListProducts />} />



        <Route path='/Profile' element={<PrivetRoute><UserProfile /></PrivetRoute>} />
        <Route path='/EditProfile/:id' element={<PrivetRoute><EditProfile /></PrivetRoute>} />
        <Route path='/Product/:id' element={<PrivetRoute><Product /></PrivetRoute>} />
        <Route path='/Panel/:id' element={<PrivetRoute><PanelListOrder /></PrivetRoute>} />


        <Route path='/ListUsers' element={<PrivetRouteAdmin><ListUser /></PrivetRouteAdmin>} />
        <Route path='/CategoryListAdmin' element={<PrivetRouteAdmin><ListCategoryA /></PrivetRouteAdmin>} />
        <Route path='/ProductListAdmin' element={<PrivetRouteAdmin><ListProductsAdm /></PrivetRouteAdmin>} />
        <Route path='/CreateProduct' element={<PrivetRouteAdmin><CreateProduct /></PrivetRouteAdmin>} />
        <Route path='/UpdateProduct/:id' element={<PrivetRouteAdmin><EditProduct /></PrivetRouteAdmin>} />



      </Routes>

      <FooterR />
    </div>
  );
}

export default App;
