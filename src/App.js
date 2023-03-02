import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import HelloWorldService from "./services/HelloWorldService";
import UserService from "./services/UserService";
import TodoService from "./services/TodoService";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //getHelloWorld();
    getUsers();
    getTodos();
  }, []);

  const getUsers = () => {
    UserService.getUsers().then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  };

  const getTodos = () => {
    TodoService.getTodos().then((response) => {
      setTodos(response.data);
      console.log(response.data);
    });
  };

  const getHelloWorld = () => {
    HelloWorldService.getHelloWorld().then((response) => {
      console.log(response.data);
    });
  };

  const addTodo = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") return;

    setTodos([
      ...todos,
      {
        text: inputValue,
        id: uuidv4(),
      },
    ]);

    setInputValue("");
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <Header />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="container">
          <h1>Users</h1>
          {users.map((user) => (
            <div className="todo" key={user.id}>
              <span>
                <p>USERNAME:</p>
                <p>{user.username}</p>
              </span>
              <span>
                {" "}
                <p>EMAIL:</p>
                <p>{user.email}</p>
              </span>
            </div>
          ))}
          <h1 style={{ marginTop: "4rem" }}>Todos</h1>
          {todos.map((todo) => (
            <div className="todo" key={todo.id}>
              <span>
                <p>TITLE:</p> <p>{todo.title}</p>
              </span>
              <span>
                <p>DESCRIPTION:</p>
                <p>{todo.description}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
