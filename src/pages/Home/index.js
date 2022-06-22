import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer, Container,
  Heading,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon, CheckIcon } from "@chakra-ui/icons";

const data = [
  {
    title: 'Makan Siang',
    isComplete: true
  },
  {
    title: 'Makan Malam',
    isComplete: true
  },
  {
    title: 'Mandi',
    isComplete: false
  },
]

function Home() {
  return (
    <Container p={5} maxW='container.xl'>
      <Heading py={10}>To Do List</Heading>
      <TableContainer>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th isNumeric>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr>
                <Td>{item.title}</Td>
                <Td isNumeric>
                  <ButtonGroup
                    variant="solid"
                    spacing="4"
                    size="md"
                  >
                    <Button leftIcon={<CheckIcon />} colorScheme="teal">Complete</Button>
                    <Button leftIcon={<EditIcon />} colorScheme="yellow">Update</Button>
                    <Button leftIcon={<DeleteIcon />} colorScheme="red">Delete</Button>
                  </ButtonGroup>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default Home;
