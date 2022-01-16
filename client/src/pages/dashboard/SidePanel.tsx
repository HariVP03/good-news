import React, { useState } from 'react';
import { Avatar, Button, chakra, Flex } from '@chakra-ui/react';
import { navigate } from '@reach/router';
import Clock from 'react-live-clock';
import months from '../../utilities/month';
import { EditIcon } from '@chakra-ui/icons';

const PanelButton: React.FC<{
  children: string;
  onClick: () => void;
  disabled?: boolean;
}> = ({ children, onClick, disabled = false }) => {
  return (
    <Button
      onClick={onClick}
      fontFamily="'Karla', sans-serif;"
      bg="#101724"
      h="50px"
      isDisabled={disabled}
      my={2}
      rounded="lg"
      _hover={{ bg: '#323739' }}
      color="white"
      fontWeight="bold"
      fontSize={['14px', '14px', '16px', '18px']}
    >
      {children}
    </Button>
  );
};

const SidePanel: React.FC<{
  profilePhoto: string | undefined | null;
  createMode: React.Dispatch<React.SetStateAction<boolean>>;
  onClose: () => void;
}> = ({ profilePhoto, createMode, onClose }) => {
  const dateObj = new Date();
  const date = dateObj.getDate().toString();
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear().toString();
  const formattedDate = `${month} ${date}, ${year}`;

  return (
    <Flex
      bg="#101724"
      zIndex="10"
      position="static"
      w="100%"
      h="full"
      direction="column"
    >
      <Flex w="full" direction="column" p={10} align="center" h="25%">
        <Avatar src={profilePhoto || ''} size="md" />
        <chakra.h2
          fontSize={['14px', '14px', '16px', '18px']}
          color="gray.200"
          mt={2}
          textAlign="center"
          fontFamily="'Karla', sans-serif;"
        >
          {formattedDate}
        </chakra.h2>
        <chakra.h2
          fontSize={['14px', '14px', '16px', '18px']}
          color="gray.400"
          textAlign="center"
          fontFamily="'Karla', sans-serif;"
        >
          <Clock format="h:mm A" ticking />
        </chakra.h2>
      </Flex>
      <Flex w="full" h="75%" mt={4} direction="column">
        <PanelButton
          onClick={() => {
            createMode(false);
            navigate('/dashboard');
            onClose();
          }}
        >
          Home
        </PanelButton>
        <PanelButton
          onClick={() => {
            navigate('/');
            onClose();
          }}
          disabled
        >
          Subscribe
        </PanelButton>
        <PanelButton
          onClick={() => {
            createMode(true);
            onClose();
          }}
        >
          Become an author
        </PanelButton>
        <PanelButton
          onClick={() => {
            navigate('/');
            onClose();
          }}
        >
          Back
        </PanelButton>
      </Flex>
    </Flex>
  );
};

export default SidePanel;
