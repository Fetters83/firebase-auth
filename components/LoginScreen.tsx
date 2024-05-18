import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput ,TouchableOpacity} from 'react-native';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';


function LoginScreen({navigation}: {navigation: any}){

   const [email, setEmail] = useState('')
   const [password,setPassword] = useState('')
   const [isValidCredentials, setIsValidCredentials] = useState(true)

   console.log(email)
   console.log(password)

   const handleLogIn = async ()=>{
    if(email && password){
        try {
            console.log("in login sceeen try block")
            await signInWithEmailAndPassword(auth,email,password)
            setIsValidCredentials(true)
            
        } catch (error) {
            setIsValidCredentials(false)
            console.log(error)
        }
    }
   }

    return (<View style={styles.container}>
        <Text>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={(value=>setEmail(value))}></TextInput>
        <Text>Password</Text>
        <TextInput style={styles.input} value={password} onChangeText={value=>setPassword(value)}></TextInput>
        <View>
            <TouchableOpacity style={styles.button} onPress={handleLogIn}><Text style={styles.button_text}>Login</Text></TouchableOpacity>
        </View>
        {!isValidCredentials && <Text>You have entered invalid credentials, please try again</Text>}
      
    </View>)
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    input: {
    borderStyle:'solid' ,
    borderColor:'black',
    borderWidth:1,
    color:'blue',
    margin:5,
    width:300
   

    },
    button: {
        backgroundColor:'grey',
        marginTop:20     
        
    },
    button_text: {
       color:'white',
       fontSize:20,
       textAlign:'center'     
        
    }

  });

export default LoginScreen