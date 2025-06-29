import { BASE_URL } from ".";

export function getAllTodos() {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/todos`)
      .then((response) => {
        return response.json();
      })
      .then((todos) => {
        resolve(todos);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function getTodoById(todoId) {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/todos/${todoId}`, {
      method: "GET",
      headers: { accept: "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((todo) => {
        resolve(todo);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function deleteTodo(todoId) {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/todos/${todoId}`, {
      method: "DELETE",
      headers: { accept: "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((deleteRes) => {
        resolve(deleteRes);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function updateTodo(payload, todoId) {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/todos/${todoId}`, {
      method: "PATCH",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        return res.json();
      })
      .then((updateRes) => {
        resolve(updateRes);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function createTodo(payload) {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/todos`, {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        return res.json();
      })
      .then((createRes) => {
        resolve(createRes);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function toggleStatus(todoId) {
  return new Promise((resolve, reject) => {
    fetch(`${BASE_URL}/todos/toggle/status/${todoId}`, {
      method: "PATCH",
      headers: { accept: "application/json" },
    })
      .then((response) => {
        return response.json();
      })
      .then((toggleRes) => {
        resolve(toggleRes);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
