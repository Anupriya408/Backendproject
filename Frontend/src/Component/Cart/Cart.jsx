import React, { useEffect } from 'react'
import "./Cart.css"
import CARTMENU, { IncreaseQTY, DecreaseQTY, ApplyCoupon } from './Cartt'
import { bindActionCreators } from 'redux';
import { Box } from "@chakra-ui/react";
// 
import { FiArrowRightCircle, FiMinus, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom"
import { FaArrowCircleRight } from "react-icons/fa";
import { GetCartData, GetPatchData, GetDeleteData } from '../../Actions/CartAction';
import { useDispatch, useSelector } from 'react-redux';
let Data = 0;
export default function Cart() {
  let Array = useSelector((state) => { return state.ShopDressReducer.Cart }) || []
  let dispatch = useDispatch();

  useEffect(() => {
    GetCartData(dispatch);

  }, [])
  Data = 0;
  Array.map((el) => {
    Data += (Number(el.Qty) * Number(el.price));
  })
  localStorage.setItem('Total_Price', Data);
  // if()
  return (
    <div >
      {/* {console.log(Array)} */}
      <Box id="CARTDI">
        <Box id="CARTDIV_INNER"> <Box bg="rgb(214 247 228);" display="flex" justifyContent="space-around" h="40px" fontSize="25px" alignItems="center"> CART <FaArrowCircleRight onClick={CARTMENU} cursor="pointer" fontSize="25px" />
        </Box>
          {Array.length == 0 ? <div style={{ paddingTop: "10px", paddingLeft: "10px", color: "grey" }}> Your cart is currently empty.</div> : <>
            <Box id="cartItems" >

              <ul>
                {
                  Array.map((el, index) => {
                    return <li key={index} style={{ display: "flex", width: "100%", paddingRight: "7px", paddingLeft: "13px", marginBottom: "10px", paddingBottom: "15px" }}>

                      <img src={el.image_1} style={{ width: "22%", marginRight: "18px" }} />
                      <span style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", paddingBottom: '14px' }}>
                        <p style={{ fontSize: "15px", fontFamily: "Poppins, sans-serif", fontWeight: 500 }}> {el.name}</p><Box style={{ display: "flex", justifyContent: "space-between", fontSize: "14px" }}><span><b>Size</b> : {el.size}</span>  <span><b>Price</b>  : $ {(Number(el.Qty) * Number(el.price))}</span></Box>
                        <Box display="flex" justifyContent="space-between" alignItems="center">

                          {/* <Box display="flex" gap="7px" bg="#6f6f6f" borderRadius="6px" alignItems="center" h="25px" fontSize="21px" border="2px" w="73px" color="white" justifyContent="space-around" ><button onClick={()=>{DecreaseQTY(el.id,dispatch)}} style={{border:"none", paddingBottom:"9px",fontSize:"34px"}}  > -</button><span style={{border:"none", fontSize:"18px", color:"white"}}> {el.Qty} </span> <button onClick={()=>{IncreaseQTY(el.id,dispatch,Array)}} style={{border:"none",paddingBottom:"7px",fontSize:"26px"}}>+</button> </Box> */}
                          <Box display="flex" gap="7px" borderRadius="6px" alignItems="center" fontSize="21px" border="none" w="73px" color="black" justifyContent="space-around" ><button className='CartButton' onClick={() => { DecreaseQTY(el.cartId, dispatch,Array) }} style={{ border: "none", fontSize: "23px", width: "26px", height: "32px", textAlign: "center" }} > -</button><span style={{ border: "none", fontSize: "18px", color: "black", paddingTop: "4px" }}> {el.Qty} </span> <button className='CartButton' onClick={() => { IncreaseQTY(el.cartId, dispatch, Array) }} style={{ fontSize: "23px", width: "26px", height: "32px", display: "flex", justifyContent: "center", alignItems: "center" }}>+</button> </Box>
                          <button className='removebtn' style={{ borderRadius: "2px", padding: '1px', fontSize: "14px" }} onClick={() => { GetDeleteData(el.cartId, index, Array, dispatch) }}>REMOVE</button> </Box></span>
                    </li>
                  })
                }
              </ul>
            </Box>
            <Box textAlign="center" pl="13px" pt="10px" pr="22px" id="CartDescription">
              {/* <hr/> */}
              <span style={{ display: "flex", justifyContent: "space-between", textAlign: "center", fontSize: "17px", paddingLeft: "14px", paddingRight: "14px", color: "black", fontWeight: "500" }} > <span>MRP : </span> <span>$ {Data} </span>  </span>
              <span style={{ display: "flex", justifyContent: "space-between", textAlign: "center", fontSize: "14px", paddingLeft: "14px", paddingRight: "14px", color: "#d42d4a", fontWeight: "400" }} > <span>Product Discount : </span> <span>-  $ 80 </span>  </span>
              <span style={{ display: "flex", justifyContent: "space-between", textAlign: "center", fontSize: "14px", paddingLeft: "14px", paddingRight: "14px", color: "grey", fontWeight: "600" }} > <span>Hooray! You saved -  $ 30 on Product Discount</span>  </span>
              <span style={{ display: "flex", justifyContent: "space-between", textAlign: "center", fontSize: "17px", paddingLeft: "14px", paddingRight: "14px", color: "black", fontWeight: "600" }} > <span>Grand Total : </span> <span id="GDP">$     {localStorage.getItem('Total_Price') - 80} </span>  </span>
              <span style={{ display: "flex", justifyContent: "space-between", textAlign: "center", fontSize: "15px", paddingLeft: "14px", paddingRight: "14px", color: "black", fontWeight: "600" }} > <span>Apply Coupon</span> <span><input id="CouponInput" style={{ border: "1px solid green", color: "green", paddingLeft: "12px", fontWeight: "500" }} type="text" placeholder='Enter Coupon' onKeyPress={ApplyCoupon} /></span>  </span>
              <span style={{ display: "flex", justifyContent: "flex-end", textAlign: "center", fontSize: "15px", paddingLeft: "14px", paddingRight: "14px", color: "black", paddingTop: "10px", paddingBottom: "10px", fontWeight: "600" }} > <span id="ApplyCopounText">No Coupon Applied </span>  </span>
              <Link to="/payment" className='CartCPNYImg' style={{ background: "#2a7e06", color: "white", fontSize: "18px" }} bg="" color="white" fontSize="" >Proceed</Link>

            </Box></>}
        </Box>
      </Box>

    </div>
  )
}
