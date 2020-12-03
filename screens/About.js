import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {globalStyles} from '../styles/global';

export default function About(){
    return(
        <View style={globalStyles.container}>
            <Text>ABOUT SCREEN</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding : 24
    }
})