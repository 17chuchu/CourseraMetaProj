import React, { useEffect, useState, useRef } from "react";
import logo from "../icons_assets/Logo.svg";
import { Box, HStack } from "@chakra-ui/react";


function Header() {

    const [headerHidden, setHeaderHidden] = useState(true);
    const scrollPositionY = useRef(0);


    const handleScroll = (event) => {
        setHeaderHidden(scrollPositionY.current > window.scrollY)
        console.log(scrollPositionY.current > window.scrollY)
        scrollPositionY.current = window.scrollY
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
        }
    };
      //headerHidden ? "0px" : "-200px"
    return (
        [
        <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        height={'4.5em'}
        transform='auto'
        translateY={"0px"}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        backgroundColor={getComputedStyle(document.body).getPropertyValue('--secondary-gray')}
        >
        <Box color={getComputedStyle(document.body).getPropertyValue('--secondary-black')} maxWidth="1280px" margin="0 auto">
            <HStack
            px={16}
            py={4}
            justifyContent="space-between"
            alignItems="center"
            >
                <HStack spacing={8}>
                    <img src={logo} alt="logo"/>
                </HStack>
                <nav>
                    <ul style={{listStyleType: 'none'}}>
                        <HStack spacing={8}>
                            <li>
                                <a href={'/#project'} onClick={handleClick('projects')}>
                                    Home
                                </a>
                            </li> 
                            <li>
                                <a href={'/#project'} onClick={handleClick('projects')}>
                                    About
                                </a>
                            </li> 
                            <li>
                                <a href={'/#project'} onClick={handleClick('projects')}>
                                    Menu
                                </a>
                            </li> 
                            <li>
                                <a href={'/#project'} onClick={handleClick('projects')}>
                                    Reservations
                                </a>
                            </li> 
                            <li>
                                <a href={'/#project'} onClick={handleClick('projects')}>
                                    Order online
                                </a>
                            </li> 
                            <li>
                                <a href={'/#project'} onClick={handleClick('projects')}>
                                    Login
                                </a>
                            </li> 
                        </HStack>
                    </ul>
                </nav>
            </HStack>
        </Box>
        </Box>,
        <div style={{marginTop: '4.5em'}}></div>
        ]
    );
}

export default Header;
