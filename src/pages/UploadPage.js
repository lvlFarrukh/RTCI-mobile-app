import React, {useState} from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const UploadPage = () => {
    const [description, setDescription] = useState()
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

                        <TouchableOpacity style={styles.UploadBtn}>
                            <Text style={styles.upTxt}>
                                Upload Video Here
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.submitBtn}>
                            <Text style={[styles.upTxt, {color: 'white'}]}>
                                Upload
                            </Text>
                        </TouchableOpacity>
                    </View>

            </View>
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