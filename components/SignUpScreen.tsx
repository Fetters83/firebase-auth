import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput ,TouchableOpacity} from 'react-native';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import AlreadyHaveAccount from './AlreadyHaveAccount';


function SignUpScreen({navigation}: {navigation: any}){

   const [email, setEmail] = useState('')
   const [password,setPassword] = useState('')
   console.log(navigation)

   console.log(email)
   console.log(password)

   const handleSignUp = async ()=>{
    if(email && password){
        try {

            await createUserWithEmailAndPassword(auth,email,password)
            
        } catch (error) {
            console.log(error)
        }
    }
   }

   const handleNavigateToLogin = ()=>{
    navigation.navigate('login')
}

    return (<View style={styles.container}>
        <Text style={{textAlign:"center",marginBottom:20,fontSize:20}}>Sign up</Text>
        <Text>Email</Text>
        <TextInput style={styles.input} value={email} onChangeText={(value=>setEmail(value))}></TextInput>
        <Text>Password</Text>
        <TextInput style={styles.input} value={password} onChangeText={value=>setPassword(value)}></TextInput>
        <View>
            <TouchableOpacity style={styles.button} onPress={handleSignUp}><Text style={styles.button_text}>Login</Text></TouchableOpacity>
        </View>
        <View style={styles.already_have_account_container} >
            <Text style={{textAlign:"center"}}>Already Have an account?</Text>
            <TouchableOpacity style={styles.navigate_to_login} onPress={handleNavigateToLogin}><Text style={styles.button_text}>Click Here to Login</Text></TouchableOpacity>
        </View>
       
      
    </View>)
}

const styles = StyleSheet.create({
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
        
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      already_have_account_container:{
        padding:30,
        margin:20
    },
    navigate_to_login:{
        paddingTop:5,
        backgroundColor:'grey',
        marginTop:20,   
        width:300
    }
,
       
        
    }

  );





export default SignUpScreen