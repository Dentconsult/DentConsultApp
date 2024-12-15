import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');


export const COLORS = {
    primary: '#694EA0',
    secondary: '#03DAC6',
    white: '#FFFFFF',
    black: '#434A5B',
    gray: '#767676',
  };
  
  export const SIZES = {
    padding: 16,
    margin: 16,
    title: 27,
    subtitle: 20,
    button: 18,
  };
  
const sharedStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: "space-between",
    },
    imageBackground: {
        width: "100%",
        height: 320,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        justifyContent: "center",
        marginLeft: 20,
        marginTop: 150,
    },
    title: {
        fontSize: SIZES.title,
        fontFamily: 'OutfitSemiBold',
        fontWeight: 'bold',
        color: COLORS.black,
        textAlign: 'left',
        lineHeight: 36.16
    },
    subtitle: {
        fontSize: SIZES.subtitle,
        color: COLORS.gray,
        fontFamily: "OutfitRegular",
        textAlign: 'left',
        lineHeight: 25.83,
    },
    button: {
        backgroundColor: COLORS.primary,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.8,
    },
    buttonText: {
        fontSize: SIZES.button,
        fontFamily: "Outfit-Regular",
        color: COLORS.white,
        fontWeight: 'bold',
    },
    onboardImage: {
        marginHorizontal: "auto",
        alignItems: "center",
        justifyContent: "center",
        width: 250.42,
        height: 250.42,
        top: 200,
    },
    onboardSubtitle: {
        fontSize: 18.45,
        color: COLORS.gray,
        fontFamily: "OutfitRegular",
        textAlign: 'left',
        lineHeight: 25.83,
    },
    onboardFooter: {
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 80,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    skipButton: {
        fontFamily: 'OutfitSemiBold',
        justifyContent: "center",
        fontSize: 18.45,
    },
    skipText: {
        fontFamily: 'OutfitSemiBold',
        color: COLORS.gray,
        fontSize: 18.5,
    },
    nextButton: {
        backgroundColor: COLORS.primary,
        fontFamily: 'OutfitSemiBold',
        padding: 15,
        borderRadius: 8,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginRight: 20,        
    }
});

export default sharedStyles;
