import axios from 'axios';
import { useEffect, useState } from 'react';
import { ImageBackground, View, StyleSheet, Image, Text } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import { SafeArea, Header } from '../../components/index';
import { MovieInfoNavigtor } from '../../navigation/index';
export const MovieDetails = ({
  route: {
    params: { name, id },
  },
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
  });

  const { posterImg, movieImg, vote, category, year, title } = details;
  return (
    <SafeArea>
      <Header>
        <Ionicons name='chevron-back' size={24} color='#FFFFFF' />
        <Text style={styles.title}>Details</Text>
        <Fontisto
          name='favorite'
          size={26}
          color='#FFFF'
          style={styles.favorite}
          width='327'
          height='35'
        />
      </Header>
      <View style={styles.container}>
        <ImageBackground
          resizeMode='stretch'
          source={{
            uri: `https://image.tmdb.org/t/p/original${movieImg}`,
          }}
          style={styles.cover}
        ></ImageBackground>
        <View style={styles.content}>
          <Image
            source={{
              uri: `https://image.tmdb.org/t/p/original${posterImg}`,
            }}
            style={styles.movieImg}
          />
          <Text style={{ ...styles.text }}>{title}</Text>
        </View>
        {/* <View style={styles.info}>
          <Image
            source={require('../../../../assets/Ticket.png')}
            style={styles.icons}
          />
          <Image
            source={require('../../../../assets/CalendarBlank.png')}
            style={styles.icons}
          />
          <Image
            source={require('../../../../assets/Clock.png')}
            style={styles.icons}
          />
        </View> */}
      </View>
      <MovieInfoNavigtor id={id} />
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.6,
  },
  cover: {
    width: '100%',
    height: 190,
  },
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
    color: '#ffff',
    marginLeft: 10,
  },
  icons: {
    width: 100,
    height: 100,
    padding: 2,
    borderRightColor: '#696974',
  },
  info: {
    flexDirection: 'row',
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    flex: 0.1,
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    lineHeight: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginHorizontal: 120,
  },
  favorite: {
    marginTop: 3,
  },
});
