import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
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

export const Reviews = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchCast = async () => {
      try {
        const {
          data: { results },
        } = await axios.get(
          `https://api.themoviedb.org/3/movie/550/reviews?api_key=0cd5b087887762448dcaa7155b7e23a2&language=en-US&page=1`
        );
        setData(results);
      } catch (e) {
        console.log(e);
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
    <Container>
      <FlatList
        numColumns={1}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </Container>
  );
};
