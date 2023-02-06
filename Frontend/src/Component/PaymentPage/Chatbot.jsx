import React from 'react'
import {Segment} from "semantic-ui-react"
import ChatBot from "react-simple-chatbot"
const Chatbot = () => {
    const steps=[
        {
            id:'Greet',
            message:'Hello,welcome to ShopDress up',
            trigger:'Ask name'
        },
        {
            id:"Ask name",
            message:'please enter your name',
            trigger:'waiting1'
        },
        {
            id:'waiting1',
            user:true,
            trigger:'Name'
        },{
            id:'Name',
            message:'Hi, {previousValue},Please select your issue',
            trigger:'issues'
        },{
            id:'issues',
            options:[{value:'Shipping Details',label:"Shipping Details",trigger:"Shipping Details"},
            {value:'Address Change',label:"Address Change",trigger:"Address Change"}]
        },{
            id:"Shipping Details",
            message:"Thanks for telling issue we will provide your update on registered mobile number",
            end:true
        }
        ,{
            id:"Address Change",
            message:"Thanks for telling issue we will provide your update on registered mobile number.Thankyou",
            end:true
        }

    ]
  return (
    <div>
       <Segment zIndex="1" float={"left"} >
        <ChatBot  steps={steps} />
       </Segment>
    </div>
  )
}

export default Chatbot