import {View, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native'
import React, {useEffect, useState} from 'react'
import {Button, Text} from 'react-native-paper';
import ImagePicker from "react-native-image-crop-picker";
import {rootAPI} from '../api/rootAPI';

export default function DrugReg({navigation}) {

    const [Name, setName] = useState(null);
    const [Qty, setQty] = useState(null);
    const [Price, setPrice] = useState(null)
    const [Sid, setSid] = useState(null);
    const [Img, setImg] = useState(null);

    const openCamera = async () => {
        try {
            ImagePicker.openPicker({
                width: 1000,
                height: 1000,
                cropping: true,
            }).then(image => {

                const formData = new FormData();

                const pathSegments = image.path.split("/");
                const filename = pathSegments[pathSegments.length - 1];

                formData.append("image", {
                    uri: image.path,
                    type: "image/jpeg",
                    name: filename,
                });

                fetch(`${rootAPI}/api/v1/medicine/upload_image/1`, {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
                    .then(response => response.json())
                    .then(data => {

                        if (data.message === "Image uploaded successfully") {
                            fetch(`${rootAPI}/api/v1/medicine/create`, {
                                method: "POST",
                                body: JSON.stringify({
                                    name: Name,
                                    qty: Qty,
                                    price: Price,
                                    sid: Sid,
                                    img: data.image.path
                                }),
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-type': 'application/json',
                                },
                            }).then(response => response.json())
                                .then(data => {
                                    console.log("Server response:", data);
                                    clear();
                                    navigation.navigate('drug');
                                })
                                .catch(error => {
                                    console.error("Fetch error:", error);
                                });
                        } else {
                            alert("Image Uploading Fail!")
                        }
                    })
                    .catch(error => {
                        console.error("Fetch error:", error);
                    });
            }).catch((error) => {
            });
        } catch (e) {
        }
    };

    const clear = () => {

        setName('');
        setQty('');
        setPrice('');
        setSid('');
        setImg('');
    }


    return (
        <View style={styles.containor}>
            <View style={styles.title}><Text style={styles.txt}>Medicine Details</Text></View>

            <TextInput onChangeText={(e) => {
                setName(e)
            }} value={Name} style={styles.content} placeholder='Name'></TextInput>
            <TextInput onChangeText={(e) => {
                setQty(e)
            }} value={Qty} style={styles.content} placeholder='Quentity'></TextInput>
            <TextInput onChangeText={(e) => {
                setPrice(e)
            }} value={Price} style={styles.content} placeholder='Price'></TextInput>
            <TextInput onChangeText={(e) => {
                setSid(e)
            }} value={Sid} style={styles.content} placeholder='SID'></TextInput>

            <TouchableOpacity onPress={openCamera} style={styles.btn2}>
                <Text style={styles.txtbtn1}>Add Medicine</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    containor: {
        flex: 1,
    },

    content: {
        width: '90%',
        height: '8%',
        borderColor: 'gray',
        backgroundColor: '#ecf0f1',
        borderStyle: 'solid',
        borderWidth: 5,
        margin: 5,
        borderRadius: 20,
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
    },
    txt: {
        color: '#34495e',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    btn2: {
        backgroundColor: '#2980b9',
        width: '90%',
        height: 60,
        borderRadius: 10,
        margin: 10,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    txtbtn1: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    contentitem: {
        borderColor: 'blue',
        borderStyle: 'solid',
        borderWidth: 5,
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
    },

})

{/* <TextInput style={styles.content}placeholder='MID'></TextInput>
      <TextInput style={styles.content} placeholder='Name'></TextInput>
      <TextInput style={styles.content} placeholder='Quentity'></TextInput>
      <TextInput style={styles.content}  placeholder='Price'></TextInput>
      <TextInput style={styles.content} placeholder='SID'></TextInput> */
}
{/* <TouchableOpacity style={styles.btn2}><Text style={styles.txtbtn1}>Add Drug</Text></TouchableOpacity> */
}
