import { StyleSheet, View, Text, TextInput, Button } from "react-native"
import { useState } from 'react';


// arreglo de usuarios
let users = [{username:'wilyos',password:'1234', fullname:'Wilmer B', role:1},{username:'babayagga',password:'666', fullname:'Jhon Whick',role:2}]

function Login({navigation}){
    const [username,setUsername]= useState('')
    const [password,setPassword] = useState('')


    let signUp=()=>{
        
        if(username != '' && password != ''){
            var login = users.find(person=> person.username ==username && person.password)
            let fullname = login.fullname
            if(login.username ==username && login.password == password && login.role == 1){

                navigation.navigate('Home',{username: username, fullname: fullname})
            }
            else{
                alert('el usuario o contaseña no son validos')
            }
        }
        else{
            alert('Todos los datos deben ser rellenados')
        }
    }

    return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <View>
            <Text>Usuario</Text>
            <TextInput  onChangeText={username=>setUsername(username)}/>
        </View>
        <View>
            <Text>Contraseña</Text>
            <TextInput onChangeText={password=>setPassword(password)} />
        </View>
        <View>
            <Button
                title='Entrar'
                onPress={()=>signUp()}
            />
        </View>
        
    </View>
    )
}

export default Login