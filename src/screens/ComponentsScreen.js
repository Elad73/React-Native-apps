import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const myName = 'Mongdagon';
    return (
        <View>
            <Text style={styles.header}>This is the components screen</Text>
            <Text style={styles.subHeader}>Hi There! {myName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 45,
        textAlign: 'center',
        color: '#7c5295'
    },
    subHeader: {
        fontSize: 20,
        textAlign: 'center',
        color: '#f547c3'
    }
});

export default ComponentsScreen;
