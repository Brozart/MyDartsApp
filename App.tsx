import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from 'content/MainNavigator';
import { Provider } from 'react-redux';
import { store } from 'store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
