import {View, ImageBackground, StyleSheet, TextInput, Image, Alert} from 'react-native'
import React from 'react'
import {Button, Text} from 'react-native-paper';
import {rootAPI} from "../api/rootAPI";

export default function UserRegister() {
    // const [uId,setId]=React.useState(null);
    const [uName, setName] = React.useState(null);
    const [uEmail, setEmail] = React.useState(null);
    const [uPassword, setPassword] = React.useState(null);

    const UserReisterCheck = () => {
        if (uName === null) {
            Alert.alert("Please Enter User Name");
        } else if (uEmail === null) {
            Alert.alert("Please Enter Email");
        } else if (uPassword === null) {
            Alert.alert("Please Enter password");
        } else {
            addUser();
        }
    };


    const addUser = async () => {
        try {
            await fetch(`${rootAPI}/api/v1/user/register`, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    // id:uId,
                    name: uName,
                    email: uEmail,
                    password: uPassword
                }),
            })
        } catch (e) {
            console.log(e)
        }
        clear();

    }
    const clear = () => {
        
            setName(''),
            setEmail(''),
            setPassword('')
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/background.jpg')} resizeMode="cover" style={styles.image}>
                {/* <Text>UserRegister</Text> */}
                <View style={styles.top}>
                    <Image source={require('../assets/reglogo.jpg')}
                           style={{alignSelf: 'center', marginTop: 30}}></Image>
                </View>
                <View style={styles.mid}>
                    {/* <TextInput style={styles.content}placeholder='User ID' value={uId} onChangeText={(e)=>setId(e)}></TextInput> */}
                    <TextInput style={styles.content} placeholder='Name' value={uName}
                               onChangeText={(e) => setName(e)}></TextInput>
                    <TextInput style={styles.content} placeholder='Email' value={uEmail}
                               onChangeText={(e) => setEmail(e)}></TextInput>
                    <TextInput style={styles.content} placeholder='Password' value={uPassword}
                               onChangeText={(e) => setPassword(e)}></TextInput>
                </View>
                <View style={styles.bottom}>
                    <Button onPress={() => UserReisterCheck()} mode="contained"
                            style={{position: 'absolute', bottom: 80, width: '90%', alignSelf: 'center'}}>
                        Submit
                    </Button>

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
    mid: {
        flex: 6,
    },
    top: {
        flex: 2,
    },
    content: {
        width: '85%',
        height: '15%',
        backgroundColor: '#f6e58d',
        borderColor: '#f6e58d',
        borderWidth: 5,
        borderRadius: 15,
        alignSelf: 'center',
        marginBottom: 10,


    },

})
