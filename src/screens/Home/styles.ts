import { StyleSheet } from "react-native";
import { colors } from "../../constants";
import { hp, wp } from "../../utils/responsive";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: hp(4)
    },
    header: {
        fontSize: hp(3),
        fontWeight: "bold",
        color: colors.primary,
        textAlign: 'center',
        marginTop: hp(1)
    },
    listContainer: {
        paddingHorizontal: wp(6),
        marginTop: hp(2)
    },
    emptyContainer: {
        marginTop: hp(20)
    }
})

export default styles;