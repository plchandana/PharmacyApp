import React from 'react'
import {Text, TextInput, Divider, Button} from 'react-native-paper';
import {View, StyleSheet, Alert} from 'react-native';
import {rootAPI} from "../api/rootAPI";

export default function LoginPage({navigation}) {

    const [emailAddress, setEmailAddress] = React.useState(null);
    const [password, setPassword] = React.useState(null);

    const loginUserTextCheck = () => {
        if (emailAddress === null) {
            Alert.alert("Please Enter Email Address")
        } else {
            if (password === null) {
                Alert.alert("Please Enter Password")
            } else {
                userLogin();
            }
        }
    }


    const userLogin = () => {
        
        try {
            fetch(`${rootAPI}/api/v1/user/login`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: emailAddress,
                    password: password
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.result === "Login Success") {
                        if (data.rows[0].email === emailAddress) {
                            if (data.rows[0].password === password) {
                                alert("Login Success!");
                                navigation.navigate('AppDrower')
                            }
                        }
                    } else {
                        if (data.Result === "User Not Found") {
                            alert("User Not Found")
                        }
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
         }catch (e) {
            console.log(e)
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.top}>
                <Text variant="displaySmall" style={styles.headone}>Welcome back</Text>
                <Text variant="titleMedium" style={styles.headtwo}>sign in to continue</Text>
            </View>
            <View style={styles.input}>
                <TextInput style={styles.email}
                           value={emailAddress}
                           onChangeText={text => setEmailAddress(text)}
                           placeholder='Email Address'

                />
                <Divider style={styles.divide}/>
                <TextInput style={styles.pwd}
                           placeholder="Password"
                           value={password}
                           onChangeText={text => setPassword(text)}
                />
                <Text variant="titleLarge" style={{marginLeft: 5}}>Forget Password ?</Text>
            </View>
            <View style={styles.btn}>
                <Button
                    onPress={() => loginUserTextCheck()}
                    style={styles.signinbtn} mode="contained">
                    <Text variant="headlineSmall" style={styles.btnTxt}>Sign in</Text>
                </Button>
            </View>
            <View style={styles.bottom}>
                <Text variant="titleMedium" style={styles.bottomone}>Don't have an account? </Text>
                <Text variant="titleLarge"
                      style={styles.bottomtwo}
                      onPress={() => navigation.navigate('register')}>Sign Up
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
    },
    top: {
        flex: 3,
        position:'absolute',
        // top:10,

        //backgroundColor:'gold',
    },
    input: {
        flex: 5,
        position:'relative',
        top:150,
        marginBottom:10,
        // backgroundColor:'pink',
    },
    btn: {
        flex: 3,
        //backgroundColor:'red',
    },
    bottom: {
        flex: 2,
        // backgroundColor:'green',
    },
    headone: {
        position: 'relative',
        top: '50%',
        alignSelf: 'center',
        fontWeight: 'bold',
        margin: 10,
    },
    headtwo: {
        position: 'relative',
        top: '35%',
        fontWeight: 'bold',
        margin: 10,
    },
    email: {
        margin: 10,
        height: '20%',
    },
    pwd: {
        height: '20%',
        margin: 10,
    },
    signinbtn: {
        height: '50%',
        marginTop: 30,
        margin: 5,

    },
    btnTxt: {
        alignSelf: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
    },
    bottomone: {},
    bottomtwo: {
        position: 'relative',
        bottom: 25,
        left: '45%',

    },
    divide: {color: '#9b59b6'},
    height: 30,
})
