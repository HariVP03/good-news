import React, { useEffect, useRef, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { NewsCardWide, WeatherCard } from '../../components/NewsCards';
import { key } from '../../weather';

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
    <Flex w="full" h="full" bg="gray.800" p={5}>
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
        desc={data?.weather[0].description}
        icon={icon}
        temp={data?.main.temp}
      />
    </Flex>
  );
};

export default NewsSection;
