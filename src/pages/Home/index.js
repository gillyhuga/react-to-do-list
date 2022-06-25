import { useState } from "react";
import {
  Container,
  Heading,
} from "@chakra-ui/react";
import AddTodo from "../../components/AddTodo";
import TodoList from "../../components/TodoList";


function Home() {
  const data = [
    {
      id: 1,
      title: 'Membaca Buku',
      isComplete: false
    },
    {
      id: 2,
      title: 'Makan Malam',
      isComplete: false
    },
    {
      id: 3,
      title: 'Belajar React Js',
      isComplete: true
    },
  ]

  const [todos, setTodos] = useState(data);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  function completeTodo(id) {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isComplete: !todo.isComplete };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }
  return (
    <Container p={5} maxW='container.xl'>
      <Heading py={10}>To Do List</Heading>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} />
    </Container>
  );
}

export default Home;
