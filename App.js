import { AppNavigator } from './src/navigation';
import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['']);

export default function App() {
  return <AppNavigator />;
}
