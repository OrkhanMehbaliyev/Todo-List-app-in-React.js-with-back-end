import { Box, Input, Center, Button } from "@chakra-ui/react";
import { PAGE_MODS } from "../utils/pageMode";
import { getAllTodos, postData, updateData } from "../utils/request";

const AddTodo = ({
  input,
  setInput,
  setTodoLists,
  pageMode,
  setPageMode,
  inputComponentRef,
  changingInputRef,
}) => {
  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key == "Enter") {
      handleButtonClick();
    }
  }

  async function handleButtonClick() {
    if (pageMode == PAGE_MODS.CREATE) {
      await postData({ heading: input });
    }

    if (pageMode === PAGE_MODS.ADD) {
      const addedGoal = { ...changingInputRef.current };
      addedGoal.goals.push({ content: input });
      await updateData(addedGoal);
    }

    if (pageMode === PAGE_MODS.EDIT) {
      const [item, goal] = changingInputRef.current;
      Object.assign(goal, { content: input });
      item.goals = item.goals.map((x) => (x.goalId == goal.goalId ? goal : x));
      await updateData(item);
      setPageMode(PAGE_MODS.CREATE);
    }

    getAllTodos(setTodoLists);
    setInput("");
  }

  return (
    <Box height={"30%"}>
      <Center height={"100%"}>
        <Box display={"flex"} gap={"0.5rem"}>
          <Input
            ref={inputComponentRef}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <Button colorScheme={"blue"} onClick={handleButtonClick}>
            {pageMode === PAGE_MODS.CREATE
              ? "Create"
              : pageMode === PAGE_MODS.ADD
              ? "Add"
              : "Edit"}
          </Button>
        </Box>
      </Center>
    </Box>
  );
};

export default AddTodo;
