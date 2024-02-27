import { View,Image,ImageBackground,StyleSheet } from 'react-native'
import React from 'react'
import { Text,Button } from 'react-native-paper';


export default function Service() {
  return (
    <View style={styles.containor}>
      <ImageBackground source={require('../assets/service.jpeg')} resizeMode="cover" style={styles.image}>
        <Text variant="displayMedium" style={styles.title}>Our Services</Text>
        <Text variant="bodyMedium" style={styles.body}>Does your spouse or partner have a charming habit of sending you a shopping list when you’re in the middle of something? The last time I got a list of pills, I thought, “There’s gotta be an on-demand app for this.” And you know what? Since then, my family has been shopping for medications exclusively through mobile apps, and I couldn’t be happier.

                If you firmly believe in on-demand mobile software and want to learn how to make a pharmacy app that would make your customers happy, keep reading. We’ll cover the basics and share some insights.</Text>
      </ImageBackground>
    </View>
  )
}
const styles=StyleSheet.create({
  containor:{
    flex:1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  title:{
    color:'#8e44ad',
    fontWeight:'bold',
    position:'absolute',
    bottom:'90%',
    left:'20%',
    textAlign:'center',
  },
  body:{
    position:'absolute',
    bottom:'50%',
    margin:20,
    color:'#8e44ad',
    fontWeight:'bold',
  },
})
