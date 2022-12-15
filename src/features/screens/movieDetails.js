import { useEffect, useState } from 'react';
import axios from 'axios';
import { View, StyleSheet, Image, Text } from 'react-native';
import {
  Ionicons,
  Fontisto,
  Feather,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import {
  SafeArea,
  Header,
  Wapper,
  ImageBackgroundMoviePoster,
  HeaderTitle,
} from '../../components/index';
import { Theme } from '../../theme';
import { MovieInfoNavigtor } from '../../navigation/index';

export const MovieDetails = ({
  route: {
    params: { id },
  },
  navigation,
}) => {
  const [details, setDetails] = useState({
    title: '',
    posterImg: '',
    movieImg: '',
    vote: '',
    category: '',
    year: '',
  });
  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchDetails = async () => {
      try {
        const {
          data: {
            backdrop_path,
            title,
            poster_path,
            release_date,
            vote_average,
            genres,
          },
        } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=0cd5b087887762448dcaa7155b7e23a2&language=en-US`,
          { cancelToken: source.token }
        );
        let year = release_date.split('-')[0];
        let vote = Math.round(vote_average * 10) / 10;
        setDetails({
          title,
          posterImg: poster_path,
          movieImg: backdrop_path,
          year,
          vote,
          category: genres[0].name,
        });
      } catch (e) {
        console.log(e);
      }
    };
    fetchDetails();
  }, []);

  const { posterImg, movieImg, vote, category, year, title } = details;
  return (
    <SafeArea>
      <Header>
        <Ionicons
          name='chevron-back'
          size={24}
          color={Theme.color.primary}
          onPress={() => navigation.goBack()}
        />
        <HeaderTitle>Details</HeaderTitle>
        <Fontisto
          name='favorite'
          size={26}
          color={Theme.color.primary}
          style={{ marginTop: 3 }}
          width='327'
          height='35'
        />
      </Header>
      <Wapper>
        <ImageBackgroundMoviePoster
          resizeMode='stretch'
          source={{
            uri: `https://image.tmdb.org/t/p/original${movieImg}`,
          }}
        ></ImageBackgroundMoviePoster>
        <View style={styles.content}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/original${posterImg}`,
            }}
            style={styles.movieImg}
          />
          <Text style={{ ...styles.text }}>{title}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.textInfo}>
            <Feather
              name='calendar'
              size={20}
              color={Theme.color.secandary}
              style={{ marginRight: 10 }}
            />{' '}
            {year}
            {'  '} | {'  '}
            <Feather
              name='clock'
              size={20}
              color={Theme.color.secandary}
              style={{ marginRight: 10 }}
            />{' '}
            139 Minutes {'  '}| {'  '}
            <MaterialCommunityIcons
              name='ticket-outline'
              size={20}
              color={Theme.color.secandary}
              style={{ marginRight: 10 }}
            />{' '}
            {category}
          </Text>
        </View>
      </Wapper>
      <MovieInfoNavigtor id={id} />
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  movieImg: {
    height: 150,
    width: 120,
    marginLeft: 25,
    borderRadius: 16,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    marginTop: -80,
  },
  text: {
    marginTop: 100,
    fontWeight: '600',
    lineHeight: 27,
    color: Theme.color.primary,
    marginLeft: 10,
  },
  info: {
    width: '100%',
    alignContent: 'center',
    alignItems: 'center',
  },
  textInfo: {
    fontSize: 14,
    color: Theme.color.secandary,
    marginBottom: 10,
  },
});
