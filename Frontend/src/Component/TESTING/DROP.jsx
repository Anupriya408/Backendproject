import {
  useDisclosure,
  useMediaQuery,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  useColorModeValue,
  Container,
  Box,
  AccordionButton,
  Accordion,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Text,
  Button,
  background,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Toast,
} from "@chakra-ui/react";
import LINEMENU from "./Funcations.Nav/OpenClose";
import { BiSearch, BiShoppingBag } from "react-icons/bi";
import CARTMENU, { SearchDiv, SearchBar } from "../Cart/Cartt";
import "./Drop.css";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FiMenu, FiSearch, FiX } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { BiArrowFromRight } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import Login from "../Login/Login";
import React, { useState } from "react";
// import {Display} from "../ProductPages/Plist"
import { GoogleLogout } from "react-google-login";
import jwt_decode from "jwt-decode";
export default function Navbar() {
  const { isOpen: isLogout, onOpen: onOpenLogout, onClose: onCloseLogout } = useDisclosure()
  const cancelRef = React.useRef()
  const [userName, setUserName] = useState('User !')
  let dispatch = useDispatch();
  const navigate = useNavigate()
  let Search =
    useSelector((state) => {
      return state.ShopDressReducer.Search;
    }) || [];
  const [isLargerThan1144] = useMediaQuery("(min-width: 1050px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();
  const {
    isOpen: isOpen3,
    onOpen: onOpen3,
    onClose: onClose3,
  } = useDisclosure();
  // console.log(Search);

  function Display() {
    function Displayy(state) {
      return (
        <div className="list-itemm">
          {state.map((e) => {
            return (
              <>
                <div>
                  <div className="image-boxx">
                    <div className="imageshoww">
                      <img src={e.image_1} alt="" />
                      <div className="imagehidee">
                        <img src={e.image_2} className="hover-imgg" alt="" />
                        <Link to="" className="quickView">
                          Quick View
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="a-text-detailss">
                    <p>{e.name}</p>
                    <p>$ {e.price}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      );
    }
    return Displayy(Search);
  }
  const myFunction=()=> {
    let token  = localStorage.getItem('TokenID')
    document.getElementById("myDropdown").classList.toggle("show");
    // setUserName(localStorage.getItem('userName') ? localStorage.getItem('userName') : 'User !')
    if(token){
      var decoded = jwt_decode(token);
      setUserName(decoded.name)
    }else{
      setUserName('User !')
    }
  }
  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  const {
    isOpen: isOpen4,
    onOpen: onOpen4,
    onClose: onClose4,
  } = useDisclosure();
  const {
    isOpen: isOpen5,
    onOpen: onOpen5,
    onClose: onClose5,
  } = useDisclosure();
  const {
    isOpen: isOpen6,
    onOpen: onOpen6,
    onClose: onClose6,
  } = useDisclosure();
  const {
    isOpen: isOpen7,
    onOpen: onOpen7,
    onClose: onClose7,
  } = useDisclosure();

  // padding: 1%;
  // border: 1px solid black;
  // width: 100%;
  // /* display: grid; */
  // text-align: center;
  // gap: 20px;
  /* grid-template-columns: repeat(auto-fill,minmax(300px,1fr)); */
  const logOutConfirm = () => {
    localStorage.clear()
    onCloseLogout()
    navigate('/')
  }
  return (
    <>
    {/* <Box zIndex="1" > */}
      <Box id="SearchDi">
        <Box
          bg="white"
          h="50px"
          borderRadius="10px"
          w="80%"
          m="auto"
          mt="63px"
          background="#115c11"
          display="flex"
          alignItems="center"
          justifyContent="space-around"
        >
          {" "}
          <FiSearch
            position="relative"
            fontSize="30px"
            color="white"
            padding="10px"
          />
          <input
            type="text"
            style={{
              width: "92%",
              height: "50px",
              fontSize: "25px",
              border: "none",
              fontWeight: "400",
            }}
            onChange={() => {
              SearchBar(dispatch);
            }}
            id="inputSearch"
            placeholder="  Search here ..."
          />{" "}
          <FiX
            fontSize="32px"
            color="white"
            cursor="pointer"
            onClick={()=>{SearchDiv(dispatch)}}
          />
        </Box>
        <Box
          bg="white"
          h="70%"
          borderRadius="10px"
          w="80%"
          m="auto"
          mt="30px"
          overflowY="scroll"
        >
          {Search.length == 0 ? (
            <Box
              display="flex"
              justifyContent="space-around"
              alignItems="center"
            >
              {" "}
              <img src="https://media.baamboozle.com/uploads/images/94038/1597523199_58366" />{" "}
            </Box>
          ) : (
            <div
              id="Boxxxxx"
              style={{
                padding: "1%",
                width: "100%",
                display: "grid",
                gap: "20px",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))",
              }}
            >
              {Search.map((e) => {
                return (
                  <>
                    <div>
                      <div className="image-boxx">
                        <div className="imageshoww">
                          <img src={e.image_1} alt="" />
                          <div className="imagehidee">
                            <img
                              src={e.image_2}
                              className="hover-imgg"
                              alt=""
                            />
                            <Link
                              to={`/Productspage/${e.id}`}
                              className="quickVieww"
                            >
                              Quick View
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div className="a-text-detailss">
                        <p>{e.name}</p>
                        <p>$ {e.price}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          )}
        </Box>
      </Box>
      <Box bg="green" h="35px">
        <h1 id="Nav_heading"> 30% OFF EVERYTING WITH CODE : CYBER30 </h1>
      </Box>
      <Box  zIndex="1"
        position="sticky" bg="white" top="0%" >
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        pt="20px"
        pb="15px"
        fontSize="31px"
        id="LOGODIV"
        // border="3px solid black"
       
      >
        {isLargerThan1144 ? "" : <FiMenu cursor="pointer" onClick={LINEMENU} />}
        <BiSearch cursor="pointer" onClick={()=>{SearchDiv(dispatch)}} />
        <img
          src="https://cdn.shopify.com/s/files/1/0339/0901/files/Peach-Black-DU-Logo_160x.png?v=1631144136"
          alt=""
          id="Main_Logo"
        />
        <span style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          {/* <FaUser cursor="pointer" /> <BiShoppingBag cursor="pointer"  /> */}

          {/* <Login cursor="pointer" />  */}
          <div className="dropdown">
            <Button onClick={myFunction} className="dropbtn">
              <FaUser onClick={myFunction} size={22} cursor="pointer"   />
            </Button>
            <Box p={'10px'} textAlign={'center'} id="myDropdown" className="dropdown-content">
              <Text fontSize={'lg'} color={'green.500'}>Hi ,{userName}</Text>
              
              {/* {userName != 'User !' ? <Button className="logoutbtn" color={'white'} w={'90%'} borderRadius={'none'} py={'2px'} bg={'red'} onClick={onOpenLogout}>LOGOUT</Button> : <Login />} */}
              {userName != 'User !' ?  
              <GoogleLogout className="google__btn"  
                buttonText="Logout"
                onLogoutSuccess={onOpenLogout}
              clientId="500852971355-6upomadqd80rkj5hdbqf8j7pl07q8kpq.apps.googleusercontent.com"
              disabled={false}
              >
              </GoogleLogout> 
              
              : <Login />}
            </Box>
          </div>


          <AlertDialog
            isOpen={isLogout}
            leastDestructiveRef={cancelRef}
            onClose={onCloseLogout}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                  Shopdressup
                </AlertDialogHeader>

                <AlertDialogBody>
                  Are you sure? You want to Logout.
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelRef} onClick={onCloseLogout}>
                    Cancel
                  </Button>
                  <Button colorScheme='red' onClick={logOutConfirm} ml={3}>
                    Logout
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
          <BiShoppingBag cursor="pointer" onClick={CARTMENU} />
        </span>
      </Box>
      <Box display="flex" justifyContent="center" id="MenuSpans">
        {isLargerThan1144 ? (
          <>
            {" "}
            <Menu isOpen={isOpen}>
              <MenuButton></MenuButton>
              <span
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                className="list_Buttons"
              >
                Black Friday
              </span>
              <MenuList
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                border="none"
                h="10px"
                fontSize="14px"
                gap="0"
                borderRadius="0%"
                ml="-170px"
                bg="black"
                zIndex="2"
              >
                <Box
                  background="white"
                  width="220%"
                  color="black"
                  display="flex"
                  mt="-6%"
                  justifyContent="space-around"
                  pt="17px"
                >
                  <Box display="flex" flexDirection="column">
                    <h2 fontSize="19px">
                      <b> SHOP BY CATEGORIES</b>
                    </h2>
                    <Link className="Links" to="/Productspage">
                      Luxe Looks Collection
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Christmas Graphics
                    </Link>
                    <Link className="Links" to="/Productspage">
                      {" "}
                      Party Shop
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Gift Cards
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Cozy Gifts
                    </Link>
                    <Link className="Links" to="/Productspage">
                      {" "}
                      Gift Ideas For Her
                    </Link>
                    <Link className="Links" to="/Productspage">
                      {" "}
                      Loungewear
                    </Link>
                  </Box>
                  <Box display="flex" flexDirection="column">
                    <h2 fontSize="19px">
                      <b> HOLIDAY DEALS</b>
                    </h2>
                    <Link className="Links" to="/Productspage">
                      50% Off{" "}
                    </Link>
                    <Link className="Links" to="/Productspage">
                      50% Off Holiday Deals
                    </Link>
                    <Link className="Links" to="/Productspage">
                      $16 Basics
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Gifts Under $100
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Gifts Under $50
                    </Link>
                    <Link className="Links" to="/Productspage">
                      {" "}
                      Gifts Under $30
                    </Link>
                  </Box>
                </Box>
              </MenuList>
            </Menu>
            <Menu isOpen={isOpen2}>
              <MenuButton></MenuButton>
              <span
                onMouseEnter={onOpen2}
                onMouseLeave={onClose2}
                className="list_Buttons"
              >
                Holiday Shop
              </span>
              <MenuList
                onMouseEnter={onOpen2}
                onMouseLeave={onClose2}
                border="none"
                h="10px"
                fontSize="14px"
                gap="0"
                borderRadius="0%"
                ml="-340px"
                bg="black"
                zIndex="2"
              >
                <Box
                  background="white"
                  width="220%"
                  display="flex"
                  mt="-3%"
                  justifyContent="space-around"
                  pt="17px"
                >
                  <Box display="flex" flexDirection="column">
                    <h2 fontSize="19px">
                      <b> HOLIDAY CUSTOMS</b>
                    </h2>
                    <Link className="Links" to="/Productspage">
                      Christmas
                    </Link>
                    <Link className="Links" to="/Productspage">
                      USA
                    </Link>
                  </Box>
                  <Box display="flex" flexDirection="column">
                    <h2 fontSize="19px">
                      <b> GAME DAY</b>
                    </h2>
                    <Link className="Links" to="/Productspage">
                      Alanta{" "}
                    </Link>
                    <Link className="Links" to="/Productspage">
                      UGA
                    </Link>
                  </Box>

                  <Box display="flex" flexDirection="column">
                    <h2 fontSize="19px">
                      <b> FAITH COLLECTION</b>
                    </h2>
                    <Link className="Links" to="/Productspage">
                      Alanta{" "}
                    </Link>
                    <Link className="Links" to="/Productspage">
                      UGA
                    </Link>
                  </Box>
                  <Box display="flex" flexDirection="column">
                    <h2 fontSize="19px">
                      <b> CITY CUSTOMS</b>
                    </h2>
                    <Link className="Links" to="/Productspage">
                      Nashville
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Charleston
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Savannah
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Greenville
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Dahlonega
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Nashville
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Charleston
                    </Link>
                  </Box>
                  <Box display="flex" flexDirection="column">
                    <h2 fontSize="19px">
                      <b> CUSTOM ACCESSORIES</b>
                    </h2>
                    <Link className="Links" to="/Productspage">
                      Custom Hats
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Stickers
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Buttons
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Koozies
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Tote Bags
                    </Link>
                  </Box>
                </Box>
              </MenuList>
            </Menu>
            <Menu isOpen={isOpen3}>
              <MenuButton></MenuButton>
              <span
                onMouseEnter={onOpen3}
                onMouseLeave={onClose3}
                className="list_Buttons"
              >
                Clothing
              </span>
              <MenuList
                onMouseEnter={onOpen3}
                onMouseLeave={onClose3}
                border="none"
                h="10px"
                fontSize="14px"
                gap="0"
                borderRadius="0%"
                ml="-270px"
                bg="black"
                zIndex="2"
              >
                <Box
                  background="white"
                  width="220%"
                  display="flex"
                  mt="-5%"
                  justifyContent="space-around"
                  pt="17px"
                >
                  <Box display="flex" flexDirection="column">
                    <h2 fontSize="19px">
                      <b>TOPS</b>
                    </h2>
                    <Link className="Links" to="/Productspage">
                      All Tops
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Casual Tops
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Graphic Tees
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Tunics
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Shirt & Blouses
                    </Link>
                    <Link className="Links" to="/Productspage">
                      {" "}
                      Tees
                    </Link>
                    <Link className="Links" to="/Productspage">
                      {" "}
                      Sweaters & Knits
                    </Link>
                  </Box>
                  <Box display="flex" flexDirection="column">
                    <h2 fontSize="19px">
                      <b>ALL BOTTOMS </b>
                    </h2>
                    <Link className="Links" to="/Productspage">
                      Denim
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Skirts
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Pants
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Leggings
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Shorts
                    </Link>
                  </Box>
                  <Box display="flex" flexDirection="column">
                    <h2 fontSize="19px">
                      <b>DRESSES </b>
                    </h2>
                    <Link className="Links" to="/Productspage">
                      All Dresses
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Mini Dresses
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Midi Dresses
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Maxi Dresses
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Rompers & Jumpsuits
                    </Link>
                    <Link className="Links" to="/Productspage">
                      {" "}
                      Casual Dresses
                    </Link>
                  </Box>
                </Box>
              </MenuList>
            </Menu>
            <Menu isOpen={isOpen4}>
              <MenuButton></MenuButton>
              <span
                onMouseEnter={onOpen4}
                onMouseLeave={onClose4}
                className="list_Buttons"
              >
                New Arrivals
              </span>
              <MenuList
                onMouseEnter={onOpen4}
                onMouseLeave={onClose4}
                border="none"
                h="10px"
                fontSize="14px"
                gap="0"
                borderRadius="0%"
                ml="-450px"
                bg="black"
                zIndex="2"
              >
                <Box
                  background="white"
                  width="220%"
                  display="flex"
                  mt="-4%"
                  justifyContent="space-around"
                  pt="17px"
                >
                  <Box display="flex" flexDirection="column">
                    <h2 fontSize="19px">
                      <b> ALL New</b>
                    </h2>
                    <Link className="Links" to="/Productspage">
                      New Tops
                    </Link>
                    <Link className="Links" to="/Productspage">
                      New Dresses
                    </Link>
                    <Link className="Links" to="/Productspage">
                      New Bottoms
                    </Link>
                    <Link className="Links" to="/Productspage">
                      New Rompers & Jumpsuits
                    </Link>
                    <Link className="Links" to="/Productspage">
                      New Accesories
                    </Link>
                  </Box>
                  <Box display="flex" flexDirection="column">
                    <h2 fontSize="19px">
                      <b> DU EXCLUSIVE</b>
                    </h2>
                    <Link className="Links" to="/Productspage">
                      Game DAy
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Nashville
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Charleston
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Savannah
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Greenville
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Dahlonega
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Hats
                    </Link>
                  </Box>
                  <Box display="flex" flexDirection="column">
                    <h2 fontSize="19px">
                      <b> SHOP BY COLLECTION</b>
                    </h2>
                    <Link className="Links" to="/Productspage">
                      FAll Lookbook
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Fall Flannels
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Game DAy
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Matching Sets
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Babydoll Fits
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Restocks
                    </Link>
                    <Link className="Links" to="/Productspage">
                      The Basic Shop
                    </Link>
                  </Box>
                </Box>
              </MenuList>
            </Menu>
            <Menu isOpen={isOpen5}>
              <MenuButton></MenuButton>
              <span
                onMouseEnter={onOpen5}
                onMouseLeave={onClose5}
                className="list_Buttons"
              >
                Dress
              </span>
              <MenuList
                onMouseEnter={onOpen5}
                onMouseLeave={onClose5}
                border="none"
                h="10px"
                fontSize="14px"
                gap="0"
                borderRadius="0%"
                ml="-470px"
                bg="black"
                zIndex="2"
              >
                <Box
                  background="white"
                  width="220%"
                  display="flex"
                  mt="-5.5%"
                  justifyContent="space-around"
                  pt="17px"
                >
                  <Box display="flex" flexDirection="column">
                    <h2 fontSize="19px">
                      <b> ALL DRESS</b>
                    </h2>
                    <Link className="Links" to="/Productspage">
                      Sale Dresses
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Sale Rompers & Jumpsuits
                    </Link>
                    <Link className="Links" to="/Productspage">
                      {" "}
                      Sale Tops
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Sale Bottoms
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Sale Shoes
                    </Link>
                    <Link className="Links" to="/Productspage">
                      {" "}
                      Sale Accessories
                    </Link>
                    <Link className="Links" to="/Productspage">
                      {" "}
                      Last Call Sales
                    </Link>
                  </Box>
                  <Box display="flex" flexDirection="column">
                    <h2 fontSize="19px">
                      <b> DRESS BY DISCOUNT</b>
                    </h2>
                    <Link className="Links" to="/Productspage">
                      Under $20
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Under $15
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Under $10
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Under $5{" "}
                    </Link>
                  </Box>
                </Box>
              </MenuList>
            </Menu>
            <Menu isOpen={isOpen6}>
              <MenuButton></MenuButton>
              <span
                onMouseEnter={onOpen6}
                onMouseLeave={onClose6}
                className="list_Buttons"
              >
                Accessories
              </span>
              <MenuList
                onMouseEnter={onOpen6}
                onMouseLeave={onClose6}
                border="none"
                h="10px"
                fontSize="14px"
                gap="0"
                borderRadius="0%"
                ml="-170px"
                bg="black"
                zIndex="2"
              >
                <Box
                  background="white"
                  width="220%"
                  display="flex"
                  mt="-8%"
                  justifyContent="space-around"
                  pt="17px"
                >
                  <Box display="flex" flexDirection="column">
                    <h2 fontSize="19px">
                      <b>ALL ACCESSORIES</b>
                    </h2>
                    <Link className="Links" to="/Productspage">
                      Hats
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Hair Accessories
                    </Link>
                    <Link className="Links" to="/Productspage">
                      HandBags
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Bandeus & Bralettes
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Sunglasses
                    </Link>
                    {/* <Link className="Links"to="/Productspage"> Sale Accessories</Link>
            <Link className="Links" to="/Productspage"> Last Call Sales</Link> */}
                  </Box>
                  <Box display="flex" flexDirection="column">
                    <h2 fontSize="19px">
                      <b> JEWELRY</b>
                    </h2>
                    <Link className="Links" to="/Productspage">
                      Necklaces
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Earings
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Bracelets
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Rings
                    </Link>
                  </Box>
                </Box>
              </MenuList>
            </Menu>
            <Menu isOpen={isOpen7}>
              <MenuButton></MenuButton>
              <span
                onMouseEnter={onOpen7}
                onMouseLeave={onClose7}
                className="list_Buttons"
              >
                Shop
              </span>
              <MenuList
                onMouseEnter={onOpen7}
                onMouseLeave={onClose7}
                border="none"
                h="10px"
                fontSize="14px"
                gap="0"
                borderRadius="0%"
                mr="320px"
                bg="black"
                zIndex="2"
              >
                <Box
                  background="white"
                  width="220%"
                  display="flex"
                  mt="-6.5%"
                  justifyContent="space-around"
                  pt="17px"
                >
                  <Box display="flex" flexDirection="column">
                    <h2>
                      <b> SHOP BY CATEGORY</b>
                    </h2>
                    <Link className="Links" to="/Productspage">
                      New Markdowns
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Sale Dresses
                    </Link>
                    <Link className="Links" to="/Productspage">
                      {" "}
                      Sale Rompers & Jumpsuits
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Sale Tops
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Sale Bottoms
                    </Link>
                    <Link className="Links" to="/Productspage">
                      {" "}
                      Sale Shoes
                    </Link>
                    <Link className="Links" to="/Productspage">
                      {" "}
                      Sale Accessories
                    </Link>
                    {/* <Link className="Links" to="/Productspage"> Last Call Sale</Link> */}
                  </Box>
                  <Box display="flex" flexDirection="column">
                    <h2 fontSize="19px">
                      <b> SHOP BY PRICE</b>
                    </h2>
                    <Link className="Links" to="/Productspage">
                      Under $20
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Under $15
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Under $10
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Under $5{" "}
                    </Link>
                  </Box>
                </Box>
              </MenuList>
            </Menu>
            <Menu
              isOpen={
                isOpen ||
                isOpen2 ||
                isOpen3 ||
                isOpen4 ||
                isOpen5 ||
                isOpen6 ||
                isOpen7
              }
              position="absolute"
              id="ide"
            >
              <MenuList
                bg="white"
                width="580%"
                h="360px"
                m="auto"
                mt="128px"
                zIndex="1"
                ml="28px"
                border="none"
              ></MenuList>{" "}
            </Menu>{" "}
          </>
        ) : (
          <Box id="NavHomeParen">
            <Box id="NavHam" bg="red" h="20px" w="20px">
              {" "}
              <BiArrowFromRight id="CLOSEICON" onClick={LINEMENU} />{" "}
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton bg="green.200">
                      <Box flex="1" textAlign="left">
                        Cyber Monday
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} display="flex" flexDirection="column">
                    <Link className="Links" to="/Productspage">
                      New Markdowns
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Sale Dresses
                    </Link>
                    <Link className="Links" to="/Productspage">
                      {" "}
                      Sale Rompers & Jumpsuits
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Sale Tops
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Sale Bottoms
                    </Link>
                    <Link className="Links" to="/Productspage">
                      {" "}
                      Sale Shoes
                    </Link>
                    <Link className="Links" to="/Productspage">
                      {" "}
                      Sale Accessories
                    </Link>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton bg="red.200">
                      <Box flex="1" textAlign="left">
                        Holiday Shop
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>

                  <AccordionPanel pb={4} display="flex" flexDirection="column">
                    <Link className="Links" to="/Productspage">
                      Under $20
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Under $15
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Under $10
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Under $5{" "}
                    </Link>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton bg="blue.200">
                      <Box flex="1" textAlign="left">
                        EXCLUSIVE
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>

                  <AccordionPanel pb={4} display="flex" flexDirection="column">
                    <Link className="Links" to="/Productspage">
                      Under $20
                    </Link>
                    <Link className="Links" to="/Productspage">
                      New Accesories
                    </Link>

                    {/* <Box display="flex" flexDirection="column"> */}
                    <h2 fontSize="19px">
                      <b> </b>
                    </h2>
                    <Link className="Links" to="/Productspage">
                      Game DAy
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Nashville
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Charleston
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Savannah
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Greenville
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Dahlonega
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Hats
                    </Link>
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton bg="grey">
                      <Box flex="1" textAlign="left">
                        ALL DRESS
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>

                  <AccordionPanel pb={4} display="flex" flexDirection="column">
                    {/* <h2 fontSize="19px"><b> </b></h2> */}
                    <Link className="Links" to="/Productspage">
                      Sale Dresses
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Sale Rompers & Jumpsuits
                    </Link>
                    <Link className="Links" to="/Productspage">
                      {" "}
                      Sale Tops
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Sale Bottoms
                    </Link>
                    <Link className="Links" to="/Productspage">
                      Sale Shoes
                    </Link>
                    <Link className="Links" to="/Productspage">
                      {" "}
                      Sale Accessories
                    </Link>
                    <Link className="Links" to="/Productspage">
                      {" "}
                      Last Call Sales
                    </Link>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
          </Box>
        )}
      </Box>
      </Box>
    
     </>
  
  );
}
