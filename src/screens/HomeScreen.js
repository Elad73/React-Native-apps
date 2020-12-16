import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation: { navigate } }) => {
    return (
        <View>
            <Text style={styles.text}>Moodz - Home Screen</Text>
            <Button
                onPress={() => navigate('Components')}
                title='Go to Components Screen'
            />
            <Button
                onPress={() => navigate('List')}
                title='Go to List Screen'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;
