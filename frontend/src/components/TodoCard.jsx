import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
} from "@chakra-ui/react";

import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import TodoItem from "./TodoItem";
import { PAGE_MODS } from "../utils/pageMode";
import { deleteData, getAllTodos } from "../utils/request";

const TodoCard = ({
  item,
  setPageMode,
  setInput,
  setTodoLists,
  changingInputRef,
  inputComponentRef,
}) => {
  function handleClickAdd() {
    setPageMode(PAGE_MODS.ADD);
    changingInputRef.current = item;
    inputComponentRef.current.focus();
    getAllTodos(setTodoLists);
  }

  async function handleClickDelete() {
    await deleteData(item.todoId);
    getAllTodos(setTodoLists);
  }

  return (
    <Card>
      <CardHeader display={"flex"}>
        <Box flex={15}>
          <Heading as={"h4"} size={"md"}>
            {item?.heading}
          </Heading>
        </Box>
        <Box flex={2}>
          <AddIcon
            cursor={"pointer"}
            _hover={{ color: "blue.300", transition: "0.15s" }}
            onClick={handleClickAdd}
          />
        </Box>
        <Box flex={2}>
          <DeleteIcon
            cursor={"pointer"}
            _hover={{ color: "red.300", transition: "0.15s" }}
            onClick={handleClickDelete}
          />
        </Box>
      </CardHeader>
      <CardBody minH={"300px"}>
        <Stack direction={"column"}>
          {item?.goals &&
            item?.goals?.map((goal) => (
              <TodoItem
                key={goal?.goalId}
                item={item}
                goal={goal}
                setTodoLists={setTodoLists}
                setInput={setInput}
                setPageMode={setPageMode}
                inputComponentRef={inputComponentRef}
                changingInputRef={changingInputRef}
              />
            ))}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default TodoCard;
