import React, { useEffect, useRef, useState } from 'react';
import { chakra, Flex } from '@chakra-ui/react';
import {
  NewsCardSmall,
  NewsCardWide,
  WeatherCard,
} from '../../components/NewsCards';
import { key } from '../../weather';
import '../../css/hideScrollbar.module.css';

const NewsSection: React.FC = () => {
  const [city, setCity] = useState('New Delhi');
  const [icon, setIcon] = useState<string | null>();
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);

  const getWeather = (city: string) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    fetch(url).then((res: any) => {
      res.json().then((data: any) => {
        console.log(data);
        setIcon(
          `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
        );
        console.log(icon);
        setLoading(false);
        setData(data);
      });
    });
  };

  useEffect(() => {
    getWeather(city);
  }, [city]);

  return (
    <Flex
      maxW="100%"
      overflowY="scroll"
      position="absolute"
      h="full"
      bg="gray.800"
      p={5}
      direction="column"
      pb="15vh"
    >
      <Flex justify="space-between">
        <NewsCardWide
          authorAvatar="https://images.unsplash.com/photo-1543871595-e11129e271cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          authorName="Lucy Hale"
          date={new Date()}
          thumbnail="https://images.unsplash.com/photo-1466500419182-8602dc906b51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          title="The Advent of Technology and How It has Affected New Yorker's Lifestyle"
          topic="Technology"
        />
        <WeatherCard
          loading={loading}
          city={data?.name}
          humidity={data?.main.humidity}
          minTemp={data?.main.temp_min}
          maxTemp={data?.main.temp_max}
          pressure={data?.main.pressure}
          desc={data?.weather[0].description}
          icon={icon}
          temp={data?.main.temp}
        />
      </Flex>
      <chakra.h2>Other News</chakra.h2>
      <Flex maxW="100%" justify="space-around" flexWrap="wrap">
        <NewsCardSmall
          thumbnail="https://images.unsplash.com/photo-1641784219669-88a6401031dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          title="Bitcoin on an all-time high!"
          views={3542}
        />
        <NewsCardSmall
          thumbnail="https://images.unsplash.com/photo-1641784219669-88a6401031dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          title="Bitcoin on an all-time high!"
          views={3542}
        />
        <NewsCardSmall
          thumbnail="https://images.unsplash.com/photo-1641784219669-88a6401031dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          title="Bitcoin on an all-time high!"
          views={3542}
        />
        <NewsCardSmall
          thumbnail="https://images.unsplash.com/photo-1641784219669-88a6401031dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          title="Bitcoin on an all-time high!"
          views={3542}
        />
        <NewsCardSmall
          thumbnail="https://images.unsplash.com/photo-1641784219669-88a6401031dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          title="Bitcoin on an all-time high!"
          views={3542}
        />
        <NewsCardSmall
          thumbnail="https://images.unsplash.com/photo-1641784219669-88a6401031dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          title="Bitcoin on an all-time high!"
          views={3542}
        />
        <NewsCardSmall
          thumbnail="https://images.unsplash.com/photo-1641784219669-88a6401031dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          title="Bitcoin on an all-time high!"
          views={3542}
        />
        <NewsCardSmall
          thumbnail="https://images.unsplash.com/photo-1641784219669-88a6401031dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          title="Bitcoin on an all-time high!"
          views={3542}
        />
        <NewsCardSmall
          thumbnail="https://images.unsplash.com/photo-1641784219669-88a6401031dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          title="Bitcoin on an all-time high!"
          views={3542}
        />
        <NewsCardSmall
          thumbnail="https://images.unsplash.com/photo-1641784219669-88a6401031dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          title="Bitcoin on an all-time high!"
          views={3542}
        />
        <NewsCardSmall
          thumbnail="https://images.unsplash.com/photo-1641784219669-88a6401031dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          title="Bitcoin on an all-time high!"
          views={3542}
        />
        <NewsCardSmall
          thumbnail="https://images.unsplash.com/photo-1641784219669-88a6401031dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
          title="Bitcoin on an all-time high!"
          views={3542}
        />
      </Flex>
    </Flex>
  );
};

export default NewsSection;
