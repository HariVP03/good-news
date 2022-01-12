import { chakra, Flex, Image } from '@chakra-ui/react';
import React from 'react';

const Topbar: React.FC<{ name: string | undefined }> = ({ name }) => {
  return (
    <Flex w="full" align="center" h="full" color="white" pl={5}>
      <chakra.h2 fontSize="35px">👋</chakra.h2>
      <chakra.h2
        fontSize="30px"
        fontFamily="'Karla', sans-serif;"
        fontWeight="bold"
        color="gray.300"
      >
        Hey there,&nbsp;
      </chakra.h2>
      <chakra.h2
        fontSize="30px"
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
