import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 37 },
        { name: 'Friend #2', age: 64 },
        { name: 'Friend #3', age: 36 },
        { name: 'Friend #4', age: 15 },
        { name: 'Friend #5', age: 25 },
        { name: 'Friend #6', age: 2 },
        { name: 'Friend #6', age: 15 }
    ];
    return (
        <FlatList
            showsVerticalScrollIndicator={false}
            keyExtractor={(obj) => {
                obj.name;
            }}
            data={friends}
            renderItem={({ item }) => {
                return (
                    <View>
                        <Text style={styles.textStyle}>
                            {item.name} - {item.age}
                        </Text>
                    </View>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 7
    }
});

export default ListScreen;
