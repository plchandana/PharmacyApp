import {View, Text} from 'react-native'
import React, {useEffect} from 'react'
import Home from './src/screens/Home'
import LoginPage from './src/screens/LoginPage'
import Service from './src/screens/Service'
import DrugPage from './src/screens/DrugPage'
import SupplierPage from './src/screens/SupplierPage'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AppDrower from './src/component/AppDrower'
import DrugReg from './src/screens/DrugReg'
import AddDrugPage from './src/screens/AddDrugPage'
import UpdateDrug from './src/screens/UpdateDrug'
import ViewDrug from './src/screens/ViewDrug'


import SplashScreen from 'react-native-splash-screen'
import UserRegister from './src/screens/UserRegister'

const Stack = createStackNavigator();

export default function App() {

    useEffect(() => {
        SplashScreen.hide();
    }, [])
    return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={() => ({
            headerShown: false,
        })}>
            
            
            
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Login" component={LoginPage}/>
                <Stack.Screen name="AppDrower" component={AppDrower}/>
                
                
                <Stack.Screen name="AddDrug" component={AddDrugPage}/>
                <Stack.Screen name="register" component={UserRegister}/>
                
                <Stack.Screen name="UpdateDrug" component={UpdateDrug}/>
                
                <Stack.Screen name="drugReg" component={DrugReg}/>
                <Stack.Screen name="ViewDrug" component={ViewDrug}/>
            </Stack.Navigator>
        </NavigationContainer>


    );

}


