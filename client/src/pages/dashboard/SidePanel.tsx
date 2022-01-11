import React from 'react';
import { Avatar, Button, chakra, Flex } from '@chakra-ui/react';
import { navigate } from '@reach/router';
import Clock from 'react-live-clock';
import months from '../../utilities/month';

const PanelButton: React.FC<{ children: string; onClick: () => void }> = ({
  children,
  onClick,
}) => {
  return (
    <Button
      onClick={onClick}
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

const SidePanel: React.FC<{ profilePhoto: string | undefined | null }> = ({
  profilePhoto,
}) => {
  const dateObj = new Date();
  const date = dateObj.getDate().toString();
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear().toString();
  const formattedDate = `${month} ${date}, ${year}`;
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
        <Avatar src={profilePhoto || ''} size="md" />
        <chakra.h2
          fontSize="18px"
          color="gray.200"
          mt={2}
          fontFamily="'Karla', sans-serif;"
        >
          {formattedDate}
        </chakra.h2>
        <chakra.h2
          fontSize="18px"
          color="gray.400"
          fontFamily="'Karla', sans-serif;"
        >
          <Clock format="hh:mm" ticking />
        </chakra.h2>
      </Flex>
      <Flex w="full" h="75%" mt={4} direction="column">
        <PanelButton
          onClick={() => {
            navigate('/');
          }}
        >
          Home
        </PanelButton>
        <PanelButton
          onClick={() => {
            navigate('/');
          }}
        >
          Subscribe to Newsletter
        </PanelButton>
        <PanelButton
          onClick={() => {
            navigate('/');
          }}
        >
          Back to the frontpage
        </PanelButton>
      </Flex>
    </Flex>
  );
};

export default SidePanel;
