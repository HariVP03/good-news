import React from 'react';
import { Avatar, chakra, Flex, Icon, Image, Spinner } from '@chakra-ui/react';
import { AnimateCard, AnimateDiv } from '../animations/scaleAnimation';
import months from '../utilities/month';
import { ViewIcon } from '@chakra-ui/icons';

export const NewsCardWide: React.FC<{
  onClick: () => void;
  topic: string;
  loading: boolean;
  title: string;
  authorName: string;
  date: Date;
  authorAvatar: string;
  thumbnail: string;
}> = ({
  topic,
  title,
  onClick,
  authorName,
  date,
  authorAvatar,
  thumbnail,
  loading,
}) => {
  const month = months[date.getMonth()];
  const date1 = date.getDate().toString();
  const year = date.getFullYear().toString();
  const formattedDate = `${month} ${date1}, ${year}`;

  return (
    <AnimateCard styles={{ maxHeight: '100%', maxWidth: '100%' }}>
      <Flex
        onClick={onClick}
        mx={2}
        w={['350px', '400px', '500px', '600px']}
        h={['250px', '200px', '250px', '300px']}
        cursor="pointer"
        bg="#101724"
        rounded="lg"
        align="center"
        justify="space-around"
        boxShadow="lg"
        px={2}
      >
        {loading ? (
          <Spinner color="gray.400" />
        ) : (
          <>
            {' '}
            <Image
              src={thumbnail}
              objectFit="cover"
              borderColor="#101724"
              w="50%"
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
                  <chakra.h2 color="gray.400" maxBlockSize="md">
                    {topic}
                  </chakra.h2>
                  <chakra.h2
                    maxBlockSize="md"
                    mt={3}
                    fontSize={['18px', '18px', '20px', '25px']}
                  >
                    {title}
                  </chakra.h2>
                </Flex>
                <Flex align="center">
                  <Avatar src={authorAvatar} mr={2} />
                  <Flex direction="column" justify="center">
                    <chakra.h2
                      _hover={{ textDecor: 'underline' }}
                      fontSize={['14px', '14px', '16px', '18px']}
                    >
                      {authorName}
                    </chakra.h2>
                    <chakra.h2 fontSize={['14px', '14px', '16px', '18px']}>
                      {formattedDate}
                    </chakra.h2>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </>
        )}
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
  minTemp: string;
  maxTemp: string;
  humidity: number;
  pressure: number;
}> = ({
  city,
  icon,
  temp,
  desc,
  loading,
  humidity,
  pressure,
  minTemp,
  maxTemp,
}) => {
  const toTitleCase = (f: string) => {
    if (!f) return f;
    let r = f[0].toUpperCase();
    return r + f.slice(1, f.length);
  };
  return (
    <AnimateCard
      styles={{
        maxHeight: '100%',
        maxWidth: '300px',
        marginBottom: '15px',
      }}
    >
      <Flex
        w="300px"
        mx={2}
        h="300px"
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
        justify={loading ? 'center' : 'start'}
        align={loading ? 'center' : 'start'}
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
                w="50px"
                h="50px"
                objectFit="cover"
                rounded="full"
              />
              <Flex direction="column" ml={1}>
                <Flex align="center">
                  <chakra.h2 fontsize="18px">{temp}</chakra.h2>
                  <chakra.h2 fontSize="18px" color="gray.400">
                    °c
                  </chakra.h2>
                </Flex>
                <chakra.h2 fontSize="20px" color="gray.400">
                  {toTitleCase(desc)}
                </chakra.h2>
                <Flex align="center" mt={5}>
                  <chakra.h2 color="gray.400" fontSize="19px">
                    Min Temp&nbsp;
                  </chakra.h2>
                  <chakra.h2>{minTemp}</chakra.h2>
                  <chakra.h2 fontSize="18px" color="gray.400">
                    °c
                  </chakra.h2>
                </Flex>
                <Flex align="center">
                  <chakra.h2 color="gray.400" fontSize="19px">
                    Max Temp&nbsp;
                  </chakra.h2>
                  <chakra.h2>{maxTemp}</chakra.h2>
                  <chakra.h2 fontSize="18px" color="gray.400">
                    °c
                  </chakra.h2>
                </Flex>
                <Flex align="center">
                  <chakra.h2 color="gray.400" fontSize="19px">
                    Humidity&nbsp;
                  </chakra.h2>
                  <chakra.h2>{humidity}</chakra.h2>
                </Flex>
                <Flex align="center">
                  <chakra.h2 color="gray.400" fontSize="19px">
                    Pressure&nbsp;
                  </chakra.h2>
                  <chakra.h2>{pressure}</chakra.h2>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        )}
      </Flex>
    </AnimateCard>
  );
};

export const NewsCardSmall: React.FC<{
  onClick: () => void;
  topic: string;
  id: string;
  views: string[];
  loading?: boolean;
  title: string;
  thumbnail: string;
}> = ({ id, views, title, thumbnail, loading = false, topic, onClick }) => {
  return (
    <AnimateCard styles={{ height: '150px', marginBottom: '15px' }}>
      <Flex
        onClick={onClick}
        mx={2}
        w="350px"
        py={2}
        h="150px"
        cursor="pointer"
        bg="#101724"
        rounded="lg"
        overflow="clip"
        align="center"
        justify="space-around"
        boxShadow="lg"
        px={2}
      >
        {loading ? (
          <Spinner color="gray.400" />
        ) : (
          <>
            {' '}
            <Image
              src={thumbnail}
              objectFit="cover"
              borderColor="#101724"
              w="150px"
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
                h="100%"
                direction="column"
                justify="center"
                fontFamily="'Karla', sans-serif;"
                color="gray.200"
                fontWeight="bold"
                ml={2}
                overflow="hidden"
              >
                <Flex direction="column">
                  <chakra.h2
                    display="flex"
                    alignItems="center"
                    color="gray.400"
                  >
                    <ViewIcon />
                    &nbsp;{views?.length?.toLocaleString()}
                  </chakra.h2>
                  <chakra.h2 color="gray.400" mb={1} maxBlockSize="md">
                    {topic}
                  </chakra.h2>
                  <chakra.h2 fontSize="18px" noOfLines={2} maxBlockSize="md">
                    {title}
                  </chakra.h2>
                </Flex>
              </Flex>
            </Flex>
          </>
        )}
      </Flex>
    </AnimateCard>
  );
};
