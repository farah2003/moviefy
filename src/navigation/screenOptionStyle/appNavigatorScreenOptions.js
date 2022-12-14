const creatTabBarLableStyle = () => {
  return {
    fontSize: 12,
    fontWeight: 'bold',
  };
};

const createTabBarIconStyle = () => {
  return {
    color: '#67686D',
    fontSize: 24,
  };
};

export const appTabsStyle = () => {
  return {
    tabBarActiveTintColor: '#0296E5',
    tabBarIconStyle: createTabBarIconStyle,
    tabBarStyle: {
      backgroundColor: '#242A32',
      height: 60,
      paddingBottom: 7,
      borderTopColor: '#0296E5',
    },
    tabBarLabelStyle: creatTabBarLableStyle,
  };
};
