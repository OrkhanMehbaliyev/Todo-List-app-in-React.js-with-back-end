const API_URL = "https://todo-list-app-in-react-js-with-back-end.vercel.app";
const TODO_ENDPOINT = "/todo";

class ApiRequest {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async get(endpoint) {
    return await fetch(`${this.baseURL}${endpoint}`);
  }

  async post(endpoint, data) {
    await fetch(`${this.baseURL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  async update(endpoint, data) {
    await fetch(`${this.baseURL}${endpoint}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }

  async delete(endpoint, data) {
    await fetch(`${this.baseURL}${endpoint}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }
}

const _service = new ApiRequest(API_URL);

export const getData = async () => {
  const response = await _service.get(TODO_ENDPOINT);
  return await response.json();
};

export const postData = async (data) => {
  await _service.post(TODO_ENDPOINT, data);
};

export const updateData = async (data) => {
  await _service.update(TODO_ENDPOINT, data);
};

export const deleteData = async (todoId) => {
  await _service.delete(TODO_ENDPOINT, todoId);
};

export async function getAllTodos(setter) {
  setter(await getData());
}
