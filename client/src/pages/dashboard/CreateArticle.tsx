import {
  Button,
  chakra,
  Flex,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Textarea,
} from '@chakra-ui/react';
import { navigate } from '@reach/router';
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import React, { useState } from 'react';
import UploadThumbnail from '../../components/UploadThumbnail';
import { auth, firestore, storage } from '../../firebase';
import NewsArticle from './NewsArticle';

const CreateArticle: React.FC<{
  createMode: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ createMode }) => {
  const [title, setTitle] = useState('');
  const [topic, setTopic] = useState('');
  const [body, setBody] = useState('');
  const [thumbnail, setThumbnail] = useState<File | null>();
  const [url, setUrl] = useState('');

  const onSubmitArticle = async () => {
    if (thumbnail) {
      const thumbnailRef = ref(
        storage,
        `/images/${auth.currentUser?.uid}/thumbnail/${Math.floor(
          Math.random() * 100000,
        )}`,
      );
      uploadBytes(thumbnailRef, thumbnail).then(snap => {
        getDownloadURL(snap.ref).then(url => {
          try {
            if (!Boolean(topic && title && auth.currentUser && url && body))
              return;
            const docRef = addDoc(collection(firestore, 'news'), {
              topic,
              title,
              views: 0,
              authorName: auth.currentUser?.displayName,
              date: new Date(),
              authorAvatar: auth.currentUser?.photoURL,
              thumbnail: url,
              body,
              featured: false,
            });
            createMode(false);
          } catch (e) {
            console.log(e);
          }
          setThumbnail(null);
        });
      });
    }
  };

  return (
    <Flex
      fontFamily="'Karla', sans-serif;"
      w="100%"
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
            <Input
              value={title}
              onChange={e => {
                setTitle(e.target.value);
              }}
              placeholder="Title of you article"
              fontSize="18px"
              mb={5}
            />
            <Input
              value={topic}
              onChange={e => {
                setTopic(e.target.value);
              }}
              placeholder="Topic of you article"
              fontSize="18px"
              mb={5}
            />
            <Textarea
              placeholder="The body of your article in markdown"
              value={body}
              onChange={e => {
                setBody(e.target.value);
              }}
              resize="none"
              h="90vh"
              fontSize="18px"
            />
            <UploadThumbnail
              setThumbnail={setThumbnail}
              thumbnail={thumbnail}
            />
            <Flex mt={5} justify="center">
              <Button
                variant="ghost"
                bg="gray.900"
                mr={4}
                _hover={{ bg: 'gray.700' }}
                onClick={() => {
                  setBody('');
                  setTitle('');
                  setTopic('');
                }}
              >
                Clear
              </Button>
              <Button
                onClick={onSubmitArticle}
                variant="ghost"
                bg="#1B51F0"
                _hover={{ bg: 'blue.400' }}
              >
                Submit
              </Button>
            </Flex>
          </TabPanel>
          <TabPanel>
            <NewsArticle
              clickedNews={{
                title,
                topic,
                body,
                authorName: auth.currentUser?.displayName,
                authorAvatar: auth.currentUser?.photoURL,
                date: new Date(),
              }}
              onBack={() => {}}
              previewMode
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default CreateArticle;
