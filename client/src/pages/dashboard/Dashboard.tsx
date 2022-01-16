import React, { useState } from 'react';
import {
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import SidePanel from './SidePanel';
import Topbar from './Topbar';
import NewsSection from './NewsSection';
import { navigate } from '@reach/router';
import { auth } from '../../firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import CreateArticle from './CreateArticle';

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(auth.currentUser);
  const [author, setAuthor] = useState(false);
  onAuthStateChanged(auth, res => {
    setUser(res);
    if (!res) {
      navigate('/');
    }
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex maxW="100vw" h="100vh" bg="#101724">
      <Flex h="100%" zIndex="4" overflow="hidden">
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <SidePanel
              onClose={onClose}
              createMode={setAuthor}
              profilePhoto={user?.photoURL}
            />
          </DrawerContent>
        </Drawer>
      </Flex>
      <Flex direction="column" h="100%" w="75%">
        <Flex w="full" h="15%">
          <Topbar onOpen={onOpen} name={user?.displayName?.split(' ')[0]} />
        </Flex>
        <Flex w="100vw" h="85%">
          {author ? <CreateArticle /> : <NewsSection />}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
