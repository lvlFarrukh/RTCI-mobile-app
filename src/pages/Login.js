import React, {useEffect} from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

// import components
import HeaderPage from '../components/HeaderPage'

const Login = () => {
    useEffect(() => {
        SplashScreen.hide()
    }, [])

    return (
      <ScrollView>
        <View style={styles.container}>

        <HeaderPage title="Login"/>

        <View style={styles.head_btn_div}>
          <TouchableOpacity style={styles.head_btn_l} activeOpacity={0.6}>
            <Text style={styles.btn_txt}>
              CNIC#
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.head_btn_r} activeOpacity={0.6}>
            <Text style={styles.btn_txt}>
              EMAIL   
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.loginSec}>

          <View>
            <Text style={styles.label}>
              CNIC#
            </Text>
            <TextInput
              style={styles.loginField}
              placeholder='________-____________-__'
              keyboardType={"phone-pad"}
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
            Don't have an account? <Text style={{color: '#002B5F'}}>REGISTER</Text>
          </Text>
          </View>

          <View style={{alignItems: 'center', margin: 30}}>
            <TouchableOpacity style={styles.sinBtn}>
              <Text style={styles.btn_sigin}>
                SIGN IN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    head_btn_div: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 15
    },
    head_btn_l: {
      backgroundColor: '#002B5F',
      height: 40,
      width: 160,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20,
      justifyContent: 'center',
      marginRight: 1,
      borderWidth: 1,
      borderColor: '#002B5F'
    },
    head_btn_r: {
      backgroundColor: 'white',
      height: 40,
      width: 160,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      marginLeft: 2,
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: '#9FE5FF',
    },
    btn_txt: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      color: '#9FE5FF'
    },
    loginSec: {
      padding: 18,
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
      fontSize: 15,
      paddingLeft: 3
    },
    bottomTxt: {
      textAlign: 'center', 
      fontSize: 12,
      marginTop: -10
    },
    sinBtn: {
      backgroundColor: '#002B5F',
      width: 170,
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
    }
  });