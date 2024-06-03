const fs = require("fs");
const path = require("path");
const util = require("util");
const generateId = require("../utils/generate-id.js");

const parentFolderPath = path.join(__dirname, "..");
const dbFilePath = path.join(parentFolderPath, "database/db.json");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function getAllTodos() {
  const textData = await readFileAsync(dbFilePath);
  const allData = JSON.parse(textData);
  return allData.todo;
}

async function addTodo(data) {
  const allDataRaw = await readFileAsync(dbFilePath);
  const allData = JSON.parse(allDataRaw);
  allData.todo.push({
    todoId: new Date().getTime(),
    heading: data?.heading || "",
    goals:
      data?.goals?.map((goal) => {
        return {
          goalId: generateId(),
          content: goal?.content || "",
          isChecked: goal?.isChecked || false,
        };
      }) || [],
  });

  await writeFileAsync(dbFilePath, JSON.stringify(allData, null, 2));
}

async function deleteTodo(id) {
  const allDataRaw = await readFileAsync(dbFilePath);
  const allData = JSON.parse(allDataRaw);
  allData.todo = allData.todo.filter((item) => item.todoId != id);
  await writeFileAsync(dbFilePath, JSON.stringify(allData));
}

async function updateToDo(item) {
  console.log(item);
  const allDataRaw = await readFileAsync(dbFilePath);
  const allData = JSON.parse(allDataRaw);

  allData.todo = allData.todo.map((data) => {
    if (data.todoId == item.todoId) {
      return {
        todoId: item?.todoId,
        heading: item?.heading || "",
        goals:
          item?.goals?.map((goal) => {
            return {
              goalId: generateId(),
              content: goal?.content || "",
              isChecked: goal.isChecked,
            };
          }) || [],
      };
    } else return data;
  });

  await writeFileAsync(dbFilePath, JSON.stringify(allData));
}

module.exports = { getAllTodos, addTodo, deleteTodo, updateToDo };
