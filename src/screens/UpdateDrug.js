import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import React, {useEffect, useState} from 'react'
import {Text} from 'react-native-paper';
import {rootAPI} from "../api/rootAPI";
import ImagePicker from "react-native-image-crop-picker";

export default function UpdateDrug({navigation, route}) {

    const {Mid, Name, Qty, Price, Sid, Img} = route.params;

    const [mid, setMid] = useState(Mid.toString());
    const [name, setName] = useState(Name);
    const [qty, setQty] = useState(Qty.toString());
    const [price, setPrice] = useState(Price.toString());
    const [sid, setSid] = useState(Sid.toString());
    const [img, setImg] = useState(Img);

    // useEffect(() => {
    //     // fetchData();
    // }, [])

    // const fetchData = async () => {
        // try {
        //     const response = await fetch(`${rootAPI}/api/v1/medicine/find/${mid}`);
        //     if (!response.ok) {
        //         if (response.status === 404) {
        //             console.log('Resource not found. You may want to handle this case.');
        //         } else {
        //             throw new Error(`HTTP error! Status: ${response.status}`);
        //         }
        //     } else {
        //         const updatedData = await response.json();
        //         setMid(updatedData.rows[0].mid);
        //         setName(updatedData.rows[0].name);
        //         setQty(updatedData.rows[0].qty);
        //         setPrice(updatedData.rows[0].price);
        //         setSid(updatedData.rows[0].sid);
        //         setImg(updatedData.rows[0].img);
        //     }
        // } catch (error) {
        //     console.error('Error fetching updated data:', error.message);
        // }
    // };

    const UpdateData = async () => {

        try {
            const response = await fetch(`${rootAPI}/api/v1/medicine/edit/${mid}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    mid: mid,
                    name: name,
                    qty: qty,
                    price: price,
                    sid: sid,
                    img: img,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            alert('Medicine Update successfully');
            navigation.navigate('drug');
        } catch (error) {
            alert('Error updating data:', error.message);
        }
        clear();
    };
    const clear = () => {
        setMid('');
        setName('');
        setQty('');
        setPrice('');
        setSid('');
        setImg('');
    }

    const openGalleryUpdateImage = async () => {
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
                        const imgPath = data.image.path;
                        setImg(imgPath)
                    })
                    .catch(error => {
                        console.error("Fetch error:", error);
                    });

            })
        } catch (e) {
        }
    }

    return (
        <View style={styles.containor}>
            <View style={styles.title}><Text style={styles.txt}>Medicine Update Details</Text></View>

            <View style={{flex: 7}}>
                <TextInput onChangeText={(e) => {
                    setMid(e)
                }} value={mid.toString()} style={styles.content} placeholder='MID'></TextInput>
                <TextInput onChangeText={(e) => {
                    setName(e)
                }} value={name} style={styles.content} placeholder='Name'></TextInput>
                <TextInput onChangeText={(e) => {
                    setQty(e)
                }} value={qty.toString()} style={styles.content} placeholder='Quentity'></TextInput>
                <TextInput onChangeText={(e) => {
                    setPrice(e)
                }} value={price.toString()} style={styles.content} placeholder='Price'></TextInput>
                <TextInput onChangeText={(e) => {
                    setSid(e)
                }} value={sid.toString()} style={styles.content} placeholder='SID'></TextInput>

                <View style={styles.imgView}>
                    <TouchableOpacity onPress={openGalleryUpdateImage} style={styles.btn2}>
                        <Text style={styles.txtbtn1}>Update Image</Text>
                    </TouchableOpacity>
                </View>

                <TextInput onChangeText={(e) => {
                    setImg(e)
                }} value={img} style={styles.content} placeholder='Image'></TextInput>
            </View>
            <View style={{flex: 1}}>
                <TouchableOpacity onPress={UpdateData} style={styles.btn2}><Text style={styles.txtbtn1}>
                    Update Drug</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containor: {
        flex: 1,
    },

    imgView: {
        width: '90%',
        height: '10%',
        margin: 5,
        alignSelf: 'center',
        textAlign: 'center',
    },

    content: {
        width: '90%',
        height: '10%',
        borderColor: 'gray',
        backgroundColor: '#ecf0f1',
        borderStyle: 'solid',
        borderWidth: 3,
        margin: 5,
        borderRadius: 10,
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
    },
    txt: {

        color: '#34495e',
        fontSize: 25,
        fontWeight: 'bold',
        // textAlign: 'right',
        textAlign: 'center',

    },
    btn2: {
        backgroundColor: '#2980b9',
        width: 200,
        height: 50,
        borderRadius: 10,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 10,
    },
    txtbtn1: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        position: 'relative',
        top: 10,

        justifyContent: 'center',


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
