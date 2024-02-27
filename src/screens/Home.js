import { View,Image,ImageBackground,StyleSheet } from 'react-native'
import React from 'react'
import { Text,Button } from 'react-native-paper';



export default function Home({navigation}) {
  return (

        <View style={styles.container}>
   <ImageBackground source={require('../assets/backimg.jpg')} resizeMode="cover" style={styles.image}>
   <View style={styles.top}>
   <Text variant="headlineSmall" style={styles.skip}>skip</Text>

   </View>
   <View style={styles.title}>
    <Text variant="headlineMedium" style={styles.company}>Medicino</Text>
    <Text variant="displayMedium" style={styles.heading}>Get Medicine Any where</Text>
    <Text variant="titleMedium" style={styles.dsc}>find any medication you want by your Location or neigborhawood</Text>



   </View>
   <View style={styles.btn}>
      <View style={styles.btnLeft}>
        <Button onPress={()=>navigation.navigate('register')}style={styles.right} mode="contained"><Text style={{color:'white',fontWeight:'bold',fontSize:20,position:'relative',top:10}}>Sign Up</Text>

    </Button>
      </View>
      <View style={styles.btnRight}>
      <Button onPress={()=>navigation.navigate('Login')} style={styles.left}  mode="outlined"><Text style={{color:'white',fontWeight:'bold',fontSize:20,position:'relative',top:8}}> Sign in</Text>

  </Button>
      </View>
   </View>
   <View style={styles.tail}>
    <Text variant="bodyMedium" style={styles.tailtxt}>By Joining you agree to ours Terms of Services and Privacy Policy</Text>
   </View>
   </ImageBackground>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
 backgroundColor: '#000000c0',
    },
    top:{
        flex:1,
        // backgroundColor:'green',
    },
    title:{
        // backgroundColor:'white',
        flex:2,
    },
    btn:{
        //backgroundColor:'gold',
        flexDirection:'row',
        flex:1,

    },
    tail:{
        // backgroundColor:'pink',
        flex:1,

    },
    skip:{
      textAlign:'right',
      fontWeight:'bold',
      paddingRight:20,
      paddingTop:40,
      color:'#c0392b',

    },
    company:{
      textAlign:'center',
      color:'#e74c3c',
      fontWeight: '900',

    },

    heading:{
      color:'#e74c3c',
      fontWeight: 'bold',
      textAlign:'center',


    },
    dsc:{
      color:'#ecf0f1',
      fontWeight: 'bold',
      textAlign:'center',

    },
    btnLeft:{
      flex:1,
      // backgroundColor:'gold',
    },
    btnRight:{
      flex:1,

      // backgroundColor:'red',
    },
    left:{
     width:'75%',
     height:'50%',
     borderColor:'white',
     borderWidth:5,
     color:'white',
     marginLeft:20,

    },
    right:{
      width:'75%',
     height:'50%',
     marginLeft:20,
     backgroundColor:'#3498db',


    },
    tailtxt:{
      marginLeft:20,
      color:'white',
      marginRight:10,
      textAlign:'center',


    },

})
