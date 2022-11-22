import { Alert } from "react-native";

export const UserEmailLogin = async (email, password) => {
    try {
        // setLoading(true)
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         email: "hassan.zafar@ropstam.com",
        //         password: "12345678",
        //         device_token: "zasdcvgtghnkiuhgfde345tewasdfghjkm"
        //     })
        // };
        // const response = await fetch('http://buddy.ropstambpo.com/api/login', requestOptions);
        // const json = await response.json();
        // setLoading(false)
        // return json;

        let mockResponse = {
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

        return mockResponse;

    } catch (error) {
        Alert.alert("Server Down", "Something went wrong with server!")
    }
}