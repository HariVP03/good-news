import React from 'react';
import { Flex } from '@chakra-ui/react';
import { NewsCardWide } from '../../components/NewsCards';

const NewsSection: React.FC = () => {
  return (
    <Flex w="full" h="full" bg="gray.800" p={5}>
      <NewsCardWide
        authorAvatar="https://images.unsplash.com/photo-1543871595-e11129e271cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        authorName="Lucy Hale"
        date={new Date()}
        thumbnail="https://images.unsplash.com/photo-1466500419182-8602dc906b51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="The Advent of Technology and How It has Affected New Yorker's Lifestyle"
        topic="Technology"
      />
    </Flex>
  );
};

export default NewsSection;
