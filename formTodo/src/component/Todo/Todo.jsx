import { useState } from "react";
import TodoInput from "./todoInput";
import Button from "./Button";
import Header from "./header";
import TodoItem from "./todoItem";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  const handleTaskCreate = ({ title, description }) => {
    const payload = {
      title: title,
      status: todos.length % 2 == 0 ? true : false,
      description: description,
      id: todos.length + 1
    };
    setTodos([...todos, payload]);
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  const handleTogle = (id) => {
    const updateTodos = todos.map((item) =>
      item.id == id ? { ...item, status: !item.status } : item
    );
    setTodos(updateTodos);
  };
  return (
    <>
      <Header title="TODO" />

      <TodoInput onCreatTask={handleTaskCreate} />
      <TodoItem
        data={todos.filter((item) => !item.status)}
        handleDelete={handleDelete}
        handleTogle={handleTogle}
      />
      <div>
        <Button
          onClick={() => setShowCompleted(!showCompleted)}
          title="Toggle Show Completed"
        />
      </div>
      {showCompleted && (
        <TodoItem
          data={todos.filter((item) => item.status)}
          handleDelete={handleDelete}
          handleTogle={handleTogle}
        />
      )}
    </>
  );
}
