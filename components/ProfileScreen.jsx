import { StyleSheet, View, Text, TextInput } from "react-native"


function ProfileScreen ({route,navigation}){
  
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Estamos en el perfil de usuario</Text>
        <Text>Nombre completo es: {route.params.fullname}</Text>
        <Text>El salario: {route.params.salary}</Text>
        <TextInput value={route.params.username}/>
      </View>
    )
  }



export default ProfileScreen