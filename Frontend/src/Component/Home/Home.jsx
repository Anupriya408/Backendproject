import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import "./Home.css";
const data = [
  {
    Image:"https://cdn.shopify.com/s/files/1/0339/0901/collections/Exclusives_block_360x.jpg?v=1669385965",
    Image1:"https://cdn.shopify.com/s/files/1/0339/0901/collections/NEW_SWEATERS_360x.jpg?v=1669225841",
    text: "Quick View",
  },
  {
    Image:"https://cdn.shopify.com/s/files/1/0339/0901/collections/NEW_SWEATERS_360x.jpg?v=1669225841",
    Image1:"https://cdn.shopify.com/s/files/1/0339/0901/collections/Exclusives_block_360x.jpg?v=1669385965",
    text: "Quick View",
  },
  {
    Image:"https://cdn.shopify.com/s/files/1/0339/0901/collections/Screen_Shot_2022-11-08_at_11.14.23_AM_360x.jpg?v=1669225344",
    Image1:"https://cdn.shopify.com/s/files/1/0339/0901/collections/8273D5C1-FD21-4EA6-9B26-72A01CB8C2BC_360x.jpg?v=1669225867",
    text: "Quick View",
  },
  {
    Image1:"https://cdn.shopify.com/s/files/1/0339/0901/collections/Screen_Shot_2022-11-08_at_11.14.23_AM_360x.jpg?v=1669225344",
    Image:"https://cdn.shopify.com/s/files/1/0339/0901/collections/8273D5C1-FD21-4EA6-9B26-72A01CB8C2BC_360x.jpg?v=1669225867",
    text: "Quick View",
  },
];
const cardData = [
  {
    Image:"https://cdn.shopify.com/s/files/1/0339/0901/collections/30_BELOW_250x.jpg?v=1669229916",
    text: "Quick View",
  },
  {
    Image:"https://cdn.shopify.com/s/files/1/0339/0901/collections/50_BELOW_360x.jpg?v=1669229916",
    text: "Quick View",
  },
  {
    Image: "https://cdn.shopify.com/s/files/1/0339/0901/collections/100.jpg?v=1669229916",
    text: "Quick View",
  },
  {
    Image: "	https://cdn.shopify.com/s/files/1/0339/0901/collections/for_her_360x.jpg?v=1669230002",
    text: "Quick View",
  },
];
export default function Home() {
  const [state, setState] = useState([]);
  const [cardstate, cardsetState] = useState([]);
  useEffect(() => {
    setState(data);
    cardsetState(cardData);
  }, []);

  return (
    <div>
      <Box className="bottom__banner">
        <img
          width={"100%"}
          src="https://cdn.shopify.com/s/files/1/0339/0901/files/New_Site_Hero_Sample_2_1512x.jpg?v=1669406453"
          alt=""
        />
      </Box>
      <Box fontSize={25} fontWeight={400} textAlign={"center"}>
        Womens Dress Boutique
      </Box>
      <Box p={5} mb={70}>
        <Grid templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)","repeat(4, 1fr)"]} gap={6}>
          {state.map((ele, i) => {
            return (
              <GridItem key={i} w="100%" className="grid__box">
                <img src={ele.Image} alt="" className="img__width" />
                <a className="img__btn">{ele.text}</a>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
      <Box p={1}>
        <Box className="type-banner__text">
          <Text fontSize={25} fontWeight={400}>
            BUY ONLINE & PICK UP IN STORE
          </Text>
          <Text fontSize={18} ml={30}>
            select “store pick up” at checkout + pick up same day!
          </Text>
        </Box>
        <Box>
        <Grid templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)"]} gap={1}>
          <GridItem className="right__img img__body">
            <img
              src="https://cdn.shopify.com/s/files/1/0339/0901/files/ED3D86B1-A275-45C8-AE5C-68C6338F67A2_720x.jpg?v=1669407186"
              alt=""
            />
            <div className="promo-grid__content">
              <div className="promo-grid__text">
                <div className="rte--em">NEW FOR DAY 2</div>
                <div className="rte--block rte--strong ">COZY JACKETS</div>
                <a href="/collections/new-arrivals" className="btn btn--inverse">
                  SHOP NOW
                </a>
              </div>
            </div>
          </GridItem>
          <GridItem className="left__img img__body">
            <img
              src="https://cdn.shopify.com/s/files/1/0339/0901/files/FA73F7E2-1FF0-433F-8183-279EA4ADF374_720x.jpg?v=1669407163"
              alt=""
            />
            <div className="promo-grid__content">
              <div className="promo-grid__text">
                <div className="rte--block rte--em">NEW FOR DAY 2</div>
                <div className="rte--block rte--strong">COZY JACKETS</div>
                <a href="/collections/new-arrivals" className="btn btn--inverse">
                  SHOP NOW
                </a>
              </div>
            </div>
          </GridItem>
        </Grid>
        </Box>
      </Box>
      <Box className="bottom__banner">
        <img
          width={"100%"}
          src="https://cdn.shopify.com/s/files/1/0339/0901/files/EXCLUSIVES_BANNER_1512x.jpg?v=1669386825"
          alt=""
        />
        <div className="bottom__banner__txt">
              <div className="promo-grid__text">
                <div className="rte--em">new today</div>
                <div className="rte--block rte--strong "> HOLIDAY DU EXCLUSIVES</div>
                <a href="/collections/new-arrivals" className="btn btn--inverse">
                  SHOP NOW
                </a>
              </div>
            </div>
      </Box>
      <Box className="type-banner__text">
          <Text fontSize={25} fontWeight={400}>
          BUY HER A GIFT CARD
          </Text>
          <Text fontSize={18} ml={30}>
          SHOP GIFT CARDS
          </Text>
      </Box>
      <Box className="bottom__banner">
        <img
          width={"100%"}
          src="https://cdn.shopify.com/s/files/1/0339/0901/files/DU_Holiday_1512x.jpg?v=1669229018"
          alt=""
        />
      </Box>
      <Box p={5} mb={70}>
        <Grid templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)","repeat(4, 1fr)"]} gap={6}>
          {cardData.map((ele, i) => {
            return (
              <GridItem key={i} w="100%" className="grid__box">
                <img src={ele.Image} alt="" className="img__width" />
                <a className="img__btn">{ele.text}</a>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
      <Box className="type-banner__text">
          <Text fontSize={25} fontWeight={400}>
          THIS JUST IN!
          </Text>
       </Box>
      <Box p={5} mb={70}>
        <Grid className="product__card" templateColumns={["repeat(1, 1fr)","repeat(2, 1fr)","repeat(4, 1fr)"]} gap={6}>
          {state.map((ele, i) => {
            return (
              <GridItem key={i} w="100%" className={"grid__box"+i}>
                <div className="flip-box">
                    <div className="flip-box-inner">
                      <div className="flip-box-front">
                      <img src={ele.Image} alt="" className="img__width" />
                      </div>
                      <div className="flip-box-back">
                        <img src={ele.Image1} alt="" className="img__width" />
                      </div>
                    </div>
                  </div>
                <a className="img__btn product__btn">{ele.text}</a>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}
