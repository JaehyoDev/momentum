const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveTodos() {
  //JSON.stringfy(배열);
  // 오브젝트를 문자로 만든다. 아래에서는 배열을 문자로 만든다.
  //JSON.parse(문자);
  // 문자열을 오브젝트로 만든다. 아래에서는 배열로 만든다.
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  // 아래 코드는 값이 값1,값2,값3... 이렇게 저장된다. 배열이 아니다.
  //localStorage.setItem("todos", todos);
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  // 아래 코드와 같다.
  todos.forEach(paintTodo);
  //todos.forEach((item) => paintTodo(item));
}
