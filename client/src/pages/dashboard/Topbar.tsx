import { HamburgerIcon } from '@chakra-ui/icons';
import { chakra, Flex, IconButton } from '@chakra-ui/react';
import React from 'react';

const Topbar: React.FC<{ name: string | undefined; onOpen: () => void }> = ({
  name,
  onOpen,
}) => {
  return (
    <Flex w="full" align="center" h="full" color="white" pl={5}>
      <IconButton
        aria-label="side panel"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        bg="#101724"
        rounded="full"
        _active={{}}
        _hover={{ bg: 'gray.800' }}
        color="white"
        mr={5}
      />
      <chakra.h2 fontSize={['18px', '25px', '30px']}>👋</chakra.h2>
      <chakra.h2
        fontSize={['18px', '25px', '30px']}
        fontFamily="'Karla', sans-serif;"
        fontWeight="bold"
        color="gray.300"
      >
        Hey there,&nbsp;
      </chakra.h2>
      <chakra.h2
        fontSize={['18px', '25px', '30px']}
        fontFamily="'Karla', sans-serif;"
        fontWeight="bold"
        color="gray.400"
      >
        {name}!
      </chakra.h2>
    </Flex>
  );
};

export default Topbar;
