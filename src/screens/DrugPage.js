

import React, {useState, useRef, useEffect} from 'react';
import {StyleSheet, View, Text, StatusBar, FlatList, Image, TouchableOpacity} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {rootAPI} from "../api/rootAPI";

const Separator = () => <View style={styles.itemSeparator}/>;
const LeftSwipeActions = ({navigation, item, progress, dragX}) => {

    const handleUpdatePress = () => {

        navigation.navigate('UpdateDrug', {
            Mid: item.key,
            Name: item.name,
            Qty: item.qty,
            Price: item.price,
            Sid: item.sid,
            Img: item.img,
        });
    };

    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'white',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <View style={{
                backgroundColor: 'white',
                width: '25%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <TouchableOpacity onPress={handleUpdatePress}>
                    <Image style={{height: 60, width: 60}} source={require('../assets/update.jpg')}/>
                </TouchableOpacity>
            </View>

            <View style={{flex: 1, width: '75%', height: '100%', backgroundColor: 'white',}}/>
        </View>
    );
};
const RightSwipeActions = ({item}) => {

    const handleDeletePress = () => {
        try {
            const response = fetch(`${rootAPI}/api/v1/medicine/delete/${item.key}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            alert("Deleted!")
        } catch (error) {
            console.error('Error deleting data:', error.message);
        }
    };

    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'white',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <View style={{flex: 1, width: '75%', height: '100%',}}/>

            <View style={{width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity onPress={handleDeletePress}>
                    <Image style={{height: 60, width: 60}} source={require('../assets/delete.jpg')}/>
                </TouchableOpacity>
            </View>

        </View>
    );
};
const ListItem = ({item, navigation}) => (
    <Swipeable
        renderLeftActions={(progress, dragX) =>
            <LeftSwipeActions
                item={item}
                navigation={navigation}
                progress={progress}
                dragX={dragX}
            />}
        renderRightActions={() =>
            <RightSwipeActions
                item={item}
            />}
    >
        <View>
        <View style={{
            paddingHorizontal: 30,
            paddingVertical: 30,
            width: '100%',
            height: 300,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            flex:1,
        }}>
            <Image source={item.src} style={{width: 260, height: 300, resizeMode: 'contain'}}/>
        </View>
        

        <View style={{flex:1}}>
            <Text style={{textAlign:'center',fontWeight:'bold',fontSize:16}}>MID:{item.mid}</Text>
            <Text style={{textAlign:'center',fontWeight:'bold',fontSize:16}}>Name:{item.name}</Text>
            <Text style={{textAlign:'center',fontWeight:'bold',fontSize:16}}>Price:{item.price}</Text>
            <Text style={{textAlign:'center',fontWeight:'bold',fontSize:16}}>Quantity:{item.qty}</Text>
            <Text style={{textAlign:'center',fontWeight:'bold',fontSize:16}}>SID:{item.sid}</Text>
            {/* <Text style={{textAlign:'center',fontWeight:'bold',fontSize:16}}>Image:{item.img}</Text> */}

        </View>
        </View>
    </Swipeable>
);
const DrugPage = ({navigation}) => {

    const [imageList, setImageList] = useState([]);

    useEffect(() => {
        getAllMedicine()
    }, [getAllMedicine()]);

    function getAllMedicine() {
        try {
            fetch(`${rootAPI}/api/v1/medicine/all`)
                .then((response) => response.json())
                .then((data) => {
                    setImageList(data.rows.map((item) => ({
                        key: item.mid.toString(),
                        mid: item.mid,
                        name: item.name,
                        qty: item.qty,
                        price: item.price,
                        sid: item.sid,
                        img: item.img,
                        src: {uri: `${rootAPI}/${item.img}`}
                    })));
                })
                .catch((error) => console.error('Error fetching data:', error));
        } catch (e) {

        }
    }

    return (
        <>
            <StatusBar/>
            <View style={styles.container}>

                <View style={{width: '100%', height: '8%', backgroundColor: 'black', flexDirection: 'row'}}>

                    <View style={{width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => getAllMedicine()}>
                            <Image style={{height: 30, width: 30}} source={require('../assets/refresh.png')}/>
                        </TouchableOpacity>
                    </View>

                    <View style={{width: '60%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{textAlign: 'center', fontSize: 15, marginVertical: 10, color: 'white', fontWeight: 'bold'}}>
                            Swipe right or left
                        </Text>
                    </View>

                    <View style={{width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity onPress={() =>  navigation.navigate('AddDrug')}>
                            <Image style={{height: 30, width: 30}} source={require('../assets/square-plus.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{width: '100%', height: '92%', backgroundColor: 'white'}}>
                    <FlatList
                        data={imageList}
                        keyExtractor={(item) => item.key}
                        renderItem={({item}) =>
                            <ListItem item={item} navigation={navigation}/>}
                        ItemSeparatorComponent={() => <Separator/>}
                    />
                </View>

            </View>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
     backgroundColor: '#bdc3c7',
        width: '100%',
        height: '100%',
    },
    itemSeparator: {
        flex: 1,
        height: 10,
        backgroundColor: '#bdc3c7',
    },
});

export default DrugPage;
