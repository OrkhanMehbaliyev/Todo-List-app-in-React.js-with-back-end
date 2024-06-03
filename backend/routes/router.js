const urlHelpers = require("../helpers/urlHelpers");
const todoRouter = require("../routes/todoRouter");
const generateResponse = require("../utils/generateResponse");

const handleRouters = (req, res) => {
  const { url } = req;
  switch (url) {
    case urlHelpers.TODO_ENDPOINTS:
      todoRouter.handleTodoRoutes(req, res);
      break;
    default:
      generateResponse(res, 404, "Not Found!");
  }
};

module.exports = {
  handleRouters,
};
