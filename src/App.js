import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./Header";
import HelloWorldService from "./services/HelloWorldService";
import UserService from "./services/UserService";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //getHelloWorld();
    getUsers();
  }, []);

  const getUsers = () => {
    UserService.getUsers().then((response) => {
      setUsers(response.data);
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
      <div className="container">
        <form onSubmit={addTodo}>
          <input
            autoFocus
            type="text"
            placeholder="Add a ToDo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="btn">Add ToDo</button>
        </form>
        {todos.map((todo) => (
          <div key={todo.id} className="todo">
            <p>{todo.text}</p>
            <button className="btn-delete" onClick={() => removeTodo(todo.id)}>
              Delete
            </button>
          </div>
        ))}

        {users.map((user) => (
          <div className="todo" key={user.id}>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
