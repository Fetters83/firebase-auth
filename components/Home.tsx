import { StatusBar } from 'expo-status-bar';
import { signOut } from 'firebase/auth';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';
import { auth } from '../config/firebase';


function Home(){

    const handleLogOut = async()=>{
        await signOut(auth)
    }

    return (<View style={styles.container}>
        <Text>Welcome</Text>
        <View><TouchableOpacity style={styles.logout_button} onPress={handleLogOut}><Text style={styles.logout_text}>Logout</Text></TouchableOpacity></View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
   margin:"auto"

    },
    logout_button:{
        padding:10,
        backgroundColor:'grey',
        marginTop:20,   
        
    },
    logout_text:{
        color:'white'
    }
  });

export default Home