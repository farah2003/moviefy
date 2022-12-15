import { StatusBar, SafeAreaView, View, ImageBackground } from 'react-native';
import styled from 'styled-components/native';
import { Svg } from 'react-native-svg';
import { Theme } from '../../theme';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${Theme.color.background};
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
export const Container = styled(View)`
  flex: 1;
  background-color: ${Theme.color.background};
`;
export const MovieContainer = styled(View)`
  margin-horizontal: 9px;
  margin-top: 20px;
`;

export const CastContainer = styled(View)`
  margin-horizontal: 40px;
  margin-top: 20px;
`;

export const Search = styled(View)`
  background-color: ${Theme.color.secandaryBackground};
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
  background-color: ${Theme.color.background};
  padding: 29px;
`;

export const Review = styled(View)`
  flex-direction: row;
  padding: 24px;
`;

export const ReivewRightContainer = styled(View)`
  width: 15%;
  margin-right: 10px;
`;
export const ReivewLeftContainer = styled(View)`
  width: 83%;
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

export const Header = styled(View)`
  flex-direction: row;
  padding-horizontal: 24;
  flex: 0.1;
  align-content: center;
  align-items: center;
  margin-vertical: 10;
`;

export const SearchListItem = styled(View)`
  flex-direction: row;
  margin-vertical: 15;
  padding-horizontal: 24;
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
