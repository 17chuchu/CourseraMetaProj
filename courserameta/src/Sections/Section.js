import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Illustrates the use of children prop and spread operator
 */
const Section = ({verticalSpacing = 8, hMargin = 32, children}) => {
  return (
    <VStack maxWidth="1280px" p={8} alignItems="flex-start" spacing={verticalSpacing} marginLeft={hMargin} marginRight={hMargin}>
      {children}
    </VStack>
  );
};

export default Section;
