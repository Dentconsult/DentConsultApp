import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("./assets/dent_consult_icon.png")}
          style={styles.logo}
        />
        <Text style={styles.logoText}>DENT CONSULT</Text>
      </View>
      <Text style={styles.title}>Quick Sign-In</Text>
      <Text style={styles.subtitle}>
        Fast And Simple Access To Your Account.
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Enter Your Phone Number Or Email"
            style={styles.input}
          />
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/000000/email.png" }}
            style={styles.icon}
          />
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Enter Your Password"
            secureTextEntry
            style={styles.input}
          />
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/000000/visible.png" }}
            style={styles.icon}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.signUpPrompt}>
        Don’t Have An Account? <Text style={styles.signUpLink}>Sign Up</Text>
      </Text>
      <View style={styles.orContainer}>
        <Text style={styles.orText}>Or</Text>
      </View>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialText}>Apple</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.authMethods}>
        <Text>Face ID</Text>
        <Text>Touch ID</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  logoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
    marginTop: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#777777",
    textAlign: "center",
    marginVertical: 10,
  },
  inputContainer: {
    marginVertical: 20,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    fontSize: 14,
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  forgotPassword: {
    color: "#6200EE",
    textAlign: "right",
    marginVertical: 5,
  },
  signInButton: {
    backgroundColor: "#6200EE",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginVertical: 10,
  },
  signInText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  signUpPrompt: {
    textAlign: "center",
    marginVertical: 10,
    fontSize: 14,
  },
  signUpLink: {
    color: "#6200EE",
    fontWeight: "bold",
  },
  orContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  orText: {
    fontSize: 14,
    color: "#777777",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 10,
  },
  socialButton: {
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  socialText: {
    fontSize: 14,
    color: "#333333",
  },
  authMethods: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
});

export default LoginScreen;
