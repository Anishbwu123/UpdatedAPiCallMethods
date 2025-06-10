/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import { HomeScreen } from './src/View/Screen/HomeScreen';

import {Provider} from 'react-redux';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Interceptor from './Adapter/Axios/Interceptor';
import {store} from './Adapter/Redux/Store/Store';
import {NavigationContainers} from './Adapter/Navigation/NavigationContainers';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: 'white',
  };

  return (
    <Provider store={store}>
      <SafeAreaProvider style={backgroundStyle}>
        <QueryClientProvider client={queryClient}>
          <Interceptor>
            <NavigationContainers />
          </Interceptor>
        </QueryClientProvider>
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
