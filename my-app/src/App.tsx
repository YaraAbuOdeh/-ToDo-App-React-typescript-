import React, { useState, useEffect } from 'react';
import './App.css';
import Form from "./components/Form";
import List from './components/List';
import TODOI from './interfaces/TodoInterface';

function App() {
  const [todos, setTodos] = useState<TODOI[]>([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  const addTodo = (todo: string): void => {
    const data: TODOI = {
      id: todos.length < 1 ? 1 : todos[todos.length - 1].id + 1,
      text: todo,
      completed: false,
    };
    const updatedTodos = [...todos, data];
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    window.alert("Todo added successfully!!");
  };

  const deleteTodo = (id: number): void => {
    const updatedTodos: TODOI[] = todos.filter((todo: TODOI) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    window.alert("deleted successfully");
  };

  const toggleComplete = (id: number): void => {
    const updatedTodos = todos.map((todo: TODOI) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  return (
    <div className="container">
      <h1 className='text-center my-2'>React Typescript Todo APP</h1>
      <div className="row flex-column">
        <Form addTodo={addTodo} todos={todos} />
        <List todos={todos} deleteTodo={deleteTodo} toggleComplete={toggleComplete} />
      </div>
    </div>
  );
};

export default App;
