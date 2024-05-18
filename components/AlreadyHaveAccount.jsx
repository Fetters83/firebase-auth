import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginScreen from './LoginScreen';

const Stack = createNativeStackNavigator();

function AlreadyHaveAccount({navigation}){

const handleNavigateToLogin = ()=>{
    navigation.navigate('login')
}

    return(
        <View style={styles.container} >
            <Text style={{textAlign:"center"}}>Already Have an account?</Text>
            <TouchableOpacity style={styles.navigate_to_login} onPress={handleNavigateToLogin}><Text style={styles.button_text}>Click Here to Login</Text></TouchableOpacity>
        </View>
    )
   

}

const styles = StyleSheet.create({
    container:{
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
    button_text: {
       color:'white',
       fontSize:20,
       textAlign:'center'     
        
    }
})

export default AlreadyHaveAccount