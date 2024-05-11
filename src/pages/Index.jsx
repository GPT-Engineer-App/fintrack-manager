import { Box, Button, Container, Flex, Heading, IconButton, Input, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Table, Tbody, Td, Text, Th, Thead, Tr, useDisclosure, VStack } from "@chakra-ui/react";
import { FaPlus, FaEdit, FaTrash, FaChartBar, FaCog, FaQuestionCircle, FaHome } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" h="100vh">
        {/* Navigation Bar */}
        <Box bg="gray.100" px={5} py={3} shadow="sm" position="sticky" top={0} zIndex={1}>
          <Flex justify="space-between" align="center">
            <Heading size="md">FinTrans Manager</Heading>
            <Flex>
              <IconButton icon={<FaHome />} aria-label="Dashboard" mx={2} />
              <IconButton icon={<FaChartBar />} aria-label="Reports" mx={2} />
              <IconButton icon={<FaCog />} aria-label="Settings" mx={2} />
              <IconButton icon={<FaQuestionCircle />} aria-label="Help" mx={2} />
            </Flex>
          </Flex>
        </Box>

        {/* Main Content */}
        <Flex flex={1} p={5} overflowY="auto">
          <VStack spacing={4} align="stretch" w="full">
            <Button leftIcon={<FaPlus />} colorScheme="teal" onClick={onOpen}>
              Add Transaction
            </Button>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Amount</Th>
                  <Th>Category</Th>
                  <Th>Description</Th>
                  <Th>Actions</Th>
                </Tr>
              </Thead>
              <Tbody>
                {/* Example Row */}
                <Tr>
                  <Td>2023-01-01</Td>
                  <Td>$1000</Td>
                  <Td>Sales</Td>
                  <Td>Initial revenue</Td>
                  <Td>
                    <IconButton icon={<FaEdit />} aria-label="Edit" mx={1} />
                    <IconButton icon={<FaTrash />} aria-label="Delete" mx={1} />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </VStack>
        </Flex>

        {/* Transaction Form Modal */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add/Edit Transaction</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack spacing={4}>
                <Input placeholder="Date" type="date" />
                <Input placeholder="Amount" type="number" />
                <Input placeholder="Category" />
                <Input placeholder="Description" />
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* Footer */}
        <Box bg="gray.200" p={3}>
          <Flex justify="space-between" align="center">
            <Text>&copy; 2023 FinTrans Manager</Text>
            <Flex>
              <Link href="#" mx={2}>
                Contact Us
              </Link>
              <Link href="#" mx={2}>
                FAQs
              </Link>
              <Link href="#" mx={2}>
                Privacy Policy
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
