import { StyleSheet, TextInput } from "react-native";

export default function Input({ placeholder, password = false, style, onChangeText }) {
    return (
        <TextInput
            placeholder={placeholder}
            secureTextEntry={password}
            onChangeText={(value) => onChangeText(value)}
            style={[styles.input, style]}
            placeholderTextColor="#888"
        />
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        marginBottom: 15,
        width: "100%",
    },
});
