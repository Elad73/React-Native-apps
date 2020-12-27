import React, { useReducer, useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    return (
        <View>
            <Text>Enter Name:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text>My name is {name}</Text>
            <Text>Enter Passward:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={(newValue) => setPass(newValue)}
            />
            {pass.length > 4 ? null : (
                <Text>Passward must be longet than 5 characters</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    input: { margin: 15, borderColor: 'black', borderWidth: 1 }
});

export default TextScreen;
