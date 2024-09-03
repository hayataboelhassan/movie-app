import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();
import Home from './pages/Home';
import Favorits from './pages/Favorits';
import Detils from './pages/Detils';
export default function App() {
  return <>
     <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} options={{
       headerStyle: {
            backgroundColor: 'grey', 
          },
           headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold', 
            fontSize:30
          },
      }}/>
      <Drawer.Screen name="Favorits" component={Favorits} options={{
       headerStyle: {
            backgroundColor: 'red'
            
          },
           headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold', 
            fontSize:30
          },
      }} />
      <Drawer.Screen name="Detils" component={Detils} options={{
       headerStyle: {
            backgroundColor: 'grey'
            
          },
           headerTintColor: '#fff', 
          headerTitleStyle: {
            fontWeight: 'bold', 
            fontSize:30
          },
      }} />
    </Drawer.Navigator>
        </NavigationContainer>
  </>;
}
