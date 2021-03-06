import React, {useEffect} from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import BottomNavigator from '../components/BottomNavigator'

const Home = (props) => {
    useEffect(() => {
        SplashScreen.hide()
    }, [])
    return (
        <View style={styles.container}>

            <ScrollView>
                <View>
                    <View style={styles.mainView}>
                        <Text style={styles.id}>
                            User id: 000149
                        </Text>
                        <Text style={styles.name}>
                            Hello, Farrukh
                        </Text>
                        
                    </View>

                    <View style={styles.actions}>
                        <TouchableOpacity 
                            onPress={() =>{
                                props.navigation.navigate('complainStatus')
                            }}
                            activeOpacity={0.7} 
                            style={styles.actionBtn}>
                            
                            <Text style={styles.actionTxt}>
                                For Complain Status
                            </Text>
                            <Text style={styles.actionTxt}>
                                Click Here!
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.actions}>
                        <TouchableOpacity 
                            onPress={() =>{
                                props.navigation.navigate('complainStatus')
                            }}
                            activeOpacity={0.7} 
                            style={styles.actionBtn}>
                            
                            <Text style={styles.actionTxt}>
                                For Complain Status
                            </Text>
                            <Text style={styles.actionTxt}>
                                Click Here!
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.actions}>
                        <TouchableOpacity 
                            onPress={() =>{
                                props.navigation.navigate('complainStatus')
                            }}
                            activeOpacity={0.7} 
                            style={styles.actionBtn}>
                            
                            <Text style={styles.actionTxt}>
                                For Complain Status
                            </Text>
                            <Text style={styles.actionTxt}>
                                Click Here!
                            </Text>
                        </TouchableOpacity>
                    </View>

                   
                </View>
            </ScrollView>

            <View style={styles.upload}>
                <TouchableOpacity style={styles.uploadBtn}>
                    <FontAwesome5 style={styles.btnTxt} name={'plus'} color={'cyan'} size={22} solid/>
                </TouchableOpacity>
            </View>

            <BottomNavigator pageState={0} nav = {props.navigation}/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    mainView: {
        margin: 20
    },
    id: {
        color: 'gray',
        fontWeight: 'bold',
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#002B5F'
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10       
    },
    actionBtn: {
        backgroundColor: 'white',
        width: 310,
        height: 80,
        borderRadius: 10,
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 1,
        shadowRadius: 5.46,
        
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },

    upload: {
        flex: 1,
        justifyContent: 'flex-end',
    }, 
    uploadBtn: {
        // margin: 30,
        paddingTop: 14,
        paddingLeft: 16,
        height: 50,
        width: 50,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        backgroundColor: '#002B5F',
        position: 'absolute',
        right: 15,
        bottom: 15,
    },
    actionTxt: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'gray'
    }
})