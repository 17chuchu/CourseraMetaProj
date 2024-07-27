import './Card.css';
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, price, description, imageSrc }) => {
    return <div className='card'>
      <VStack spacing={5} padding={'1em'}  alignItems={'left'}>
        <img
          src={imageSrc}
          alt={title}
        />
        <HStack spacing={8} justifyContent="space-between" alignItems="center">
          <h2>{title}</h2>
          <h3>${price}</h3>
        </HStack>
        <h4>{description}</h4>
        <HStack spacing={2}>
          <a href="#">Order a delivery</a>
          <FontAwesomeIcon icon={faMotorcycle} size="1x"/>
        </HStack>
      </VStack>
    </div>
};

export default Card;