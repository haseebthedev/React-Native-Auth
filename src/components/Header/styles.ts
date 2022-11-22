import { StyleSheet } from "react-native";
import { colors } from "../../constants";
import { hp, wp } from "../../utils/responsive";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: wp(6),
        marginTop: 20,
    },
    headerText: {
        fontSize: hp(4),
        fontWeight: "bold",
        color: colors.primary,
        textAlign: 'center',
    },
    logoutBtn: { padding: hp(.4), justifyContent: 'center', alignItems: 'center' },
    logoutImg: { width: hp(4), height: hp(4) }
})

export default styles;