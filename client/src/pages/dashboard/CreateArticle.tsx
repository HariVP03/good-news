import {
  chakra,
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Textarea,
} from '@chakra-ui/react';
import Markdown from 'markdown-to-jsx';
import React, { useState } from 'react';
import '../../css/markdown.css';

const CreateArticle: React.FC = () => {
  const [article, setArticle] = useState('');
  return (
    <Flex
      fontFamily="'Karla', sans-serif;"
      w="75%"
      h="full"
      bg="gray.800"
      overflowY="scroll"
      position="absolute"
      direction="column"
      color="white"
      pb="150px"
    >
      <chakra.h2 fontSize="30px" fontWeight="bold" color="white" m={5}>
        Create an Article
      </chakra.h2>
      <Tabs mx={5} variant="soft-rounded" isLazy isFitted>
        <TabList mb="1em">
          <Tab
            fontWeight="semibold"
            _selected={{
              color: 'white',
              border: '1px solid',
              borderColor: 'gray.300',
            }}
          >
            Edit your Article
          </Tab>
          <Tab
            fontWeight="semibold"
            _selected={{
              color: 'white',
              border: '1px solid',
              borderColor: 'gray.300',
            }}
          >
            Preview your Article
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Textarea
              value={article}
              onChange={e => {
                setArticle(e.target.value);
              }}
              resize="none"
              h="90vh"
              fontSize="18px"
            />
          </TabPanel>
          <TabPanel>
            <Flex className="markdown">
              <Markdown>{article}</Markdown>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default CreateArticle;
