import MainNavigator from './src/navigation';
import { Provider } from 'react-redux';
import store from './src/store';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    Lora: require('./src/assets/fonts/Lora.ttf'),
    LoraItalic: require('./src/assets/fonts/LoraItalic.ttf'),
  });

  if(!fontsLoaded) {
    return null;
  }

  return(
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

