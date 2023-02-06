import React from 'react'
import "./PaymentPage.css"
import { useFormik } from 'formik'
import {Box, Button, Center, Heading, Input, Link, Select} from "@chakra-ui/react"
import { signUpSchema } from './schemas'
import { Navigate, useNavigate } from 'react-router-dom'
import { useDispatch , useSelector} from 'react-redux';
import { GetCartData,GetPatchData,GetDeleteData } from '../../Actions/CartAction';
// import { Navigate, useNavigate } from 'react-router-dom'
//import { BasicUsage } from './PaymentModal'
import CARTMENU,{IncreaseQTY, DecreaseQTY,ApplyCoupon} from '../Cart/Cartt'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  
} from '@chakra-ui/react'
import { useEffect } from 'react'
import Carddetails from './Carddetails'
//import PaymentPage from './PaymentPage'
// export function BasicUsage() {
  
//   useEffect(()=>{
//     // onOpen()
//   },[])
//   return (
//     <>
    
//     </>
//   )
// }















export default function PaymentPage() {
  let Array=useSelector((state)=>{ return state.ShopDressReducer.Cart})||[]
  let dispatch=useDispatch();
  const navigate=useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()
const Formik=useFormik({
 
  initialValues:{
   email:"",
   country:"",
   first_name:"",
   last_name:"",
   comapany:"",
   appartment:"",
   address:"",
   city:"",
   region:"",
   Zip:"",
   phone:""
  },
  validationSchema:signUpSchema,
  onSubmit:values=>{
    console.log(Formik.values+"values...");
   // alert(JSON.stringify(values,null,2))
    // navigate("/carddetails");
    //<BasicUsage/>
    // open()
    onOpen()
  }
})
useEffect(()=>{
  CARTMENU() 
  scrollToTop();
},[])
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
}

  return (
    <div className='payment_div'>
  <Box className='left_box'>
    <form onSubmit={Formik.handleSubmit}>
    {/*
     <Box>
      <img className='dressup_img_main_logo' src='https://cdn.shopify.com/s/files/1/0339/0901/files/All-Black-Logo_7_spacing.png?14284'/>
    </Box> 
    */}
  <Center  pt="17px"> <Heading fontSize={"25px"} fontWeight="500"  >Shipping Address Details</Heading></Center> 
<Center> <p style={{fontSize:"15px",textAlign:"center",marginTop:"20px"}}>  Thankyou for choosing the Shopdress .Here the payment page  where you <br/>have to fill some details for confirming your order</p></Center>
  <Center>  <Box className='PaymentPage_options'>
              {/* <p>Express checkout</p> */} 
      <Box className='paymet_img'>
      <Box><img className='btn_img' src='data:image/png;base64,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'/></Box>
      <Box><img className='btn_img' src='data:image/png;base64,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'/></Box>
      <Box><img src='data:image/png;base64,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' className='btn_img'/></Box>
      </Box>
    </Box>
    </Center>
    <hr/> 
    <Box className='Input_papa_box'>
      <div className='contact_info_box'>
        <h6>Contact information</h6>
        <p> Already have an account?<span><Link>Log in</Link></span></p>
            </div>
          
      <Input placeholder='* Email' className='input' focusBorderColor={"blue"} size='lg'   name='email'  value={Formik.values.email} onChange={Formik.handleChange} onBlur={Formik.onBlur}/>
      {Formik.errors.email&&Formik.touched.email?<p className='errors'>{Formik.errors.email}</p>:null}
      <br/>
      <br/>
      <label>Shipping address</label>
      <Select placeholder='Country/region' size='lg' m={"10px"}  name='country'  value={Formik.values.country} onChange={Formik.handleChange}>
  <option value='option1'>India</option>
  <option value='option2'>China</option>
  <option value='option3'>Usa</option>
</Select>
{Formik.errors.country&&Formik.touched.country?<p className='errors'>{Formik.errors.country}</p>:null}
      <Box className='input_flex_boxes'>
      <Input  placeholder='*First Name'  size='lg'  name='first_name'  value={Formik.values.first_name} onChange={Formik.handleChange} onBlur={Formik.onBlur}/>
      <Input  placeholder='Last Name'  size='lg' name='last_name'   value={Formik.values.last_name} onChange={Formik.handleChange} onBlur={Formik.onBlur}/>
     </Box >
     <Box className='input_flex_boxes'>
     {Formik.errors.first_name&&Formik.touched.first_name?<p className='errors'>{Formik.errors.first_name}</p>:null}
     {Formik.errors.last_name&&Formik.touched.last_name?<p className='errors'>{Formik.errors.last_name}</p>:null}
     </Box>
     <Input placeholder='Company(optional)'className='input' size='lg' name='comapany'   value={Formik.values.comapany} onChange={Formik.handleChange} onBlur={Formik.onBlur}/>
     {Formik.errors.comapany&&Formik.touched.comapany?<p className='errors'>{Formik.errors.comapany}</p>:null}
     <Input placeholder='*Address' className='input' size='lg'  name='address'  value={Formik.values.address} onChange={Formik.handleChange} onBlur={Formik.onBlur}/>
     {Formik.errors.address&&Formik.touched.address?<p className='errors'>{Formik.errors.address}</p>:null}
     <Input placeholder='Appartment,suite,etc(optional)' className='input' size='lg' name='appartment'   value={Formik.values.appartment} onChange={Formik.handleChange} onBlur={Formik.onBlur}/>
     {Formik.errors.appartment&&Formik.touched.appartment?<p className='errors'>{Formik.errors.appartment}</p>:null}
     <Box className='input_flex_boxes'>
      <Input placeholder='*City'  size='lg' name='city'  value={Formik.values.city} onBlur={Formik.onBlur} onChange={Formik.handleChange} />
      <Select placeholder='Country/region'  size='lg' name='region'   value={Formik.values.region} onBlur={Formik.onBlur} onChange={Formik.handleChange}>
  <option value='option1'>India</option>
  <option value='option2'>China</option>
  <option value='option3'>Usa</option>
</Select>
      <Input placeholder='*ZIP code'  size='lg' type="number"  name='Zip'  value={Formik.values.Zip} onBlur={Formik.onBlur} onChange={Formik.handleChange}/>
     </Box>
     <Box className='input_flex_boxes'>
     {Formik.errors.city&&Formik.touched.city?<p className='errors'>{Formik.errors.city}</p>:null}
     {Formik.errors.region&&Formik.touched.region?<p className='errors'>{Formik.errors.region}</p>:null}
     {Formik.errors.Zip&&Formik.touched.Zip?<p className='errors'>{Formik.errors.Zip}</p>:null}
     </Box>
     <Input placeholder='*Phone' className='input' size='lg'  name='phone' type="number  "   value={Formik.values.phone} onBlur={Formik.onBlur} onChange={Formik.handleChange}/>
     {Formik.errors.phone&&Formik.touched.phone?<p className='errors'>{Formik.errors.phone}</p>:null}
    </Box>
      <Box className='last_box'>
    {/* <Link path="/cart "> <Heading size={"xsm"}>back to cart</Heading> </Link>  */}
        <Button bg={"black"}  color="white" width={"190px"} m={3}  p={7} type="submit">Continue</Button>
      </Box>
      </form>
      <Button display={"none"} onClick={onOpen}></Button>

<Modal isOpen={isOpen} onClose={onClose} size={''}>
  <ModalOverlay />
  <ModalContent  width={"600px"} maxHeight={"500px"}>
    {/* <ModalHeader>Modal Title</ModalHeader> */}
    <ModalCloseButton />
    <ModalBody height={"800px"}>
        <Carddetails  w={500} m="auto"  />
    </ModalBody>

    {/* <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onClose}>
        Close
      </Button>
      <Button variant='ghost'>Secondary Action</Button>
    </ModalFooter> */}
  </ModalContent>
</Modal>
  </Box>











  {/* right box */}
  <Box className='right_box' w="26%" marginTop="12px">
    {/* <Box className='right_box_baby'>
    <Box className='Box_with_data'> 
    <Box className='inner_box' >
      <img  className='image' src='https://cdn.shopify.com/s/files/1/0339/0901/products/shopdressup_red_mini_dress-2_b115c173-1009-4509-8258-3dd686c2cdd6_small.jpg?v=1669410577'/>
      <Box>
        <h5>Make It Classy Mini Dress</h5>
        <p>Red / Small</p>
      </Box>
    </Box>
  <p>$46.0</p>
   </Box>
<hr/>
<br/>
<Box className='coupen_box'>
  <Input placeholder='gift card or discount code' height={12}/>
  <Button>Apply</Button>
</Box>
<br/>
<hr/>
<Box className='pay_boxes'>
  <p>Subtotal</p>
  <p>$46</p>
</Box>
<br/>
<Box className='pay_boxes'>
  <p>Shipping</p>
  <p>Calculated at next Step</p>
</Box>
<br/>
<hr/>
<br/>
<Box className='pay_boxes'>
  <p>Total</p>
  <p style={{fontSize:"20px",fontWeight:"bolder"}}>$46</p>
</Box>
</Box> */}
 {Array.length==0? <div style={{paddingTop:"10px", paddingLeft:"10px", color:"grey"}}> Your cart is currently empty.</div> : <>
   <ul style={{ overflowY:"scroll", height:"82%"}} >
           {
            Array.map((el,index)=>{
              return <li key={el.id} style={{display:"flex", width:"100%",margin:"auto", paddingRight:"7px" ,paddingLeft:"13px", marginBottom:"10px", paddingBottom:"15px" }}> 
                         
                         <img src={el.image_1} style={{width:"17%", marginRight:"18px"}} />
                         <span style={{display:"flex", flexDirection:"column", justifyContent:"space-between", paddingBottom:'14px'}}>
                         <p style={{fontSize:"15px", fontFamily:"Poppins, sans-serif" , fontWeight:500 }}> {el.name}</p><Box style={{display:"flex", justifyContent:"space-between",fontSize:"14px"}}><span><b>Size</b> : {el.size}</span>  <span><b>Price</b>  : $ {(Number(el.Qty)* Number( el.price))}</span></Box>
                         <Box display="flex" justifyContent="space-between" alignItems="center">
                         
                         {/* <Box display="flex" gap="7px" bg="#6f6f6f" borderRadius="6px" alignItems="center" h="25px" fontSize="21px" border="2px" w="73px" color="white" justifyContent="space-around" ><button onClick={()=>{DecreaseQTY(el.id,dispatch)}} style={{border:"none", paddingBottom:"9px",fontSize:"34px"}}  > -</button><span style={{border:"none", fontSize:"18px", color:"white"}}> {el.Qty} </span> <button onClick={()=>{IncreaseQTY(el.id,dispatch,Array)}} style={{border:"none",paddingBottom:"7px",fontSize:"26px"}}>+</button> </Box> */}
                         <Box display="flex" gap="7px"  borderRadius="6px" alignItems="center" fontSize="21px" border="none" w="73px" color="black" justifyContent="space-around" ><button className='CartButton' onClick={()=>{DecreaseQTY(el.id,dispatch)}} style={{border:"none",fontSize:"23px",width:"26px",height:"32px",textAlign:"center"}} > -</button><span style={{border:"none", fontSize:"18px", color:"black", paddingTop:"4px"}}> {el.Qty} </span> <button className='CartButton' onClick={()=>{IncreaseQTY(el.id,dispatch,Array)}} style={{fontSize:"23px",width:"26px",height:"32px", display:"flex" , justifyContent:"center", alignItems:"center"}}>+</button> </Box>
                         <button className='removebtn' style={{  borderRadius:"2px", padding:'1px',fontSize:"14px"}} onClick={()=>{GetDeleteData(el.id, index,Array,dispatch)}}>REMOVE</button> </Box></span>
                     </li>
            })
           }
           </ul>
           <Box textAlign="center" pl="13px" pt="10px" pr="22px"  >
            {/* <hr/> */}
            <span style={{  display:"flex", justifyContent:"space-between", textAlign:"center",fontSize:"17px", paddingLeft:"14px",paddingBottom:"15px", paddingRight:"14px", color:"black", fontWeight:"500"}} > <span>MRP : </span> <span>$ {100} </span>  </span>
            <span style={{  display:"flex", justifyContent:"space-between", textAlign:"center",fontSize:"14px", paddingLeft:"14px",paddingBottom:"11px", paddingRight:"14px", color:"#d42d4a", fontWeight:"400"}} > <span>Product Discount : </span> <span>-  $ 80 </span>  </span>
            <span style={{  display:"flex", justifyContent:"space-between", textAlign:"center",fontSize:"14px", paddingLeft:"14px",paddingBottom:"11px", paddingRight:"14px", color:"grey", fontWeight:"600"}} > <span>Hooray! You saved -  $ 30 on Product Discount</span>  </span>
            <span style={{  display:"flex", justifyContent:"space-between", textAlign:"center",fontSize:"17px", paddingLeft:"14px",paddingBottom:"15px", paddingRight:"14px", color:"black", fontWeight:"600"}} > <span>Grand Total : </span> <span id="GDP">$     {localStorage.getItem('Total_Price')-80} </span>  </span>
            {/* <span style={{  display:"flex", justifyContent:"space-between", textAlign:"center",fontSize:"15px", paddingLeft:"14px", paddingRight:"14px", color:"black", fontWeight:"600"}} > <span>Apply Coupon</span> <span><input id="CouponInput" style={{border:"1px solid green", color:"green", paddingLeft:"12px", fontWeight:"500"}} type="text" placeholder='Enter Coupon' onKeyPress={ApplyCoupon}/></span>  </span> */}
            {/* <span style={{  display:"flex", justifyContent:"flex-end", textAlign:"center",fontSize:"15px", paddingLeft:"14px", paddingRight:"14px", color:"black",paddingTop:"10px", paddingBottom:"10px", fontWeight:"600"}} > <span id="ApplyCopounText">No Coupon Applied </span>  </span> */}
           {/* <Box className='CartCPNYImg' bg="#2a7e06" color="white" fontSize="18px" >Proceed</Box>  */}
            
        </Box> </>}
       {/* </Box> */}
  </Box>
    </div>
  )
}

