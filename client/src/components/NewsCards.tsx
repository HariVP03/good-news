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
    <AnimateCard styles={{ height: '300px', marginBottom: '15px' }}>
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
                    °F
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
                    °F
                  </chakra.h2>
                </Flex>
                <Flex align="center">
                  <chakra.h2 color="gray.400" fontSize="19px">
                    Max Temp&nbsp;
                  </chakra.h2>
                  <chakra.h2>{maxTemp}</chakra.h2>
                  <chakra.h2 fontSize="18px" color="gray.400">
                    °F
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
  views: number;
  title: string;
  thumbnail: string;
}> = ({ views, title, thumbnail }) => {
  return (
    <AnimateCard styles={{ height: '150px', marginBottom: '15px' }}>
      <Flex
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
              <chakra.h2 color="gray.400">👁 {views.toLocaleString()}</chakra.h2>
              <chakra.h2 mt={1} fontSize="18px">
                {title}
              </chakra.h2>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </AnimateCard>
  );
};
