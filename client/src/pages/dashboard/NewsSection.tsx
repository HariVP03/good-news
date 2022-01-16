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
import {
  collection,
  getDocs,
  addDoc,
  Timestamp,
  doc,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore';
import { auth, firestore } from '../../firebase';
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

  const getWeather = (city: string) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
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
      pt={3}
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
          <Flex
            direction={[
              'column-reverse',
              'column-reverse',
              'column-reverse',
              'column-reverse',
              'row',
            ]}
            justify={['end', 'end', 'end', 'end', 'center']}
            align={['center', 'center', 'center', 'center', 'start']}
            flexWrap="wrap"
            w="100%"
          >
            <NewsCardWide
              authorAvatar={featured?.authorAvatar || 'An error occured'}
              authorName={featured?.authorName || 'An error occured'}
              date={featured?.date.toDate() || new Date()}
              thumbnail={featured?.thumbnail || 'An error occured'}
              title={featured?.title || 'An error occured'}
              topic={featured?.topic || 'An error occured'}
              loading={loadingNews}
              onClick={async () => {
                setClickedNews({
                  title: featured?.title,
                  topic: featured?.topic,
                  authorName: featured?.authorName,
                  authorAvatar: featured?.authorAvatar,
                  date: featured?.date.toDate(),
                  body: featured?.body,
                });
                let email = auth.currentUser?.email;
                const views = featured?.views;
                if (email && !views.includes(email)) {
                  const docRef = doc(firestore, 'news', featured?.id);
                  await updateDoc(docRef, {
                    views: arrayUnion(email),
                  });
                }
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
          <Flex mt={5} w="100%" flexWrap="wrap" justify="center">
            {loadingNews ? (
              <NewsCardSmall
                id="No"
                thumbnail="No Thumbnail"
                title="No title"
                views={[]}
                topic="No"
                loading={loadingNews}
                onClick={() => {}}
              />
            ) : (
              news?.map((e: any) => {
                return (
                  <NewsCardSmall
                    onClick={async () => {
                      for (let i = 0; i < news?.length; i++) {
                        const r = news[i];
                        if (r.id === e.id) {
                          setClickedNews({
                            title: r?.title,
                            topic: r?.topic,
                            authorName: r?.authorName,
                            authorAvatar: r?.authorAvatar,
                            date: new Date(r?.date.seconds * 1000),
                            body: r?.body,
                          });
                          let email = auth.currentUser?.email;
                          if (email && !r.views.includes(email)) {
                            const docRef = doc(firestore, 'news', r.id);
                            await updateDoc(docRef, {
                              views: arrayUnion(email),
                            });
                          }
                          setIsOpen(true);
                        }
                      }
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
