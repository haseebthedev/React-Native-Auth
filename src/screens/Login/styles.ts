import { StyleSheet } from "react-native";
import { colors } from "../../constants";
import { hp, wp } from "../../utils/responsive";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: wp(6),
        paddingVertical: hp(4),
    },
    textCenterAlign: {
        textAlign: 'center'
    },
    heading: {
        fontSize: hp(4),
        fontWeight: "bold",
        color: colors.text,
        marginBottom: hp(2.5)
    },
    subHeading: {
        fontSize: hp(2.5),
        marginBottom: hp(6)
    },
    socialBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginBottom: hp(4),
    },
    socialBtnContainer: {
        width: hp(8),
        height: hp(8),
        backgroundColor: colors.background,
        borderWidth: 2,
        borderColor: colors.white,
        borderRadius: hp(1.6),
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconImage: {
        width: hp(4.5),
        height: hp(4.5)
    },
    verticalSpacing: { marginVertical: hp(4) },
    memberText: {
        fontSize: hp(2),
        color: colors.text
    },
    registerText: {
        fontWeight: "bold",
        color: colors.primary
    },
    recoverBtnBlock: {
        marginTop: -20,
        alignSelf: "flex-end",
        paddingVertical: 10,
        marginBottom: 20,
    },
    recoveryText: {
        color: colors.text
    },
})

export default styles;