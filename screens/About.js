import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { globalStyles } from '../styles/global';

export default function About() {
    return (
        <View style={globalStyles.container}>
            <Text style={styles.heading}>ABOUT THE APP</Text>
            <Text style={styles.bodyText}>This is a review app made with React Native.Hope you liked it!</Text>
            <Text style={{position:'relative',textAlign:'center'}}>Developed by {"\n"}<Text style={{color: 'red'}}>Pritam Kar</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    heading : {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    bodyText:{
        marginTop: 20,
        marginHorizontal:20,
        padding:10,
        textAlign:'center'
    }
})
