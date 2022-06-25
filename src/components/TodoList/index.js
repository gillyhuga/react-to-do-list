import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Image,
  IconButton,
  ButtonGroup,
  Text,
  Center,
  VStack,
} from "@chakra-ui/react";
import { DeleteIcon, CheckIcon, RepeatClockIcon } from "@chakra-ui/icons";

function TodoList({ todos, deleteTodo, completeTodo }) {
  if (!todos.length) {
    return (
      <Center>
        <VStack>
          <Box boxSize="md">
            <Image
              src="https://user-images.githubusercontent.com/37680589/175788439-179be3e0-1fa9-45ca-822c-dbee4fa0ae3e.png"
              alt="No Todo"
            />
          </Box>
          <Text>Congratulations! you have completed all tasks</Text>
        </VStack>
      </Center>
    );
  }
  return (
    <TableContainer pb={4}>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Title</Th>
            <Th isNumeric>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {todos.map((todo) => (
            <Tr key={todo.id}>
              <Td>
                {!todo.isComplete ? (
                  <Text>{todo.title}</Text>
                ) : (
                  <Text as="del">{todo.title}</Text>
                )}
              </Td>
              <Td isNumeric>
                <ButtonGroup variant="solid" spacing="4" size="md">
                  {!todo.isComplete ? (
                    <IconButton
                      icon={<CheckIcon />}
                      isRound="true"
                      colorScheme="teal"
                      onClick={() => completeTodo(todo.id)}
                    />
                  ) : (
                    <IconButton
                      icon={<RepeatClockIcon />}
                      isRound="true"
                      colorScheme="blue"
                      onClick={() => completeTodo(todo.id)}
                    />
                  )}
                  <IconButton
                    icon={<DeleteIcon />}
                    isRound="true"
                    colorScheme="red"
                    onClick={() => deleteTodo(todo.id)}
                  />
                </ButtonGroup>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default TodoList;
