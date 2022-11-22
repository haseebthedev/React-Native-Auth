import { StyleSheet } from "react-native";
import { hp, wp } from "../../utils/responsive";
import { colors } from "../../constants";

const styles = StyleSheet.create({
    container: {
        marginBottom: hp(4),
    },
    textInput: {
        color: colors.text,
        backgroundColor: colors.white,
        paddingVertical: hp(2),
        paddingHorizontal: wp(6),
        borderRadius: hp(1),
        fontSize: hp(2.3),
        elevation: 2
    },
    errorText: {
        marginTop: hp(0.5),
        fontSize: hp(1.6),
        color: colors.red,
    },
    errorInput: {
        borderColor: 'red',
    },
});

export default styles;