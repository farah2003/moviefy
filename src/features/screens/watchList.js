import { Ionicons } from '@expo/vector-icons';
import {
  SafeArea,
  Header,
  HeaderTitle,
  Content,
  Describtion,
  Group,
  SubDescribtion,
} from '../../components';
import { Theme } from '../../theme';

export const WatchlistScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <Header>
        <Ionicons
          name='chevron-back'
          size={24}
          color={Theme.color.primary}
          onPress={() => navigation.goBack()}
        />
        <HeaderTitle style={{ marginHorizontal: 100 }}>Watch List</HeaderTitle>
      </Header>
      <Content>
        <Group source={require('../../../assets/Group.png')} />
        <Describtion>There is no movie yet!</Describtion>
        <SubDescribtion>
          Find your movie by Type title,{'\n'} categories, years, etc
        </SubDescribtion>
      </Content>
    </SafeArea>
  );
};
