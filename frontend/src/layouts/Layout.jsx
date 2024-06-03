import { Box, Flex } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Flex width={"100vw"} direction={"column"} height={"100vh"} bg={"blue.200"}>
      <Header />
      <Box overflowY={"hidden"} flex={1}>
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
