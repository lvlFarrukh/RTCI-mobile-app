import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'

// import Component
import HeaderPage from '../components/HeaderPage'

const RegistrationPage3 = () => {
    return (
        <View style={styles.container}>
            <HeaderPage title="Registration"/>
            
            <Text style={styles.instText}>
                    Create your account in just few easy steps
            </Text>

            <View style={styles.head_btn_div}>
                <View style={styles.mg20}>
                    <Text style={styles.label}>
                        FULL NAME <Text style={styles.colRed}>*</Text>
                    </Text>
                    <TextInput
                        style={styles.loginField}
                        placeholder='Enter your name...'
                    />
                </View>

                <View style={styles.mg20}>
                    <Text style={styles.label}>
                        PROVINCES <Text style={styles.colRed}>*</Text>
                    </Text>
                    <View style={styles.genderBtn}>
                        <TouchableOpacity style={styles.gBtn1}>
                            <Text style={styles.btn_sigin}>
                                MALE
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.gBtn2}>
                            <Text style={styles.btn_sigin}>
                                FEMALE
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.gBtn3}>
                            <Text style={styles.btn_sigin}>
                                OTHER
                            </Text>
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={styles.mg20}>
                    <Text style={styles.label}>
                        DATE OF BIRTH <Text style={styles.colRed}>*</Text>
                    </Text>
                    <TextInput
                        style={styles.loginField}
                        placeholder='DD - MM - YY'
                        keyboardType={"decimal-pad"}
                    />
                </View>

            </View>

            <View style={styles.btnLoc}>
                <TouchableOpacity style={styles.sinBtn}>
                    <Text style={styles.btn_sigin}>
                        NEXT
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default RegistrationPage3

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    instText: {
        color: 'lightgray',
        paddingRight: 20,
        paddingLeft: 20,
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10
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
    label: {
        color: '#002B5F',
        fontSize: 13,
        paddingLeft: 3,
        fontWeight: 'bold'
    },
    mg20: {
        marginLeft: 20,
        marginRight: 20,
    },
    colRed: {
        color: 'red'
    },
    bottomTxt: {
        textAlign: 'center', 
        fontSize: 12,
        marginTop: -10
      },
      sinBtn: {
        backgroundColor: '#002B5F',
        width: 100,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center'
      },
      btn_sigin: {
        color: '#9FE5FF',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        alignContent: 'center'
      },
      btnLoc: {
        margin: 20,
        alignItems: 'center', 
        flexDirection: 'row-reverse'
    },
    genderBtn: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 20,
    },
    gBtn1: {
        backgroundColor: '#002B5F',
        padding: 5,
        width: 105,
        height: 40,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
    },
    gBtn2: {
        backgroundColor: '#002B5F',
        padding: 5,
        width: 105,
    },
    gBtn3: {
        backgroundColor: '#002B5F',
        // backgroundColor: 'lightgray',
        padding: 5,
        width: 105,
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
    }
})