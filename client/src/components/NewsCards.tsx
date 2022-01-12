import React from 'react';
import { Avatar, chakra, Flex, Icon, Image, Spinner } from '@chakra-ui/react';
import { AnimateCard, AnimateDiv } from '../animations/scaleAnimation';
import months from '../utilities/month';

export const NewsCardWide: React.FC<{
  topic: string;
  title: string;
  authorName: string;
  date: Date;
  authorAvatar: string;
  thumbnail: string;
}> = ({ topic, title, authorName, date, authorAvatar, thumbnail }) => {
  const month = months[date.getMonth()];
  const date1 = date.getDate().toString();
  const year = date.getFullYear().toString();
  const formattedDate = `${month} ${date1}, ${year}`;

  return (
    <AnimateCard styles={{ height: '300px', marginBottom: '15px' }}>
      <Flex
        mx={2}
        minW="600px"
        h="300px"
        cursor="pointer"
        bg="#101724"
        rounded="lg"
        align="center"
        justify="space-around"
        boxShadow="lg"
        px={2}
      >
        <Image
          src={thumbnail}
          objectFit="cover"
          borderColor="#101724"
          w="300px"
          h="95%"
          rounded="lg"
          ml={2}
          mr={1}
        />
        <Flex
          direction="column"
          h="95%"
          w="290px"
          ml={1}
          mr={2}
          justify="center"
        >
          <Flex
            w="full"
            h="95%"
            direction="column"
            justify="space-between"
            fontFamily="'Karla', sans-serif;"
            color="gray.200"
            fontWeight="bold"
            ml={2}
          >
            <Flex direction="column">
              <chakra.h2 color="gray.400">{topic}</chakra.h2>
              <chakra.h2 mt={3} fontSize="25px">
                {title}
              </chakra.h2>
            </Flex>
            <Flex align="center">
              <Avatar src={authorAvatar} mr={2} />
              <Flex direction="column" justify="center">
                <chakra.h2 _hover={{ textDecor: 'underline' }}>
                  {authorName}
                </chakra.h2>
                <chakra.h2>{formattedDate}</chakra.h2>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </AnimateCard>
  );
};

export const WeatherCard: React.FC<{
  city: string;
  icon: string | null | undefined;
  temp: number;
  desc: string;
  loading: boolean;
}> = ({ city, icon, temp, desc, loading }) => {
  const toTitleCase = (f: string) => {
    if (!f) return f;
    let r = f[0].toUpperCase();
    return r + f.slice(1, f.length);
  };
  return (
    <AnimateCard styles={{ height: '180px' }}>
      <Flex
        mx={2}
        w="300px"
        h="300"
        cursor="pointer"
        bg="#101724"
        rounded="lg"
        boxShadow="lg"
        p={4}
        fontFamily="'Karla', sans-serif;"
        color="gray.200"
        fontWeight="bold"
        overflowWrap="normal"
        direction="column"
      >
        {loading ? (
          <Spinner />
        ) : (
          <Flex direction="column">
            <chakra.h2 color="gray.400">{city}</chakra.h2>
            <Flex fontSize="25px">
              <Image
                src={icon || ''}
                size="sm"
                objectFit="cover"
                rounded="full"
              />
              <Flex direction="column" ml={5}>
                <Flex align="center">
                  <chakra.h2 fontsize="18px">{temp}</chakra.h2>
                  <chakra.h2 fontSize="18px" color="gray.400">
                    °F
                  </chakra.h2>
                </Flex>
                <chakra.h2 fontSize="20px" color="gray.400">
                  {toTitleCase(desc)}
                </chakra.h2>
              </Flex>
            </Flex>
          </Flex>
        )}
      </Flex>
    </AnimateCard>
  );
};
