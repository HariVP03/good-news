import React from 'react';
import { Avatar, Button, chakra, Flex } from '@chakra-ui/react';

const PanelButton: React.FC<{ children: string }> = ({ children }) => {
  return (
    <Button
      fontFamily="'Karla', sans-serif;"
      bg="#101724"
      h="50px"
      my={2}
      rounded="lg"
      _hover={{ bg: '#323739' }}
      color="white"
      fontWeight="bold"
      fontSize="18px"
    >
      {children}
    </Button>
  );
};

const SidePanel: React.FC = () => {
  return (
    <Flex w="full" h="full" direction="column">
      <Flex
        w="full"
        direction="column"
        p={10}
        align="center"
        h="25%"
        borderBottom="1px solid"
        borderBottomColor="gray.700"
      >
        <Avatar size="md" />
        <chakra.h2
          fontSize="18px"
          color="gray.200"
          mt={2}
          fontFamily="'Karla', sans-serif;"
        >
          Jan 08, 2022
        </chakra.h2>
        <chakra.h2
          fontSize="18px"
          color="gray.400"
          fontFamily="'Karla', sans-serif;"
        >
          19:52
        </chakra.h2>
      </Flex>
      <Flex w="full" h="75%" mt={4} direction="column">
        <PanelButton>Home</PanelButton>
        <PanelButton>Subscribe to Newsletter</PanelButton>
        <PanelButton>Back to the frontpage</PanelButton>
      </Flex>
    </Flex>
  );
};

export default SidePanel;