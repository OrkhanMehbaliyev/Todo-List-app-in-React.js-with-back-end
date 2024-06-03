const generateResponse = require("../utils/generateResponse");
const todoService = require("../services/todo-service");
const parseRequestBody = require("../utils/parseRequest");

async function getAllTodos(req, res) {
  const data = await todoService.getAllTodos();
  generateResponse(res, 200, data);
}

async function addTodo(req, res) {
  const body = await parseRequestBody(req);

  const data = await todoService.addTodo(body);
  generateResponse(res, 200, data);
}

async function deleteTodo(req, res) {
  const body = await parseRequestBody(req);
  const data = await todoService.deleteTodo(body);
  generateResponse(res, 200, data);
}

async function updateToDo(req, res) {
  const body = await parseRequestBody(req);
  const data = await todoService.updateToDo(body);
  generateResponse(res, 200, data);
}

module.exports = { getAllTodos, addTodo, deleteTodo, updateToDo };
