import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity,} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const BottomNavigator = () => {
    return (
        <View style={styles.bottomHead}>
            <View style={styles.bottomNav}>
                <TouchableOpacity>
                    <FontAwesome5 name={'home'} color={'white'} size={30}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5 name={'upload'} color={'#9FE5FF'} size={30}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <FontAwesome5 name={'user'} color={'#9FE5FF'} size={30} solid/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BottomNavigator

const styles = StyleSheet.create({
    bottomHead: {
        justifyContent: 'flex-end',
    },
    bottomNav: {
        backgroundColor: '#002B5F',
        height: 50,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})