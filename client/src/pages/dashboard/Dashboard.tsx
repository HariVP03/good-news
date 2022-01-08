import React from 'react';
import { Flex } from '@chakra-ui/react';
import SidePanel from './SidePanel';
import Topbar from './Topbar';
import NewsSection from './NewsSection';

const Dashboard: React.FC = () => {
  return (
    <Flex w="100vw" h="100vh" bg="#101724">
      <Flex h="100%" w="25%">
        <SidePanel />
      </Flex>
      <Flex direction="column" h="100%" w="75%">
        <Flex w="full" h="15%">
          <Topbar />
        </Flex>
        <Flex w="full" h="85%">
          <NewsSection />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
