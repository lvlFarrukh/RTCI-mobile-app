import React from 'react'
import {View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native'

const LoginEmail = () => {
    return (
        <>
            <View style={styles.loginSec}>

                <View>
                <Text style={styles.label}>
                    EMAIL
                </Text>
                <TextInput
                    style={styles.loginField}
                    placeholder='Enter Email here..'
                    keyboardType={"email-address"}
                />
                </View>

                <View>
                <Text style={styles.label}>
                    PASSWORD
                </Text>
                <TextInput
                    style={styles.loginField}
                    placeholder='Enter Password here..'
                    secureTextEntry={true}
                    inlineImageLeft='search_icon'
                />
                </View>

                <Text style={styles.bottomTxt}>
                    Don't have an account? <Text onPress={() => props.navigation.navigate('register_number')} style={{color: '#002B5F'}}>REGISTER</Text>
                </Text>
                </View>

                <View style={{alignItems: 'center', margin: 20}}>
                <TouchableOpacity style={styles.sinBtn}>
                <Text style={styles.btn_sigin}>
                    SIGN IN
                </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default LoginEmail

const styles = StyleSheet.create({
    loginSec: {
        padding: 18,
        marginTop: 10
    },
    label: {
        color: '#002B5F',
        fontSize: 15,
        paddingLeft: 3
    },
    loginField: {
        backgroundColor: '#d6d6d6',
        height: 40,
        borderRadius: 50,
        marginTop: 5,
        paddingLeft: 25,
        fontSize: 15,
        marginBottom: 20
    },
    bottomTxt: {
        textAlign: 'center', 
        fontSize: 12,
        marginTop: -10
    },
    sinBtn: {
        backgroundColor: '#002B5F',
        width: 170,
        height: 35,
        borderRadius: 20,
        justifyContent: 'center'
    },
    btn_sigin: {
        color: '#9FE5FF',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        alignContent: 'center'
    }

})