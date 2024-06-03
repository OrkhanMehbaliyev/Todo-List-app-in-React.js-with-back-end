import { Box, Heading, Center, Flex } from "@chakra-ui/react";
const Header = () => {
  return (
    <Box width={"100vw"} height={"50px"} bg={"blue.700"} textAlign={"center"}>
      <Heading color={"gray.50"}>Todo List App</Heading>
    </Box>
  );
};

export default Header;
