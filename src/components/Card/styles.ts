import { StyleSheet } from "react-native";
import { colors } from "../../constants";
import { hp, wp } from "../../utils/responsive";

const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: 10,
        backgroundColor: colors.white,
        padding: 15,
        borderRadius: 12,
        elevation: 1,
    },
    topSection: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    idBlock: {
        backgroundColor: colors.gray,
        width: 25,
        height: 25,
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    idText: { color: colors.white },
    titleText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: colors.dark,
        maxWidth: wp(70),
    },
    authorIdText: { fontSize: 12, textAlign: 'justify', marginVertical: 5 },
    bodyText: { fontSize: 12, textAlign: 'justify' }
})

export default styles;