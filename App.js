import MainNavigator from './src/navigation';
import { Provider } from 'react-redux';
import { init } from './src/data/Index';
import store from './src/store';
import { useFonts } from 'expo-font';

init()
  .then(() => console.log("Database initialized"))
  .catch((err) => {
    console.log("Data base fail connect");
    console.log(err.message);
  });

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

