import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import './config/config'

// Screens
import Home from './src/screens/Home';
import Add from './src/screens/Add';
import Blank from './src/screens/Blank';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator screenOptions={{
        headerShown: true,
        gestureEnabled: false
      }}>
        <Stack.Screen name="home" component={Home} options={{
          title: 'Notes App',
          headerStyle: {
            backgroundColor: '#f4511e',

          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center'
          },
        }} />
        <Stack.Screen name="add" options={{
          title: 'Add Note',
          headerStyle: {
            backgroundColor: '#f4511e',

          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            alignSelf: 'center'
          },
        }}  component={Add} />
        <Stack.Screen name="blank" component={Blank} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;