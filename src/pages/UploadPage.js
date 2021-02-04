import React, {useState, useEffect} from 'react'
import { Text, View, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native'

import BottomNavigator from '../components/BottomNavigator'

import ImagePicker from 'react-native-image-crop-picker';


const UploadPage = (props) => {
    const [description, setDescription] = useState()
    const [videoBtn, setVideoBtn] = useState('Upload Video Here')
    const [video, setVideo] = useState()

    const uploadVideo = ()=> {
        // const options = {
        //     noData: true,
        //     mediaType: 'photo'
        // }
        // launchImageLibrary(options, response => {
        //     console.log("response", response)
        //     setPhoto(response.uri)
        // })
        ImagePicker.openPicker({
            mediaType: "video",
          }).then((video) => {
            setVideo(video)
            setVideoBtn('Uploading Done!')
          });
    }

    // let data = new FormData()
    // console.log(data)

    return (
        <View style={styles.container}>
            <View style={styles.mainForm}>

                    <View>
                        <Text style={styles.label}>
                            DESCRIPTION 
                        </Text>
                        <TextInput
                            placeholder={'Enter Something'}
                            multiline={true}
                            numberOfLines={5}
                            onChangeText = {(text)=>{setDescription(text)}}
                            style={styles.loginField}
                        />
                    </View>

                    <View>
                        <Text style={styles.label}>
                            Upload Video 
                        </Text>

                        <TouchableOpacity 
                            onPress={()=> {
                                uploadVideo()
                            }}
                            style={styles.UploadBtn}>
                            <Text style={styles.upTxt}>
                                {videoBtn}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.submitBtn} >
                            <Text style={[styles.upTxt, {color: 'white'}]}>
                                Upload
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        {/* { console.log(video.path) } */}
                        
                    </View>

            </View>
            <BottomNavigator pageState={1} nav = {props.navigation}/>
        </View>
    )
}

export default UploadPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainForm: {
        margin: 20
    },
    loginField: {
        textAlignVertical: 'top',
        backgroundColor: 'lightgray',
        height: 150,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginTop: 10,
        fontSize: 15,
        marginBottom: 20,
    },
    label: {
        color: '#002B5F',
        fontSize: 15,
        paddingLeft: 3,
        fontWeight: 'bold'
    },

    UploadBtn: {
        marginTop: 10,
        backgroundColor: 'lightgray',
        height: 40,
        justifyContent: 'center',
        borderRadius: 5
    },
    upTxt: {
        alignSelf: 'center',
        fontSize: 17,
        color: 'gray',
        fontWeight: 'bold'
    },
    submitBtn: {
        marginTop: 30,
        width: 150,
        backgroundColor: '#002B5F',
        height: 40,
        justifyContent: 'center',
        borderRadius: 5,
        alignSelf: 'center'
    }
    

})