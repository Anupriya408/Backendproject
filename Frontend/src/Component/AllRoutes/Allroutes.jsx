import React from 'react'
import {Routes,Route} from "react-router-dom"
import Carddetails from '../PaymentPage/Carddetails'
import { BasicUsage } from '../PaymentPage/PaymentModal'
import PaymentPage from '../PaymentPage/PaymentPage'
import PaymetSuccess from '../PaymentPage/PaymetSuccess'
import ProductDetails from '../ProductDetails/ProductDetails'
import Home from "../Home/Home"
import ErrorPage from '../ErrorPage/ErrorPage'
import ProductPages from '../ProductPages/ProductPages'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/payment' element={<PaymentPage/>}/>
            <Route path='/carddetails' element={<BasicUsage/>}/>
            <Route path='/Productspage' element={<ProductPages/>}/>
             <Route path="/Productspage/:id" element={<ProductDetails/>}/>
            <Route path='/success' element={<PaymetSuccess/>}/>
            <Route path='*' element={<ErrorPage/>}/>
        </Routes>
    </div>
  )
}

export default Allroutes