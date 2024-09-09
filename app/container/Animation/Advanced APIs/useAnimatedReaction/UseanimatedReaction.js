import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import Animated, {
    measure,
    runOnJS,
    useAnimatedReaction,
    useAnimatedRef,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';

export default function App() {
    const animatedRef = useAnimatedRef();
    const width = useSharedValue(100);
    const [text, setText] = React.useState(width.value);

    const handlePress = () => {
        width.value = withSpring(width.value + 50);
    };

    useAnimatedReaction(
        () => width.value,
        () => {
            const measurement = measure(animatedRef);

            if (measurement !== null) {
                runOnJS(setText)(measurement.width);
            }
        }
    );

    return (
        <View style={styles.container}>
            <Animated.View
                ref={animatedRef}
                style={Object.assign(Object.assign({}, styles.box), { width })}
            />

            <Text style={styles.label}>width: {text}</Text>

            <Button onPress={handlePress} title="Click me" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        height: 100,
        backgroundColor: '#b58df1',
        borderRadius: 20,
    },
    label: {
        fontSize: 24,
        marginVertical: 16,
        color: '#b58df1',
    },
});