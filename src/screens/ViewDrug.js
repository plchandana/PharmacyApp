import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function ViewDrug() {
  const [data,setData]=useState([]);
  const [Mid, setMid] = useState('');
  
  const loadData = async () => {
    try {
      await fetch(`https://0e14-212-104-237-71.ngrok-free.app/api/v1/medicine/find/${Mid}`,{
         method:'get',
         headers:{'Accept':'application/json',
         'Content-type':'application/json',
       },
       body:JSON.stringify({
        mid:Mid
         
       }),
       })
     
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
    }
      catch (e){
        console.log(e)
     }
  return (
    
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.txt}>Medicine Details</Text>
            
            <TextInput
              onChangeText={(e) => setMid(e)}
              value={Mid}
              style={styles.content}
              placeholder='MID'
            />
            <TouchableOpacity style={{ backgroundColor: '#2980b9', width: 200, height: 50,borderRadius: 10,alignSelf: 'center'}} onPress={loadData}>
              <Text style={{fontSize: 20,fontWeight: 'bold',textAlign: 'center',position: 'relative',top: 10,}}>View Drug</Text>
            </TouchableOpacity>
          </View>
      
          {data.length > 0 &&
            data.map((item) => (
              item.mid === Mid && (
                <View key={item.mid} style={styles.contentItem}>
                  <Text>{item.mid}</Text>
                  <Text>{item.name}</Text>
                  <Text>{item.qty}</Text>
                  <Text>{item.price}</Text>
                  <Text>{item.sid}</Text>
                  <Text>{item.img}</Text>
                </View>
              )
            ))}
        </View>
      );
          }          
        }           
      
      
const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  title: {
    backgroundColor: '#ecf0f1',
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
  },
  txt: {
    color: '#34495e',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentItem: {
    borderColor: 'blue',
    borderStyle: 'solid',
    borderWidth: 5,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  content: {
    width: '90%',
    height: '15%',
    borderColor: 'gray',
    backgroundColor: '#ecf0f1',
    borderStyle: 'solid',
    borderWidth: 10,
    margin: 5,
    borderRadius: 20,
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
})
