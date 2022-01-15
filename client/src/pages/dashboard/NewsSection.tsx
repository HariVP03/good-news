import React, { useEffect, useRef, useState } from 'react';
import { IconButton, chakra, Flex, Skeleton, Spinner } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import {
  NewsCardSmall,
  NewsCardWide,
  WeatherCard,
} from '../../components/NewsCards';
import { key } from '../../weather';
import '../../css/hideScrollbar.css';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { firestore } from '../../firebase';
import NewsArticle from './NewsArticle';

const NewsSection: React.FC = () => {
  const [city, setCity] = useState('New Delhi');
  const [icon, setIcon] = useState<string | null>();
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [loadingNews, setLoadingNews] = useState(true);
  const [news, setNews] = useState<any>([]);
  const [featured, setFeatured] = useState<any>();
  const [isOpen, setIsOpen] = useState(false);
  const [clickedNews, setClickedNews] = useState<
    | {
        title: string;
        topic: string;
        body: string;
        authorName: string;
        authorAvatar: string;
        date: Date;
      }
    | any
  >();

  const getNews = async () => {
    const query = await getDocs(collection(firestore, 'news'));

    query.forEach(doc => {
      const data = doc.data();
      const id = doc.id;
      console.log(data.date.toDate());
      if (data.featured) {
        setFeatured(data);
      } else {
        setNews((prev: any) => {
          let temp1 = JSON.parse(JSON.stringify(prev));
          temp1.push({ ...data, id });
          return temp1;
        });
      }
    });
    setLoadingNews(false);
  };

  const addNews = async () => {
    try {
      const docRef = await addDoc(collection(firestore, 'news'), {
        topic: 'Technology',
        title: 'Impact of Technology on New York',
        views: 0,
        authorName: 'Hari Vishnu Parashar',
        date: new Date(),
        authorAvatar:
          'https://images.unsplash.com/photo-1543871595-e11129e271cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        thumbnail:
          'https://images.unsplash.com/photo-1641784219669-88a6401031dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
        body: 'Some random text haha ok',
      });
      console.log('Document written', docRef.id);
    } catch (e) {
      console.log(e);
    }
  };

  const getWeather = (city: string) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    fetch(url).then((res: any) => {
      res.json().then((data: any) => {
        console.log(data);
        setIcon(
          `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
        );
        setLoading(false);
        setData(data);
      });
    });
  };

  useEffect(() => {
    getWeather(city);
  }, [city]);

  useEffect(() => {
    getNews();
  }, []);

  return (
    <Flex
      w="100%"
      overflowY="scroll"
      position="absolute"
      h="full"
      bg="gray.800"
      direction="column"
      p={isOpen ? 0 : 5}
      pb="15vh"
    >
      {isOpen ? (
        <NewsArticle
          clickedNews={clickedNews}
          onBack={() => {
            setIsOpen(false);
          }}
        />
      ) : (
        <>
          <Flex justify="start" flexWrap="wrap">
            <NewsCardWide
              authorAvatar={featured?.authorAvatar || 'No'}
              authorName={featured?.authorName || 'No'}
              date={featured?.date.toDate() || new Date()}
              thumbnail={featured?.thumbnail || 'No'}
              title={featured?.title || 'No'}
              topic={featured?.topic || 'No'}
              loading={loadingNews}
              onClick={() => {
                setClickedNews({
                  title: featured?.title,
                  topic: featured?.topic,
                  authorName: featured?.authorName,
                  authorAvatar: featured?.authorAvatar,
                  date: featured?.date.toDate(),
                  body: featured?.body,
                });

                setIsOpen(true);
              }}
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
          <Flex maxW="100%" justify="start" flexWrap="wrap">
            {loadingNews ? (
              <NewsCardSmall
                id="No"
                thumbnail="No Thumbnail"
                title="No title"
                views={0}
                topic="No"
                loading={loadingNews}
                onClick={() => {}}
              />
            ) : (
              news?.map((e: any) => {
                return (
                  <NewsCardSmall
                    onClick={() => {
                      news?.forEach((r: any) => {
                        if (r.id === e.id) {
                          setClickedNews({
                            title: r?.title,
                            topic: r?.topic,
                            authorName: r?.authorName,
                            authorAvatar: r?.authorAvatar,
                            date: r?.date.toDate(),
                            body: r?.body,
                          });
                          setIsOpen(true);
                        }
                      });
                    }}
                    key={e.id}
                    id={e.id}
                    thumbnail={e.thumbnail}
                    topic={e.topic}
                    title={e.title}
                    views={e.views}
                  />
                );
              })
            )}
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default NewsSection;
