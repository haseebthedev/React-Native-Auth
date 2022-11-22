import { StyleSheet } from "react-native";
import { colors } from "../../constants";
import { hp } from "../../utils/responsive";

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: hp(2.2),
        borderRadius: hp(1.5),
        elevation: 2
    },
    title: {
        fontSize: hp(2.5),
        color: colors.white
    }
})

export default styles;