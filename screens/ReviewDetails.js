import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {globalStyles} from '../styles/global';

export default function ReviewDetails({navigation}){
    return(
        <View style={globalStyles.container}>
            <Text>REVIEW DETAILS SCREEN</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding : 24
    }
})