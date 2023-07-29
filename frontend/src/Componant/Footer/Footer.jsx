import React from "react";
import "./Footer.css";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import img1 from "../../Images/img11.svg";
import img2 from "../../Images/img12.svg";
import img3 from "../../Images/img13.png";
import img4 from "../../Images/img14.png";
import img5 from "../../Images/img15.png";
import img6 from "../../Images/img16.png";
import img7 from "../../Images/img17.png";
import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Box id="Container">
        <Box id="dowloadeappcontainer">
          <img src={img5} alt="img" id="img1" />
        </Box>
        <Box id="container2">
          <Heading as={"h1"}>Download The App</Heading>
          <Text id="downloadtext">
            Enter your phone number to receive a text
          </Text>
          <Text id="downloadtext">with a link to download the app</Text>

          <Box id="Container3">
            <Box id="Container31" rounded={"full"}>
              <FaGooglePlay />
              Android
            </Box>
            <Box id="Container32" rounded={"full"}>
              <FaApple />
              IPhone
            </Box>
          </Box>
          <Box id="Container4">
            <Input
              type="text"
              variant="unstyled"
              id="Container41"
              placeholder="Enter Your Mobile number"
            />
          </Box>
          <Box>
            <Button id="Container5" colorScheme={"teal"}>
              SUBMIT
            </Button>
          </Box>
          <Box id="Container6">
            Available on <img src={img6} alt="img" />
            <img src={img7} alt="img" />
          </Box>
        </Box>
      </Box>
      <Box id="Card">
        <Box id="footer_imgDiv">
          <img src={img1} alt="img" id="footer_img" />
        </Box>

        <Box id="Footer_Card">
          <Box>
            <Box id="footer_card_1">
              <Box id="footer_card_2">
                <img src={img2} alt="img" id="footer_card_3" />
                <Text>
                  Order online vegetables and fruits directly from the farm.
                  Fraazo is online platform that allows customer to get farm
                  fresh produce directly from farmers.
                </Text>
              </Box>
              <Box id="footer_Card_4">
                <Heading as={"h3"} id="footer_card_5">
                  Useful Links
                </Heading>
                <Box>Privacy Policy</Box>
                <Box>FAQ</Box>
                <Box>Terms and Conditions</Box>
              </Box>
              <Box id="footer_card_7">
                <Heading as={"h3"} id="footer_card_5">
                  Cities We Serve
                </Heading>

                <Box>Pune</Box>
                <Box>Mumbai</Box>
                <Box>Bangalore</Box>
                <Box>Delhi</Box>
                <Box>Hyderabad</Box>
                <Box>Noida</Box>
                <Box>Gurugram</Box>
              </Box>
              <Box id="footer_card_8">
                <Heading as={"h3"} id="footer_card_5">
                  Connect with us
                </Heading>

                <Box id="footer_card_9">
                  <HiOutlineMail id="footer_card_10" />
                  support@fraazo.com
                </Box>

                <Box>
                  102, We Work Vijay Diamond, A3 and B2, Cross Road B, MIDC,
                  Andheri (East), Mumbai City MH 400093.
                </Box>
                <Box>
                  <Heading as={"h3"} id="footer_card_5">
                    Download The App
                  </Heading>
                  <Box id="footer_card_6">
                    <img src={img3} alt="img" />
                    <img src={img4} alt="img" />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box id="footer_card_11">
              <Heading as={"h1"} id="footer_card_12">
                Fresh Fruits and Vegetables Grocery Shopping Online
              </Heading>
              <Text>
                The quality of fruits & vegetables is synonymous with its
                freshness, while getting fresh fruits and vegetables is a
                tedious task at times but with Fraazo you can get it delivered
                at your doorstep. Fraazo brings a wide range of farm fresh
                fruits, vegetables and dairy products to you, all in just a
                click. We currently serve about more than 3lacs+ happy customers
                in Mumbai, Navi Mumbai, Thane, Kalyan-Dombivli and Virar. Fraazo
                has made online shopping of fresh produce much easier with its
                hassle-free home delivery options. You can choose the delivery
                slot as per your choice and schedule your order accordingly. Or
                you can simply opt for the option of 90 mins Express Delivery
                and get your order delivered in not more than 90 mins. The farm
                fresh fruits and vegetables on Fraazo are available at best
                prices compared to other vendors & supermarkets. Plus with so
                many exciting offers, one can save up to 20% on their Monthly
                grocery budgets. No need to wait in long queues in crowded
                supermarkets or local mandis for getting the best prices on
                veggies. Kick the stress out & just Fraazo your dose of
                freshness with savings at the comfort of your home. Fraazo
                directly sources fresh fruits and veggies from an extensive
                network of farmers across Maharashtra, hence bringing you fresh
                produce straight from farm to table in less than 12 hours. With
                our Safe & Hygienic packaging and minimal multiple handling, we
                ensure you get the best quality fresh produce.
              </Text>
              <Text>
                The fruits and vegetables are 100% hand-picked fresh from farm,
                while some products are hydroponically-grown. The wide range of
                fruits and veggies on Fraazo include more than 100+ farm fresh
                vegetables and fruits, starting from regular veggies like dudhi,
                cauliflower, beetroot, cabbage, etc. to exotic veggies like
                broccoli, lettuce etc. We also provide the essential vegetable
                combos like Onion, Potato, Tomato Combo, Salad Combo, Fresh
                Cut-Veg Combos or Fruit Combos like Banana, Apple Combo, & more.
                There are a lot of exciting deals on vegetables & fruits, every
                day of the week, the major highlights being Monday Mandi, Veggie
                Wednesday, Freelivery Thursday & Fruit Friday.For payments, you
                can choose from the multiple payment options as Fraazo accepts
                Debit card, Credit card, UPI options like iMobile, Google Pay,
                8+ e-Wallet options like Phonepe, JioPay, MobiKwik, Sodexo,
                NetBanking and Cash on Delivery (COD). If you ever have an issue
                with missing items or any quality issue, you can raise your
                concern with us in 48 hrs & we shall refund/ replace your
                product with “no-questions-asked-policy”. You can simply connect
                with our Customer Support team via Chat Support or Call on
                9152291522.
              </Text>
            </Box>
            <Box id="copyright">
              © Copyrights 2022-2023. Fraazo. All Rights Reserved.
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
