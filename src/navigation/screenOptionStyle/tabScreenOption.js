import { Theme } from '../../theme';
const creatTabBarStyle = {
  backgroundColor: Theme.color.background,
  height: 60,
  paddingBottom: 7,
  borderTopWidth: 0,
  borderBottomWidth: 0,
  elevation: 0,
};
const creatTabBarLableStyle = {
  textTransform: 'none',
  fontSize: 12,
  fontWeight: '500',
};
const creatTabBarIndicatorStyle = {
  backgroundColor: Theme.color.secandaryBackground,
  padding: 3,
};
export const tabsStyle = {
  tabBarInactiveTintColor: Theme.color.primary,
  tabBarActiveTintColor: Theme.color.secandary,
  tabBarIndicatorStyle: creatTabBarIndicatorStyle,
  tabBarStyle: creatTabBarStyle,
  tabBarLabelStyle: creatTabBarLableStyle,
};
