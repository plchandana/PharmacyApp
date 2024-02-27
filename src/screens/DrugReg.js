
import { View,StyleSheet,Image,ScrollView,TextInput,TouchableOpacity,FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button,Text } from 'react-native-paper';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
export default function DrugReg() {
const [data,setData]=useState([])


// const [isloaded,setIsLoaded]=useState(true)
const loadData = ()=> {
  fetch('http://192.168.43.101:3000')
  .then((response) => response.json())
  .then((json) =>setData(json));
  
  
}
    
  // setIsLoaded(false)


useEffect(()=>{
    loadData();
},[])

  return (
    <View style={styles.containor}>
    <View style={styles.title}><Text style={styles.txt}>Medicine Details</Text></View>
    <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View style={styles.contentitem}>
              <Text>{item.mid}</Text>
              <Text>{item.name}</Text>
              <Text>{item.qty}</Text>
              <Text>{item.price}</Text>
            </View>
          );
        }}
        keyExtractor={item => item.mid}>
      </FlatList>

    
      
    </View>
  )
}

const styles=StyleSheet.create({
    containor:{
        flex:1,
        // backgroundColor:'white',

    },
 
        content:{
            width:'90%',
            height:'15%',
            borderColor:'gray',
            backgroundColor:'#ecf0f1',
            borderStyle:'solid',
            borderWidth:10,
            margin:5,
            borderRadius:20,
            fontSize:16,
            fontWeight:'bold',
           
           alignSelf:'center',
           textAlign:'center',
        },
        txt:{
        
            color:'#34495e',
            fontSize:25,
            fontWeight:'bold',
            textAlign:'right',
            textAlign:'center',

    },
    btn2:{
        backgroundColor:'#2980b9',
            width:200,
            height:75,
            borderRadius:10,
            alignSelf:'center',
       },
       txtbtn1:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center',
      position:'relative',
      top:20,
        
    
       },
       contentitem:{
        borderColor:'blue',
        borderStyle:'solid',
        borderWidth:5,
        marginTop:5,
        marginLeft:10,
        marginRight:10,
       },
    
})

{/* <TextInput style={styles.content}placeholder='MID'></TextInput>
      <TextInput style={styles.content} placeholder='Name'></TextInput>
      <TextInput style={styles.content} placeholder='Quentity'></TextInput>
      <TextInput style={styles.content}  placeholder='Price'></TextInput>
      <TextInput style={styles.content} placeholder='SID'></TextInput> */}
      {/* <TouchableOpacity style={styles.btn2}><Text style={styles.txtbtn1}>Add Drug</Text></TouchableOpacity> */}
       