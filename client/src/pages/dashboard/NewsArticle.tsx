import { ArrowBackIcon } from '@chakra-ui/icons';
import { Flex, IconButton, chakra, Avatar } from '@chakra-ui/react';
import React from 'react';
import months from '../../utilities/month';
import '../../css/markdown.css';
import Markdown from 'markdown-to-jsx';

const NewsArticle: React.FC<{
  clickedNews:
    | {
        title: string;
        topic: string;
        body: string;
        authorName: string;
        authorAvatar: string;
        date: Date;
      }
    | any;
  onBack: () => void;
}> = ({ clickedNews, onBack }) => {
  const month = months[clickedNews.date.getMonth()];
  const date1 = clickedNews.date.getDate().toString();
  const year = clickedNews.date.getFullYear().toString();
  const formattedDate = `${month} ${date1}, ${year}`;
  return (
    <>
      <Flex px={2} w="100%" h="10%" align="center">
        <IconButton
          color="gray.400"
          border="0px"
          _hover={{ color: 'black', bg: 'gray.400' }}
          variant="outline"
          rounded="full"
          aria-label="Go Back"
          icon={<ArrowBackIcon />}
          onClick={onBack}
        />
      </Flex>
      <Flex
        direction="column"
        px={12}
        w="full"
        fontFamily="'Karla', sans-serif;"
        color="white"
      >
        <chakra.h2 fontSize="3rem" color="white" fontWeight="bold">
          {clickedNews.title}
        </chakra.h2>
        <Flex align="center" mt={3} fontWeight="bold">
          <Avatar src={clickedNews.authorAvatar} mr={2} />
          <Flex direction="column" justify="center">
            <chakra.h2 _hover={{ textDecor: 'underline' }}>
              {clickedNews.authorName}
            </chakra.h2>
            <chakra.h2>{formattedDate}</chakra.h2>
          </Flex>
        </Flex>
        <Flex className="markdown" mt={10} maxW="100%" minH="100%">
          <Markdown>{clickedNews.body}</Markdown>
        </Flex>
      </Flex>
    </>
  );
};

export default NewsArticle;
