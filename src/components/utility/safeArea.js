import {
  StatusBar,
  SafeAreaView,
  Image,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import styled from 'styled-components/native';
import { Svg } from 'react-native-svg';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: #242a32;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
export const Container = styled(View)`
  flex: 1;
  background-color: #242a32;
`;
export const MovieContainer = styled(View)`
  margin-horizontal: 9px;
  margin-top: 20px;
`;

export const CastContainer = styled(View)`
  margin-horizontal: 40px;
  margin-top: 20px;
`;

export const MovieImage = styled(Image)`
  border-radius: 15;
  width: 110px;
  height: 155px;
  marginbottom: 10px;
`;

export const CastImage = styled(Image)`
  border-radius: 50px;
  width: 100px;
  height: 100px;
  marginbottom: 10px;
`;

export const Search = styled(View)`
  background-color: #3a3f47;
  width: 90%;
  height: 45;
  margin-horizontal: 20;
  margin-bottom: 10;
  border-radius: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 10;
`;
export const AboutMovieView = styled(View)`
  flex: 1;
  background-color: #242a32;
  padding: 29px;
`;
export const OverView = styled(Text)`
  font-size: 14;
  font-weight: 400;
  line-height: 18;
  color: #ffff;
  align-items: center;
`;

export const Review = styled(View)`
  flex-direction: row;
  padding: 24px;
`;
export const Avater = styled(Image)`
  width: 50;
  height: 50;
  border-radius: 50;
`;
export const Rating = styled(Text)`
  font-size: 14;
  font-weight: 500;
  color: #0296e5;
  align-items: center;
  text-align: center;
  margin-top: 10;
`;

export const ReivewRightContainer = styled(View)`
  width: 15%;
  margin-right: 10px;
`;
export const ReivewLeftContainer = styled(View)`
  width: 83%;
`;
export const Reviewer = styled(Text)`
  font-size: 13;
  color: #ffff;
  line-height: 18;
  font-weight: 700;
`;

export const Description = styled(Text)`
  font-size: 13;
  color: #ffff;
  line-height: 18;
  font-weight: 400;
`;

export const Question = styled(Text)`
  font-size: 18;
  color: #ffff;
  line-height: 27;
  font-weight: 700;
  margin-horizontal: 20;
  margin-vertical: 12;
`;

export const NumberSvg = styled(Svg)`
  position: absolute;
  right: 40;
  top: 150;
`;
export const Wapper = styled(View)`
  flex: 0.9;
`;
export const MovieImageWrapper = styled(View)`
  padding: 5px;
  margin-horizontal: 12;
`;
export const SuggestedMovieImage = styled(Image)`
  width: 145;
  height: 210;
  border-radius: 15;
`;
export const Header = styled(View)`
  flex-direction: row;
  padding-horizontal: 24;
  flex: 0.1;
  align-content: center;
  align-items: center;
  margin-vertical: 10;
`;

export const HeaderTitle = styled(Text)`
  font-size: 18;
  line-height: 20;
  font-weight: 600;
  color: #ffffff;
  margin-horizontal: 120;
`;

export const SearchListItem = styled(View)`
  flex-direction: row;
  margin-vertical: 15;
  padding-horizontal: 24;
`;
export const MovieTitle = styled(Text)`
  font-size: 16;
  line-height: 24;
  font-weight: 600;
  color: #ffffff;
  margin-top: 4;
  margin-bottom: 10;
`;
export const SearchListImage = styled(Image)`
  border-radius: 15;
  width: 120px;
  height: 150px;
  marginbottom: 10px;
`;
export const Icons = styled(Text)`
  color: #ffffff;
  margin-bottom: 8;
  font-weight: 600;
  font-size: 14;
`;
export const ImageBackgroundMoviePoster = styled(ImageBackground)`
  width: 100%;
  height: 190px;
`;
export const NavigationWapper = styled(View)`
  flex: 0.7;
`;
export const Content = styled(View)`
  flex: 0.9;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const Group = styled(Image)`
  width: 70px;
  height: 85px;
`;
export const Describtion = styled(Text)`
  font-size: 18;
  font-weight: 600;
  color: #ffffff;
`;
export const SubDescribtion = styled(Text)`
  font-size: 14;
  font-weight: 500;
  color: #92929d;
  text-align: center;
  margin-top: 10px;
`;
