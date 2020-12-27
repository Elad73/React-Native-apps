import React, { useReducer, useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const BoxScreen = () => {
    return (
        <View>
            <View style={styles.viewStyle}>
                <Text style={styles.text1Style}>Box #1</Text>
                <Text style={styles.text2Style}>Box #2</Text>
                <Text style={styles.text3Style}>Box #3</Text>
            </View>
            <View style={styles.viewBox}>
                <View style={styles.viewBoxRow}>
                    <View style={styles.box1}></View>
                    <View style={styles.box2}></View>
                </View>
                <View style={styles.box3}></View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200
    },
    text1Style: {
        borderWidth: 3,
        borderColor: 'red'
    },
    text2Style: {
        borderWidth: 3,
        borderColor: 'red',
        ...StyleSheet.absoluteFillObject
    },
    text3Style: {
        borderWidth: 3,
        borderColor: 'red'
    },
    viewBox: {
        borderWidth: 3,
        borderColor: 'blue'
    },
    viewBoxRow: {
        borderWidth: 3,
        borderColor: 'blue',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    box1: {
        borderWidth: 3,
        borderColor: 'red',
        backgroundColor: 'orange',
        width: 100,
        height: 100
    },
    box2: {
        borderWidth: 3,
        borderColor: 'red',
        backgroundColor: 'pink',
        width: 100,
        height: 100
    },
    box3: {
        borderWidth: 3,
        borderColor: 'red',
        backgroundColor: 'green',
        alignSelf: 'center',
        width: 100,
        height: 100
    }
});

export default BoxScreen;
