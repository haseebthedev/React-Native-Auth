import { Alert } from "react-native";

export const getHomeListing = async () => {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/Posts'
        );
        const json = await response.json();
        return json;
    } catch (error) {
        Alert.alert("Server Down", "Something went wrong with server!")
    }
}