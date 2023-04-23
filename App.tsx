import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import MainNavigator from './app/content/MainNavigator';
import { store } from './app/store';

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
