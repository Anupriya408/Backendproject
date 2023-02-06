// import Navbar from "./Component/Navbar/Navbar";
// import Footer from "./Component/Footer/Footer";
// import PaymentPage from "../Component/PaymentPage/PaymentPage";
import React, { useState } from "react";
import Cart from "../Cart/Cart";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import Carddetails from "../PaymentPage/Carddetails";
import { BasicUsage } from "../PaymentPage/PaymentModal";
import PaymentPage from "../PaymentPage/PaymentPage";
import PaymetSuccess from "../PaymentPage/PaymetSuccess";

import Practice from "../PaymentPage/practice";

import ProductDetails from "../ProductDetails/ProductDetails";

import ProductPages from "../ProductPages/ProductPages"

import { ChakraProvider } from '@chakra-ui/react';
import Navbar from "../TESTING/DROP";
import Allroutes from "../AllRoutes/Allroutes";
import Home from "../Home/Home";

function App() {
 
  return (
    <div className="App">

    <Navbar/>
   {/* <Home /> */}
    <Cart/>
    <Allroutes/>
    <BasicUsage/>
    <Footer/>

    </div>
  );
}

export default App;