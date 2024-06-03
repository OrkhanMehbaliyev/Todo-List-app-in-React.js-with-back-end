import { Grid } from "@chakra-ui/react";

const TodoContainer = ({ children }) => {
  return (
    <Grid
      h={"70%"}
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(3, 1fr)",
        "repeat(4, 1fr)",
        "repeat(4, 1fr)",
      ]}
      overflowY={"auto"}
      gap={6}
      p={3}
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {children}
    </Grid>
  );
};

export default TodoContainer;
