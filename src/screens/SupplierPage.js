import { View,StyleSheet,Image,ScrollView,TextInput } from 'react-native'
import React from 'react'
import { Button,Text } from 'react-native-paper';


export default function SupplierPage() {
  return (
    <View style={styles.contrainor}>
    <View style={{flexDirection:'row',flex:5}}>
      <View style={{flex:3}}><Text variant="headlineSmall" style={{fontWeight:'bold',color:'#3498db',position:'relative',left:'20%',marginTop:20}}>Suppliars Details
      </Text>
      </View>
      <TextInput placeholder='Search' style={styles.searchBtn}></TextInput>
      <View style={{flex:2}}><Image source={require('../assets/plus2.jpeg')} style={{position:'relative',right:50,top:5}}></Image>
      </View>
    
    </View>
    
    <View style={{flex:8}}>
    <ScrollView>
      <View style={styles.rowcontent}>
      <View style={{flex:1}}><Image source={require('../assets/logo2.jpeg')} style={{width:'80%',position:'relative',left:25,margin:5,borderColor:'blue',borderWidth:5}}></Image></View>
          <View style={{flex:1}}><Image source={require('../assets/logo1.jpeg')} style={{width:'80%',position:'relative',left:25,margin:5,borderColor:'blue',borderWidth:5}}></Image></View>
      </View>
      <View style={styles.rowcontent}>
          <View style={{flex:1}}><Image source={require('../assets/logo3.jpeg')} style={{width:'80%',position:'relative',left:25,margin:5,borderColor:'blue',borderWidth:5}}></Image></View>
          <View style={{flex:1}}><Image source={require('../assets/logo5.jpeg')} style={{width:'80%',position:'relative',left:25,margin:5,borderColor:'blue',borderWidth:5}}></Image></View>
      </View>
      <View style={styles.rowcontent}>
      <View style={{flex:1}}><Image source={require('../assets/logo3.jpeg')} style={{width:'80%',position:'relative',left:25,margin:5,borderColor:'blue',borderWidth:5}}></Image></View>
          <View style={{flex:1}}><Image source={require('../assets/logo5.jpeg')} style={{width:'80%',position:'relative',left:25,margin:5,borderColor:'blue',borderWidth:5}}></Image></View>
      </View>
     <View style={styles.rowcontent}>
     <View style={{flex:1}}><Image source={require('../assets/logo3.jpeg')} style={{width:'80%',position:'relative',left:25,margin:5,borderColor:'blue',borderWidth:5}}></Image></View>
          <View style={{flex:1}}><Image source={require('../assets/logo2.jpeg')} style={{width:'80%',position:'relative',left:25,margin:5,borderColor:'blue',borderWidth:5}}></Image></View>
      </View>
      <View style={styles.rowcontent}>
      <View style={{flex:1}}><Image source={require('../assets/logo1.jpeg')} style={{width:'80%',position:'relative',left:25,margin:5,borderColor:'blue',borderWidth:5}}></Image></View>
          <View style={{flex:1}}><Image source={require('../assets/logo3.jpeg')} style={{width:'80%',position:'relative',left:25,margin:5,borderColor:'blue',borderWidth:5}}></Image></View>
      </View>
     <View style={styles.rowcontent}>
     <View style={{flex:1}}><Image source={require('../assets/logo2.jpeg')} style={{width:'80%',position:'relative',left:25,margin:5,borderColor:'blue',borderWidth:5}}></Image></View>
          <View style={{flex:1}}><Image source={require('../assets/logo3.jpeg')} style={{width:'80%',position:'relative',left:25,margin:5,borderColor:'blue',borderWidth:5}}></Image></View>
      </View>
          
      
   
     
    
    </ScrollView>
    </View>
    <View style={{flex:2}}>
    <Button  mode="contained">
  View Suppliers
</Button>
</View>

  </View>
)
}
const styles=StyleSheet.create({
contrainor:{
  flex:1,

   },
   rowcontent:{flex:1,
   flexDirection:'row',
  },
  searchBtn:{
    color:'blue',
    textAlign:'center',
    fontSize:16,
    width:'50%',
    position:'relative',
    right:90,
    top:100,
    borderColor:'blue',
    borderWidth:5,
    borderStyle:'solid',
    height:50,
    borderRadius:10,
  },


})


