import React,{useState,useEffect} from 'react'
import "./ProductPages.css";
import { useToast } from '@chakra-ui/react'
// import

import Plist from './Plist';
import Sidebar from './Sidebar/Sidebar';
import { useRef } from 'react';
import { data } from 'jquery';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductPages() {
  const [state,setState] = useState([]);
  const [fixed , setFixed] = useState([]);
  const [price,setPrice] = useState([0,500]);
  let [checkBox, setCheckBox] = useState("");
  useEffect(()=>{
    axios.get("https://dull-plum-parrot-boot.cyclic.app/products",{
      headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin":"include"},withCredentials:true
    })
    // fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data`).then((res)=>res.json())
    .then((data)=>{
      setFixed(data.data);
      setState(data.data);
      scrollToTop();
    })
  },[])

  let toast = useToast();
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};


  function filterCheckbox2(e){
    // console.log(check);
    let inp1 = document.getElementById("inp1");
    let inp2 = document.getElementById("inp2");
    if(inp1.checked==true && inp2.checked==true){
      setState(fixed);
    } // console.log(checked)
    
    else if(e.target.checked==true){
      fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data?stock=false`).then((res)=>res.json()).then((data)=>{
        console.log(data);
        setState(data);
      })
      toast({
        title: `Filtered`,
        position: 'top',
        isClosable: true,
        
      })
    }else{
      fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data`)
      .then((res)=>res.json())
      .then((data)=>{
        // console.log(data);
        setState(data);
    })
  }
  }

  function filterCheckbox(e){
    // console.log(check);
      // let newData = [];
      let inp1 = document.getElementById("inp1");
      let inp2 = document.getElementById("inp2");
      if(inp1.checked==true && inp2.checked==true){
        setState(fixed);
      }

     else if(e.target.checked==true){
        fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data?stock=true`).then((res)=>res.json()).then((data)=>{
          console.log(data);
          setState(data);
        })
        toast({
          title: `Filtered`,
          position: 'top',
          isClosable: true,
        })
        setCheckBox(true)
      }else{
        setState(fixed);
        setCheckBox(false)
      }
  }



  function SizeL(e){
    // let s= document.getElementById("ssize");
  document.getElementById("msize").checked = false;
 document.getElementById("ssize").checked = false;
 let temp =[];
   if(e.target.checked==true){
    state.map((ele)=>{
      if(ele.size==="L"){
        
      temp.push(ele);
    }
    console.log(temp)
  })
  setState(temp);
  toast({
    title: `Filtered`,
    position: 'top',
    isClosable: true,
  })
    }else{
    setState(fixed);
    }
  }

  
  function SizeM(e){

    document.getElementById("ssize").checked = false;
 document.getElementById("lsize").checked = false;
  let temp =[];
   if(e.target.checked==true){
    state.map((ele)=>{
      if(ele.size==="M"){
        
      temp.push(ele);
    }
    console.log(temp)
  })
  setState(temp);
  toast({
    title: `Filtered`,
    position: 'top',
    isClosable: true,
  })
    }else{
    setState(fixed);
    }
  }

    
  function SizeS(e){
    document.getElementById("msize").checked = false;
    document.getElementById("lsize").checked = false;
    // console.log(e.target.checked);
  let temp =[];
   if(e.target.checked==true){
    state.map((ele)=>{
      if(ele.size==="S"){
        
      temp.push(ele);
    }
    console.log(temp)
  })
  setState(temp);
  toast({
    title: `Filtered`,
    position: 'top',
    isClosable: true,
  })
    }else{
    setState(fixed);
    }
  }
  




function handlePriceRange(val){
// console.log(val);
fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data?price_gte=${val[0]}&price_lte=${val[1]}`).then((res)=>res.json()).then((data)=>{
  // console.log(data);
  setState(data);
})
}


function reset(){
  setState(fixed);
  document.getElementById("inp2").checked = false;
  document.getElementById("inp1").checked = false;
  document.getElementById("ssize").checked = false;
  document.getElementById("msize").checked = false;
  document.getElementById("lsize").checked = false;
  
  toast({
    title: `Reset Done`,
    position: 'top',
    isClosable: true,
  })
}


function red(){
    fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data?color=red`).then((res)=>res.json()).then((data)=>{
      console.log(data);
      setState(data);
    })
    toast({
      title: `Filtered`,
      position: 'top',
      isClosable: true,
    })
}

// let greencolor = useRef(false);
function green(){
    fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data?color=green`).then((res)=>res.json()).then((data)=>{
      console.log(data);
      setState(data);
    })
    toast({
      title: `Filtered`,
      position: 'top',
      isClosable: true,
    })
}

function gray(){
  fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data?color=gray`).then((res)=>res.json()).then((data)=>{
    console.log(data);
    setState(data);
  })
  toast({
    title: `Filtered`,
    position: 'top',
    isClosable: true,
  })
}
function black(){
  fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data?color=black`).then((res)=>res.json()).then((data)=>{
    console.log(data);
    setState(data);
  })
  toast({
    title: `Filtered`,
    position: 'top',
    isClosable: true,
  })
}

function white(){
  fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data?color=white`).then((res)=>res.json()).then((data)=>{
    console.log(data);
    setState(data);
  })
  toast({
    title: `Filtered`,
    position: 'top',
    isClosable: true,
  })
}

function sold(){
  let select = document.getElementById("select").value;
  // let url=

  let inp1 = document.getElementById("inp1");
  let inp2 = document.getElementById("inp2");
  if(inp1.checked==true ){
    // setState(fixed);
  }
  // https://dead-gold-binturong-kilt.cyclic.app/Product_Data?stock=true
  
 if(select==="za"){
  select = "name";
  fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data?_sort=${select}&_order=desc`)
  .then((res)=>res.json())
  .then((data)=>{
    setState(data);
  })
  toast({
    title: `Z to A`,
    position: 'top',
    isClosable: true,
  })
 }else if(select==="no"){
  select = "manufacture_date";

  fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data?_sort=${select}&_order=desc`)
.then((res)=>res.json())
.then((data)=>{
  // console.log(data);
  setState(data);

   
  // Display(state);
})
toast({
  title: `New to Old`,
  position: 'top',
  isClosable: true,
})
  
 }
 
 else if(select==="name"){
  select = "name";

  fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data?_sort=${select}&_order=desc`)
.then((res)=>res.json())
.then((data)=>{
  // console.log(data);
  setState(data);

   
  // Display(state);
})
toast({
  title: `A to Z`,
  position: 'top',
  isClosable: true,
})
  
 }

 else if(select==="price"){
  select = "price";

  fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data?_sort=${select}&_order=desc`)
.then((res)=>res.json())
.then((data)=>{
  // console.log(data);
  setState(data);

  // setState(data);
  
  // Display(state);
})
toast({
  title: `Price Low to High`,
  position: 'top',
  isClosable: true,
})
 }


 else if(select==="manufacture_date"){
  select = "manufacture_date";

  fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data?_sort=${select}&_order=desc`)
.then((res)=>res.json())
.then((data)=>{
  // console.log(data);
  setState(data);

  // setState(data);
  
  // Display(state);
})
toast({
  title: `Old to New`,
  position: 'top',
  isClosable: true,
})
 }

 else if(select==="hl"){
  select = "price";

  fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data?_sort=${select}&_order=desc`)
.then((res)=>res.json())
.then((data)=>{
  // console.log(data);
  setState(data);

  // setState(data);
  
  // Display(state);
})
toast({
  title: `Price High to Low`,
  position: 'top',
  isClosable: true,
})
 }else if(select==='sold'){
  select = "sold";

  fetch(`https://dead-gold-binturong-kilt.cyclic.app/Product_Data?_sort=${select}&_order=desc`)
.then((res)=>res.json())
.then((data)=>{
  // console.log(data);
  setState(data);

  
  // Display(state);
})
toast({
  title: `Best Sold product`,
  position: 'top',
  isClosable: true,
})

 }

}

  
  
  return (
    <>
    {/* <div className='blackF'>
               {/* <h3>Black Friday</h3> */}
          {/* </div> */}
    <div className='a-Main-Box'>
          
      <div  className='a-side-nav'> <Sidebar filterCheckbox={filterCheckbox} filterCheckbox2={filterCheckbox2} SizeL={SizeL} SizeM={SizeM} SizeS={SizeS} handlePriceRange={handlePriceRange} reset={reset} red={red} green={green} gray={gray} black={black} white={white} /></div>      
      <div className="a-list-items"><Plist  sold={sold} array={state} setState={setState} /></div>
     
    </div>
    </>
  )
}
