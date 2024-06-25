import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import HomePage from "./pages/HomePage"
import Footer from "./components/Footer/Footer"
import ProductInfo from "./pages/ProductInfo/ProductInfo"
import Cart from "./pages/Cart/Cart"
import AllItem from "./pages/AllItem/AllItem"
import Signup from "./pages/Registration/Signup"
import Login from "./pages/Registration/Login"
import UserDashBoard from "./pages/User/UserDashBoard"
import AdminDashboard from "./pages/Admin/AdminDashBoard"
import AddProductPage from "./pages/Admin/AddProductPage"
import UpdateProductPage from "./pages/Admin/UpdateProductPage"
import ContextProvider from "./context/ContextProvider"
import { ProductProvider } from "./context/ProductContext"

function App() {

  return (

    <ProductProvider>
      <ContextProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/product/:id" element={<ProductInfo/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/allitem" element={<AllItem/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/user" element={<UserDashBoard/>}/>
        <Route path="/admin" element={<AdminDashboard/>}/>
        <Route path="/addproduct" element={<AddProductPage/>}/>
        <Route path="updateproduct" element={<UpdateProductPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </ContextProvider>
    </ProductProvider>
  )
}

export default App
