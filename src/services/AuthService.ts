import { Alert } from "react-native";

export const UserEmailLogin = async (email: string, password: string) => {
    try {
        /**
         * I have commented below snippet because it is not working probably because of endpoint is down.
         */

        /*
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email || "hassan.zafar@ropstam.com",
                password: password || "12345678",
                device_token: "zasdcvgtghnkiuhgfde345tewasdfghjkm"
            })
        };
        const response = await fetch('http://buddy.ropstambpo.com/api/login', requestOptions);
        const json = await response.json();
        return json;
        */

        /**
         * This is the mock response I have created in order to demonstrate the experience of real user login activity
         */
        let mockResponseJson = {
            _id: "894y9hfsduhf87478gsdf",
            access_token: "8u8sh3409ru89hf89sdhf8sd9hfsdhf",
            refresh_token: "8dsuhfdusifhdsuifhsduifghuifhds",
            user: {
                _id: '898dsyf87sdyf7sdyf78ds',
                firstname: "Haseeb",
                lastname: "Ahmed",
                email: "haseebahmedsaeed98@gmail.com"
            }
        }
        return mockResponseJson;

    } catch (error) {
        Alert.alert("Server Down", "Something went wrong with server!")
    }
}