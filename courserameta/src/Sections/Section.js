import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const Section = ({verticalSpacing = 8, children}) => {
  return (
    <VStack maxWidth="1280px" p={8} alignItems="flex-start" spacing={verticalSpacing} marginLeft={32} marginRight={32}>
      {children}
    </VStack>
  );
};

export default Section;
