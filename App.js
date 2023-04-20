import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './components/ProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons'
import { TextInput, Button, Icon } from 'react-native-paper';
import { useState } from 'react';

let users = [
{ username: 'wilyos', password: '1234', fullname: 'Wilmer B', role: 1 }, 
{ username: 'babayagga', password: '666', fullname: 'Jhon Whick', role: 2 }
]


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeTabs'>

          <Stack.Screen name="HomeTabs" component={HomeTabs}options={{title:'Sistema de prueba'}} />
         
        </Stack.Navigator>
      </NavigationContainer>
  );
}
function LoginScreen({route,navigation}){
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [errormessage, setErrorMessage] = useState('')
  return(
    <View style={styles.container}>
      <Text style={{marginBottom:10}} >Inicio</Text>
      <Text style={{color:'red'}} >{errormessage}</Text>
      <TextInput label="Usuario" mode='outlined' left={<TextInput.Icon icon="account"/>} onChangeText={username=> setUsername(username)} value={username} />

      <TextInput style={{marginTop:10,marginBottom:10}} label="Contraseña" mode='outlined' left={<TextInput.Icon icon="eye" />} onChangeText={password => setPassword(password)} value={password} secureTextEntry/>
      
      <Button icon="door" mode="contained" onPress={()=>{
        let login = users.find(person => person.username == username && person.password)
        if(login != undefined){
          const {fullname, username} = login
          setErrorMessage('')
          navigation.navigate('Contacts',{name:fullname,username:username})
        }
        else{
          setErrorMessage('Usuario y/o contraseña invalidos')
        }
      }}>
        Sign in
      </Button>
    </View>
    
  )
}

function ContacScreen({route,navigation}){
  let fullname = 'Jhon Whick'
  let username = 'babayaga'
  let salary = 2500000
  return(
    <View style={styles.container}>
      <Text>Estamos en Contact</Text>
      <Text>{route.params.name}</Text>
      <Text>{route.params.username}</Text>
    </View>
  )
}

function HomeTabs(){
  return(
    <Tab.Navigator
      screenOptions={{tabBarActiveTinColor:'red', tabBarInactiveBackgroundColor:'white', tabBarActiveBackgroundColor:'orange', headerShown:false}}
      >
      <Tab.Screen name="Login" component={LoginScreen} options={{
        tabBarStyle:{display:'none'},
        tabBarIcon:(tabInfo)=>(<MaterialIcons name="person" size={25}/>)
      }}/>
      <Tab.Screen name="Contacts" component={ContacScreen} options={{
        tabBarIcon: (tabInfo) => (<MaterialIcons name="contacts" size={25} />)
      }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        //tabBarStyle:{display:'none'}
        tabBarIcon: (tabInfo) => (<MaterialIcons name="zoom-out" size={25} />)
      }}/>
    </Tab.Navigator>
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
