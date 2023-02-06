import axios from "axios";
import { data } from "jquery";
import { json } from "react-router-dom";

export  const GetCartData = (dispatch)=>{
       async function GetData(){
        axios.get('https://dull-plum-parrot-boot.cyclic.app/user/cartitem',{ 
            headers: { 
                "Authorization" : `Bearer ${localStorage.getItem("TokenID")}`,
               }
        })
        .then((data)=>{
            dispatch({
                type:"GETCARTDATA",
                payload:data.data.cartItem || []
            })
            
        })

       }
       GetData()
}
export  const GetPatchData = async (Data,id,dispatch)=>{
    await fetch(`https://dead-gold-binturong-kilt.cyclic.app/cart/${id}`,{
      method:"PATCH",
      body: JSON.stringify(Data),
      headers :{
      "Content-Type":"application/json",
      },   
     });
 

}
export const GetDeleteData = async (id,index,Array,dispatch)=>{
    let data = {
        "Qty": 0
    }
    axios.put(`https://dull-plum-parrot-boot.cyclic.app/user/cartitem/${id}`, data, {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "include",
            "Authorization": `Bearer ${localStorage.getItem("TokenID")}`,
        }
    }).then((data) => {
        dispatch({
            type: "GETCARTDATA",
            payload: data.data.cartItem
        })
    })
      
}     
