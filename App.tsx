import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

// import RootNavigator from './src/navigation/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text>App is running 🚀</Text>
        </View>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
