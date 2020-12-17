import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation: { navigate } }) => {
    return (
        <View>
            <Text style={styles.header}>Moodz - Home Screen</Text>
            <Button
                style={styles.button}
                onPress={() => navigate('Components')}
                title='Go to Components Screen'
            />
            <Button
                style={styles.button}
                onPress={() => navigate('List')}
                title='Go to List Screen'
            />
            <Button
                style={styles.button}
                onPress={() => navigate('Image')}
                title='Go to Image Screen'
            />
            <Button
                style={styles.button}
                onPress={() => navigate('Color')}
                title='Go to Color Screen'
            />
            <Button
                style={styles.button}
                onPress={() => navigate('Square')}
                title='Go to Square Screen'
            />
            <Button
                style={styles.button}
                onPress={() => navigate('Counter')}
                title='Go to Counter Screen'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 45,
        color: '#9562ea'
    },
    button: {
        color: '#f547c3'
    }
});

export default HomeScreen;
