import './HeroSection.css';
import React from "react";
import Section from "../Section";
import { Box, Heading, Text, HStack, Button, VStack } from "@chakra-ui/react";


const heroSectionImg = require('../../icons_assets/restauranfoodSuqare.png');

const HeroSection = () => {
  return (
    <div class='heroSection'>
        <Section verticalSpacing={1}>
        <HStack spacing={8} justifyContent="space-between" alignItems="center">
            <VStack spacing={2} alignItems="left">
                <Heading as="h1" id="projects-section">
                    Little Lemon
                </Heading>
                <Text as="h2">
                Chicago
                </Text>
                <Text as="h3">
                Lorem ipsum dolor sit amet. Sed doloribus esse ab impedit totam qui placeat facilis cum amet officia? Quo magnam expedita est excepturi nesciunt a aperiam natus in iusto sint At fugiat doloremque aut ducimus deleniti aut nihil corrupti.
                </Text>
                <Button size='sm' marginRight='auto' marginTop='20px'>
                    Reserve Table
                </Button>
            </VStack>
            <img
                src={heroSectionImg}
                alt={'Little Lemon'}
            />
        </HStack>
        </Section>
    </div>
  );
};

export default HeroSection;
