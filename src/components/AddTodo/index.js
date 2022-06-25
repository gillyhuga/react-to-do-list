import { Button, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";
import { nanoid } from "nanoid";

function AddTodo({ addTodo }) {
  function handleSubmit(e) {
    e.preventDefault();

    const todo = {
      id: nanoid(),
      title: content,
      isComplete: false,
    };

    addTodo(todo);
    setContent("");
  }

  const [content, setContent] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <HStack py="8">
        <Input
          isRequired
          variant="filled"
          placeholder="Add task"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="blue" px="8" type="submit">
          Add Todos
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
