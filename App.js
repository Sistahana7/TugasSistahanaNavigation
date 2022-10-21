import * as React from 'react';
import { View, Text , StyleSheet} from  'react-native';
import { NavigationContainer, StackRouter } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Tools from './Tools';
import Galeri from './Galeri';


// function HomeScreen() {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Galeri" component={Galeri} />
        <Stack.Screen name="Tools" component={Tools} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;