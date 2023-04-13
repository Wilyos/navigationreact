import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './components/ProfileScreen';
import Login from './components/login';
const Stack = createNativeStackNavigator()

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name="Home" component={HomeScreen}options={{title:'Inicio'}} />
          <Stack.Screen name="Contacts" component={ContacScreen} options={{title:'Contactos'}}/>
          <Stack.Screen name="Profile" component={ProfileScreen} options={{title:'Perfil del Usuario'}} />
          <Stack.Screen name="Login" component={Login} options={{title:'Login'}} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
function HomeScreen({route,navigation}){
  return(
    <View style={styles.container}>
      <Text>Inicio</Text>
      <Text>Bienvenido: {route.params.fullname}</Text>
      <Button 
      title='Ir a contáctenos'
      onPress={()=>{
        navigation.navigate('Contacts')
      }}
      />
    </View>
  )
}

function ContacScreen({navigation}){
  let fullname = 'Jhon Whick'
  let username = 'babayaga'
  let salary = 2500000
  return(
    <View style={styles.container}>
      <Text>Estamos en Contact</Text>
      <Button 
      title='Perfil del usuario'
      onPress={()=>{
        navigation.navigate('Profile',{fullname: fullname, username: username,salary:salary})
      }}
      />
    </View>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
