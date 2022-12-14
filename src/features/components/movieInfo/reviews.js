import { useState, useEffect, useContext } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import axios from 'axios';
import {
  Container,
  Review,
  Avater,
  Rating,
  ReivewRightContainer,
  ReivewLeftContainer,
  Reviewer,
  Description,
} from '../../../components/index';
import { MoiveContext } from '../../../hooks/context';

export const Reviews = () => {
  const { movieId } = useContext(MoiveContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchCast = async () => {
      try {
        const {
          data: { results },
        } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=0c d5b087887762448dcaa7155b7e23a2&language=en-US&page=1`
        );
        setData(results);
        setError(false);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(ture);
        setData([]);
      }
    };
    fetchCast();
    return () => source.cancel();
  }, []);
  const Item = ({
    item: {
      author,
      author_details: { avatar_path, rating },
      content,
    },
  }) => {
    avatar_path = avatar_path?.slice(1);
    return (
      <Review>
        <ReivewRightContainer>
          <Avater
            source={{
              uri: avatar_path,
            }}
          />
          <Rating>{rating}</Rating>
        </ReivewRightContainer>
        <ReivewLeftContainer>
          <Reviewer>{author}</Reviewer>
          <Description>{content}</Description>
        </ReivewLeftContainer>
      </Review>
    );
  };

  const renderItem = ({ item }) => <Item item={item} />;
  return (
    <>
      {loading ? (
        <ActivityIndicator size='large' color='#FFFF' />
      ) : (
        <>
          {error ? (
            <Text>fhgh</Text>
          ) : (
            <Container>
              <FlatList
                numColumns={1}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </Container>
          )}
        </>
      )}
    </>
  );
};
