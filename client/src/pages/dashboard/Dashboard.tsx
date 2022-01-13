import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import SidePanel from './SidePanel';
import Topbar from './Topbar';
import NewsSection from './NewsSection';
import { navigate } from '@reach/router';
import { auth } from '../../firebase';
import { onAuthStateChanged, User } from 'firebase/auth';

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(auth.currentUser);
  onAuthStateChanged(auth, res => {
    setUser(res);
    if (!res) {
      navigate('/');
    }
  });
  return (
    <Flex maxW="100vw" h="100vh" bg="#101724">
      <Flex h="100%" w="25%" overflow="hidden">
        <SidePanel profilePhoto={user?.photoURL} />
      </Flex>
      <Flex direction="column" h="100%" w="75%">
        <Flex w="full" h="15%">
          <Topbar name={user?.displayName?.split(' ')[0]} />
        </Flex>
        <Flex w="75vw" h="85%">
          <NewsSection />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
