import './TestimonialsReview.css';
import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const TestimonialsReview = ({ name, rating, star, profileimg }) => {

    function getStar(n) {
        var starList = [];
        for (var i = 0; i < n; i++) {
            starList.push(<FontAwesomeIcon icon={faStar} size="1x"/>);
        }
        return starList;
    }

    return <div className='testimonialsReview'>
      <VStack spacing={3} padding={'1em'} paddingRight={'2em'}  alignItems={'left'}>
        <h3 className='rating'>"{rating}"</h3>
        <HStack spacing={5}  alignItems="center">
            <img
                src={profileimg}
                alt={name}
            />
          <h2 className='name'>{name}</h2>
        </HStack>
        <HStack   alignItems="left">
            {getStar(star)}
        </HStack>
      </VStack>
    </div>
};

export default TestimonialsReview;