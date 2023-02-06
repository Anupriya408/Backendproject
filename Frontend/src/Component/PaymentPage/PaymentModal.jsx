import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import Carddetails from './Carddetails'
import Chatbot from './Chatbot'
import PaymentPage from './PaymentPage'
import image from "./images/chat_logo.png"
export function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(()=>{
    // onOpen()
  },[])
  return (
    <>
      {/* <Button   border={"none"} width="45px" backgroundColor={"white"}></Button> */}
<img style={{width:"89px",height:"80px",position:"fixed", bottom:"5%", left:"2%"}} onClick={onOpen} src={image}/>
      <Modal isOpen={isOpen} onClose={onClose} size={''}>
        <ModalOverlay />
        <ModalContent  width={"0px"} height={"10px"} position="fixed" left="3%"  top="2%">
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          <ModalBody height={"800px"} >
            <Chatbot />
          <ModalCloseButton  bg="#6e48aa"  color="white" position="absolute"  left="375px" zIndex="10"/>
          {/* <button style={{border:"1px solid red", position:"absolute",  marginLeft:"500px", zIndex:"10"}}>CLOSE</button> */}
          </ModalBody> 

          {/* <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  )
}