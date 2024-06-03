import { Box, Center, Heading, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box width={"100%"} height={"4rem"} bg={"blue.700"}>
      <Center height={"100%"}>
        <Heading as="h3" size={"lg"} color={"gray.50"}>
          Created using React
        </Heading>
      </Center>
    </Box>
  );
};

export default Footer;
