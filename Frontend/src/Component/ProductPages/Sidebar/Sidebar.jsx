import React, { useEffect } from 'react';
import "../Sidebar/sidebar.css";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react'

import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react'
import { useState  } from 'react';
import { Display } from '../Plist';


const Sidebar = ({filterCheckbox,filterCheckbox2,SizeL,SizeM,SizeS,handlePriceRange,reset,red,green,gray,black,white}) => {
  // let [state,setState] =useState([]);
  const [sliderVal1, setSliderVal1] = useState([0, 500])

// useEffect(()=>{

//   fetch('https://cartikkg-shop-dress-up-new.onrender.com/Product_Data')
//   .then((res)=>res.json())
//   .then((res)=> setState(res))
//   .catch((err)=> console.log(err));
// },[])




  return (
    <div className='a-sidebar'>
      <button onClick={reset} className="btnreset">Reset</button>
     <Accordion defaultIndex={[0]} allowMultiple>
  <AccordionItem className='accord'>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
         A V A I L A B I L I T Y
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <div>

     <input type="checkbox" id='inp1' onChange={filterCheckbox}/> In Stock 
      </div>
      <div>

     <input type="checkbox" id='inp2' onChange={filterCheckbox2} /> Not In Stock
      </div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem  className='accord' >
    <h2>
      <AccordionButton >
        <Box flex='1' textAlign='left' >
          P R I C E
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4} >

  {/* <div className='priceFlex'><p>$ 0</p> <p>$ 500</p></div> */}
  
    {/* <RangeSlider defaultValue={[120, 240]} id="slide" min={0} max={300} step={30}>
  <RangeSliderTrack bg='gray.100'>
    <RangeSliderFilledTrack bg='black' />
  </RangeSliderTrack>
  <RangeSliderThumb boxSize={4} index={0} bg="black" />
  <RangeSliderThumb boxSize={4} index={1} bg="black" />
</RangeSlider> */}
{/* <Box fontSize="18px" fontWeight={700} letterSpacing="0.25px" color={"#151b39"} pl="20px">Price</Box> */}
<div style={{paddingTop:"7px"}}>


            { <RangeSlider  
                defaultValue={[0, 500]}
                w="85%"
                ml="25px"
                mr="50px"
                aria-label={['min', 'max']}
                onChangeEnd={(val) => handlePriceRange(val)}
                onChange={(val) => setSliderVal1(val)}
                pos="relative"
                mb="20px"
                min={0}
                max={500}
            >
                <RangeSliderTrack h="5px" >
                    <RangeSliderFilledTrack bgColor="black"  />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} boxSize="23px"  >
                    <Box position="absolute" bottom="5px" mr={"35px"}  fontSize={"18px"} mt="-80px">{sliderVal1[0]}</Box>
                    <Box w="23px" h="21px" bgColor="black"  borderRadius={"50%"} ></Box>
                </RangeSliderThumb>
                <RangeSliderThumb index={1} boxSize="23px"  >
                    <Box position="absolute" bottom="5px" ml={"35px"} fontSize={"18px"} >{sliderVal1[1]}</Box>
                    <Box w="23px" h="21px" bgColor="black" borderRadius={"50%"}  ></Box>
                </RangeSliderThumb>
            </RangeSlider>}
      
            </div>

    </AccordionPanel>
  </AccordionItem>

  <AccordionItem   className='accord'>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          C O L O R
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <div className='color-div'>
        <div style={{backgroundColor:"red"}} onClick={red} ></div>
        <div style={{backgroundColor:"green"}} onClick={green} ></div>
        <div  style={{backgroundColor:"gray"}} onClick={gray}  ></div>
        <div style={{backgroundColor:"black"}} onClick={black} ></div>
        <div style={{backgroundColor:"whiteSmoke"}} onClick={white} ></div>
        <div style={{backgroundColor:"blue"}}></div>
        <div  style={{backgroundColor:"yellow"}}></div>
        <div style={{backgroundColor:"pink"}}></div>
        <div  style={{backgroundColor:"purple"}}></div>
      </div>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem className='accord'>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          S I Z E
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <div>

     <input type="checkbox" id='lsize' onChange={SizeL}/> Large
      </div>
      <div>

     <input type="checkbox" id='msize' onChange={SizeM}/> Medium
      </div>
      <div>

     <input type="checkbox" id='ssize' onChange={SizeS}/> Small
      </div>
    </AccordionPanel>
  </AccordionItem>


</Accordion>

    </div>
  )
}

export default Sidebar;