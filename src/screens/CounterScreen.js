import React, { useReducer } from 'react';
import { Text, View, StyleSheet, Button, FlatList } from 'react-native';

const COUNTER_INCREASE = 'COUNTER_INCREASE';
const COUNTER_DECREASE = 'COUNTER_DECREASE';

const reducer = (count, action) => {
    switch (action.type) {
        case COUNTER_INCREASE:
            return count + action.payload;
        case COUNTER_DECREASE:
            return count - action.payload;
    }
};

const CounterScreen = () => {
    const [count, dispatch] = useReducer(reducer, 0);
    const COUNTER_CHANGE_INTERVAL = 1;

    return (
        <View>
            <Button
                title='Increase'
                onPress={() =>
                    dispatch({
                        type: COUNTER_INCREASE,
                        payload: COUNTER_CHANGE_INTERVAL
                    })
                }
            />
            <Button
                title='Decrease'
                onPress={() =>
                    dispatch({
                        type: COUNTER_DECREASE,
                        payload: COUNTER_CHANGE_INTERVAL
                    })
                }
            />
            <Text>Current Count: {count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;
