import { Theme } from '../../theme';
const creatTabBarLableStyle = () => {
  return {
    fontSize: 12,
    fontWeight: 'bold',
  };
};

const createTabBarIconStyle = () => {
  return {
    color: Theme.color.secandary,
    fontSize: 24,
  };
};

export const appTabsStyle = () => {
  return {
    tabBarActiveTintColor: Theme.color.active,
    tabBarIconStyle: createTabBarIconStyle,
    tabBarStyle: {
      backgroundColor: Theme.color.background,
      height: 60,
      paddingBottom: 7,
      borderTopColor: Theme.color.active,
    },
    tabBarLabelStyle: creatTabBarLableStyle,
  };
};
