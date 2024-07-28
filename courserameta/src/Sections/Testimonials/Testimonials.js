import './Testimonials.css';
import React from "react";
import Section from "../Section";
import TestimonialsReview from "../../Component/TestimonialsReview/TestimonialsReview";
import { Box, Center, Heading } from "@chakra-ui/react";

const reviews = [
  {
    name: "Sam",
    rating: "Best food",
    star: 5,
    getProfileImg: () => require("../../icons_assets/sampleProfile.jpg"),
  },
  {
    name: "Steve",
    rating: 'Amazing dinner',
    star: 5,
    getProfileImg: () => require("../../icons_assets/sampleProfile.jpg"),
  },
  {
    name: "Sal",
    rating: "The best",
    star: 5,
    getProfileImg: () => require("../../icons_assets/sampleProfile.jpg"),
  },
  {
    name: "Steve",
    rating: "Nice Food",
    star: 4,
    getProfileImg: () => require("../../icons_assets/sampleProfile.jpg"),
  }
];

const Testimonials = () => {
  return (
    <div class='testimonialsSection'>
        <Section>
        <Heading as="h1" margin='auto'>
          Testimonials
        </Heading>
        <div class="container">
            {reviews.map((review) => (
                <TestimonialsReview
                  key={review.name}
                  name={review.name}
                  rating={review.rating}
                  star={review.star}
                  profileimg={review.getProfileImg()}
                />
            ))}
        </div>
        </Section>
    </div>
  );
};

export default Testimonials;
