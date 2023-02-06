import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Center, Input, Text } from '@chakra-ui/react'
import React from 'react'
import "./Footer.css"
import {BsInstagram} from "react-icons/bs"
import {FaFacebookF} from "react-icons/fa"
import {FaPinterestP} from "react-icons/fa"
import {FaCcAmex} from "react-icons/fa"
import {BsEnvelope} from "react-icons/bs"
import { Footerimg } from './footerimg'
import { useState } from 'react'
import emailjs from 'emailjs-com'
export default function Footer() {
const [text,settext]=useState({email:""});
function handlechange(e){
settext({...text,[e.target.name]:e.target.value})
}

  function handlesubmit(e){
    e.preventDefault();
    console.log("clicked")
    emailjs.sendForm('service_upkcbh9','template_5qami3m',e.target,'cCmn7Z5cFiu3T498j').then(res=>console.log(res)).catch(res=>console.log(res))
  }
  return (
    <div>
      
      <Box  className="parent_box">
        <br/>
        <br/>
        <br/>
     <Box><img className='main_icon'  src='https://cdn.shopify.com/s/files/1/0339/0901/files/DU-White-Logo_x46@2x.png?v=1631291423'/></Box>
     {/* <Box> main papa*/}
     <Box className='all_divs'>
      <Box className='single_box'>
  <h5>QUICK LINKS</h5>
  <p>Hudson Blake</p>
  <p>Shipping + Returns</p>
  <p>FAQs</p>
  <p>Contact Us</p>
  <p>Gift Cards</p>
  <p>Privacy Policy</p>
  <p>Terms of Service</p>
  <p>Refund Policy</p>
      </Box>
      <Box className='single_box'> 
        <h5>ABOUT US</h5>
  <p>Our Story + Mission</p>
  <p>Locations</p>
  <p>Collaborations</p>
  <p>Careers</p>
  <p>Interns</p>
  <p>Blog</p>
 </Box>
      <Box className='single_box'>
      <h5>SIGN UP AND SAVE</h5>
  <p>Subscribe to get special offers, free giveaways, and once-<br/>in-a-lifetime deals.</p>
  <Box className='input_box_box'> 

<form onSubmit={handlesubmit}>
<input placeholder='Enter Your email' className='Input' onChange={handlechange} value={text.email} name="email"/><button><BsEnvelope/></button>
</form></Box>

 <Box className='icons_div'>
 <Box><BsInstagram/></Box> 
 <Box><FaFacebookF/></Box>
 <Box><FaPinterestP/></Box>
 </Box>
      </Box>
     </Box>
     {/* images components */}
  <Footerimg/>
     <Center> <p>© 2022 Dress Up</p></Center>  
      </Box>
      {/*  */}
      {/*  */}
      {/* for responsive */}
      <Box className='responsive_box'>
      <Box><img className='responsive_image'  src='https://cdn.shopify.com/s/files/1/0339/0901/files/DU-White-Logo_x46@2x.png?v=1631291423'/></Box>
      {/* accordtion */}
      <Box  className='accordtion'>
      <Accordion allowToggle >
       
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' className='h5'>
          QUICK LINKS
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     <Box className='responsive_boxes'>
     <p>Hudson Blake</p>
  <p>Shipping + Returns</p>
  <p>FAQs</p>
  <p>Contact Us</p>
  <p>Gift Cards</p>
  <p>Privacy Policy</p>
  <p>Terms of Service</p>
  <p>Refund Policy</p>
     </Box>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem >
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'  className='h5'>
          ABOUT US
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <Box className='responsive_boxes'>
      <p>Our Story + Mission</p>
  <p>Locations</p>
  <p>Collaborations</p>
  <p>Careers</p>
  <p>Interns</p>
  <p>Blog</p>
      </Box>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'  className='h5'>
       SIGN UP AND SAVE
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     <Box className='responsive_boxes'> <h5>SIGN UP AND SAVE</h5>
  <p>Subscribe to get special offers, free giveaways, and once-<br/>in-a-lifetime deals.</p>
  <Box className='input_box_box'> 

<form onSubmit={handlesubmit}>
<input placeholder='Enter Your email' className='Input' onChange={handlechange} value={text.email} name="email"/><button><BsEnvelope/></button>
</form></Box>

 <Box className='icons_div'>
 <Box><BsInstagram/></Box> 
 <Box><FaFacebookF/></Box>
 <Box><FaPinterestP/></Box>
 </Box>
 </Box>
    </AccordionPanel>
   
  </AccordionItem>
  
</Accordion>
      </Box>
       {/* images  */}  
       <Box>
        <Footerimg className='responsive_img'/>
        <Center> <p>© 2022 Dress Up</p></Center>  
       </Box>     
      </Box>
      
    </div>
  )
}
