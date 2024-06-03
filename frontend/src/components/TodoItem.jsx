import { CloseIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Checkbox, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { PAGE_MODS } from "../utils/pageMode";
import { getAllTodos, updateData } from "../utils/request";

const TodoItem = ({
  item,
  goal,
  setTodoLists,
  setInput,
  setPageMode,
  inputComponentRef,
  changingInputRef,
}) => {
  const [isChecked, setIsChecked] = useState(goal?.isChecked);

  async function handleChangeCheckBox() {
    setIsChecked(!isChecked);
    await updateData({
      ...item,
      goals: item.goals.map((x) =>
        x?.goalId == goal.goalId ? { ...x, isChecked: !isChecked } : { ...x }
      ),
    });
    getAllTodos(setTodoLists);
  }

  function handleClickEdit() {
    setPageMode(PAGE_MODS.EDIT);
    changingInputRef.current = [item, goal];
    inputComponentRef.current.focus();
    setInput(goal.content);
  }

  async function handleClickDelete() {
    await updateData({
      ...item,
      goals: item?.goals?.filter((x) => x.goalId != goal.goalId),
    });
    getAllTodos(setTodoLists);
  }

  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <Checkbox isChecked={isChecked} onChange={handleChangeCheckBox}>
        {goal?.content}
      </Checkbox>
      <HStack spacing={"14px"}>
        <EditIcon
          as="button"
          _hover={{ color: "green.300", transition: "0.15s" }}
          onClick={handleClickEdit}
        />
        <CloseIcon
          as="button"
          _hover={{ color: "red.300", transition: "0.15s" }}
          onClick={handleClickDelete}
        />
      </HStack>
    </Box>
  );
};

export default TodoItem;
