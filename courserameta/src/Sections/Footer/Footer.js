import './Footer.css';
import React from "react";
import {Box, Flex} from "@chakra-ui/react";
import { HStack,VStack, Stack } from "@chakra-ui/react";
import logo from "../../icons_assets/logoLong.png";

const doormatNavigation = ['Home','About','Menu','Reservations','Order Online','Login']
const contact = ['Address','Phone number','Email']
const socialMediaLink = ['Address','Phone number', 'Email']

const Footer = () => {
  function generateList(title,inputList){
      var linkLists = [];
      inputList.forEach(member => {
        linkLists.push(
          <li>
              <a href={'/#project'} >
                  {member}
              </a>
          </li> 
        )
      });
      return <VStack spacing={1} alignItems="left">
          <h3>{title}</h3>
          {linkLists}
        </VStack>
  }

  return (
    <div className='footerSection'>
      <footer>
      <HStack
            px={16}
            py={4}
            justifyContent="space-between"
            alignItems="center"
      >
        <img src={logo} alt="logo"/>
      <Stack spacing={10} direction='row'>
        {generateList('Doormat Navigation',doormatNavigation)}
        {generateList('Contact', contact)}
        {generateList('Social Media Links', socialMediaLink)}
      </Stack>
      </HStack>
    </footer>
    </div>
  );
};
export default Footer;
