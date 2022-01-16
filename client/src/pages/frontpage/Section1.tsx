import {
  Flex,
  Heading,
  chakra,
  Image,
  Input,
  Button,
  Icon,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { AnimateDiv } from '../../animations/scaleAnimation';
import { auth, provider } from '../../firebase';
import { onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { navigate } from '@reach/router';

const S1: React.FC = () => {
  const onSignInWithGoogle = () => {
    signInWithPopup(auth, provider).then(res => {
      navigate('/dashboard');
    });
  };

  onAuthStateChanged(auth, res => {
    if (res) {
      navigate('/dashboard');
    }
  });

  return (
    <Flex
      minW="100vw"
      minH="100vh"
      bg="#101724"
      justify="center"
      align="center"
    >
      <Flex
        minH="100vh"
        p={3}
        direction="column"
        display={['none', 'none', 'flex', 'flex']}
      >
        <Heading
          fontSize={['40px', '40px', '60px', '80px']}
          mt="18%"
          ml="15%"
          w="60%"
          color="white"
          fontWeight="800"
          fontFamily="'Karla', sans-serif;"
        >
          What's the News Today?
        </Heading>
        <chakra.h1
          mt="6"
          ml="15%"
          w="60%"
          fontFamily="'Karla', sans-serif;"
          color="gray.300"
          fontSize={['23px', '25px', '27px']}
        >
          <chakra.span color="gray.500">Read news</chakra.span> from all over
          the world{' '}
          <chakra.span color="gray.500">or their short summaries.</chakra.span>
        </chakra.h1>
        <chakra.h1
          mt="5"
          ml="15%"
          w="60%"
          fontFamily="'Karla', sans-serif;"
          color="gray.500"
          fontSize="22px"
        >
          Get started by signing up and unsubscribe at any time completely free
          of cost!
        </chakra.h1>
      </Flex>
      <Flex justify="center" align="center" w="40%">
        <Flex
          direction="column"
          align="center"
          w="400px"
          pb={4}
          minH="450px"
          bg="white"
          minW="300px"
          rounded="3xl"
        >
          <Flex h="45%" mt="4%" rounded="2xl" w="92%" p={3} bg="red.300">
            <Image
              w="100%"
              rounded="lg"
              h="100%"
              objectFit="cover"
              src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </Flex>
          <Input
            placeholder="Email"
            type="email"
            borderColor="gray.400"
            fontFamily="'Karla', sans-serif;"
            mt={10}
            fontSize="xl"
            w="92%"
            variant="flushed"
          />
          <AnimateDiv>
            <Button
              rounded="xl"
              size="lg"
              bg="#1B51F0"
              color="gray.200"
              _hover={{ bg: 'blue.700' }}
              fontSize="20px"
              mt={7}
              fontFamily="'Karla', sans-serif;"
              onClick={() => {
                navigate('/dashboard');
              }}
            >
              I'm In!
            </Button>
          </AnimateDiv>
          <AnimateDiv>
            <Button
              rounded="xl"
              size="md"
              bg="#1B51F0"
              onClick={onSignInWithGoogle}
              color="gray.200"
              _hover={{ bg: 'blue.700' }}
              fontSize="20px"
              mt={5}
              fontFamily="'Karla', sans-serif;"
            >
              <Icon
                mr={1}
                aria-hidden="true"
                boxSize={6}
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="transparent"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z" />
              </Icon>
            </Button>
          </AnimateDiv>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default S1;
