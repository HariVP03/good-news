import {
  Flex,
  Stack,
  Icon,
  chakra,
  VisuallyHidden,
  Image,
  Text,
} from '@chakra-ui/react';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useState } from 'react';
import { auth, storage } from '../firebase';

const UploadThumbnail: React.FC<{
  thumbnail: File | null | undefined;
  setThumbnail: React.Dispatch<React.SetStateAction<File | null | undefined>>;
}> = ({ thumbnail, setThumbnail }) => {
  return (
    <Flex
      mt={1}
      justify="center"
      px={6}
      pt={5}
      onDragOver={e => {
        e.preventDefault();
      }}
      onDragEnter={e => {
        e.preventDefault();
      }}
      onDrop={e => {
        e.preventDefault();
        setThumbnail(e.dataTransfer.files[0]);
      }}
      pb={6}
      borderWidth={2}
      borderColor="gray.500"
      borderStyle="dashed"
      rounded="md"
    >
      <Stack spacing={1} textAlign="center">
        <Icon
          mx="auto"
          boxSize={12}
          color="white"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <path
            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Icon>
        <Flex fontSize="sm" color="gray.600" alignItems="baseline">
          <chakra.label
            htmlFor="file-upload"
            cursor="pointer"
            rounded="md"
            fontSize="md"
            color="red.100"
            w="full"
            textAlign="center"
            pos="relative"
            _hover={{
              color: 'red.200',
            }}
          >
            <span>Upload a thumbnail or drag and drop</span>
            <VisuallyHidden>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                accept="image/jpeg, image/png,image/jpg"
                onChange={e => {
                  if (e.target.files && e.target.files[0] !== null) {
                    setThumbnail(e.target.files[0]);
                  }
                }}
              />
            </VisuallyHidden>
          </chakra.label>
        </Flex>
        <Text fontSize="xs" color="white">
          PNG, JPG up to 10MB
          {thumbnail ? (
            <Flex minW="200px" mt={2} minH="150px">
              <Image src={URL.createObjectURL(thumbnail)}></Image>
            </Flex>
          ) : (
            ''
          )}
        </Text>
      </Stack>
    </Flex>
  );
};

export default UploadThumbnail;
