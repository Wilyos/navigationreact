import { StyleSheet, View, Text, TextInput } from "react-native"


function ProfileScreen ({route,navigation}){
  
    return(
      <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
       {/* <Text>Estamos en el perfil de usuario</Text>
        <Text>Nombre completo es: </Text>
        <Text>El salario: </Text>
    <TextInput value={''}/> */}
        <Text>Estamos en el perfil de usuario</Text>
      </View>
    )
  }



export default ProfileScreen