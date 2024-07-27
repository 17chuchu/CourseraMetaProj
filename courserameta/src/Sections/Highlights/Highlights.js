import './Highlights.css';
import React from "react";
import Section from "../Section";
import { Box, Heading } from "@chakra-ui/react";
import Card from "../../Component/Card/Card";

const dishes = [
  {
    title: "Sirloin Steak",
    price: 12.99,
    description:
      "Lorem ipsum dolor sit amet. Sed doloribus esse ab impedit totam qui placeat facilis cum amet officia? Quo magnam expedita est excepturi nesciunt a aperiam natus in iusto sint At fugiat doloremque aut ducimus deleniti aut nihil corrupti.",
    getImageSrc: () => require("../../icons_assets/Mario and Adrian A.jpg"),
  },
  {
    title: "Lobster",
    price: 12.99,
    description:
      "Lorem ipsum dolor sit amet. Sed doloribus esse ab impedit totam qui placeat facilis cum amet officia? Quo magnam expedita est excepturi nesciunt a aperiam natus in iusto sint At fugiat doloremque aut ducimus deleniti aut nihil corrupti.",
    getImageSrc: () => require("../../icons_assets/Mario and Adrian A.jpg"),
  },
  {
    title: "Roast Lamb",
    price: 12.99,
    description:
      "Lorem ipsum dolor sit amet. Sed doloribus esse ab impedit totam qui placeat facilis cum amet officia? Quo magnam expedita est excepturi nesciunt a aperiam natus in iusto sint At fugiat doloremque aut ducimus deleniti aut nihil corrupti.",
    getImageSrc: () => require("../../icons_assets/Mario and Adrian A.jpg"),
  }
];

const Highlights = () => {
  return (
    <div class='highlightsSection'>
        <Section>
        <Heading as="h1" id="projects-section">
          Specials
        </Heading>
        <div class="container">
            {dishes.map((dish) => (
            <Card
                key={dish.title}
                title={dish.title}
                price={dish.price}
                description={dish.description}
                imageSrc={dish.getImageSrc()}
            />
            ))}
        </div>
        </Section>
    </div>
  );
};

export default Highlights;
