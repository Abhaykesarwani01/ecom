import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../customer/Pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/navigation/Navigation'
import Footer from '../customer/components/Footer/Footer'
import ProductPage from '../customer/Pages/ProductPage/ProductPage'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import CheckOut from '../customer/components/CheckOut/CheckOut'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/OrderDetails/OrderDetails'

const CustomerRouters = () => {
  return (
    <div>
        <div>
            <Navigation />
        </div>
        <Routes>

            <Route path='/' element={<HomePage/>} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<ProductPage />} />
            <Route path='/product/:productId' element={<ProductDetails />} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path='/account/order' element={<Order />} />
            <Route path='/account/order/:orderId' element={<OrderDetails/>} />

        </Routes>

        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default CustomerRouters