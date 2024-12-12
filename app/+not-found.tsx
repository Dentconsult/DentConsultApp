import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen() {
    return (
        <>
        <Stack.Screen options={{title: "Opps! Not found"}}></Stack.Screen>
        <View style= {styles.container}>
            <Link href="/" style={styles.button} >
            Go back to Home</Link>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#25292e"  
    },
    text: {
      color: "#fff"
    },
    button: {
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff'
      }
  })