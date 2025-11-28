import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import Beatmap from './Beatmap';
import Home from './Home';

const Stack = createStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
        headerStyle: {
          backgroundColor: '#0d0d0d', 
          borderBottomWidth: 0,      
          shadowColor: 'transparent',
        },
      headerTintColor: '#ff66cc',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 22,
        textShadowColor: '#ff66cc',
      },
      headerTitleAlign: 'center',
      }}
      >
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Accueil' }} 
        />
        <Stack.Screen 
          name="Beatmaps" 
          component={Beatmap} 
          options={{ title: 'Liste des Beatmaps' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
