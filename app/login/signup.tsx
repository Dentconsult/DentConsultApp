import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";

const SignUpScreen = () => {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/dent_consult_icon.png")}
          style={styles.logo}
        />
        
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Create Your Account</Text>
        <Text style={styles.subtitle}>
          Fast And Simple Access To Your Account.
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/3997A2/email.png" }}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Enter Your Email"
            placeholderTextColor="#777777"
            style={styles.input}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputWrapper}>
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/3997A2/phone.png" }}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Enter Your Phone Number"
            placeholderTextColor="#777777"
            style={styles.input}
            keyboardType="phone-pad"
          />
          <TouchableOpacity style={styles.inlineButton}>
            <Text style={styles.inlineButtonText}>Get OTP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputWrapper}>
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/3997A2/lock-2.png" }}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="OTP"
            placeholderTextColor="#777777"
            style={styles.input}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.inlineButton}>
            <Text style={styles.inlineButtonText}>Verify</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputWrapper}>
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/3997A2/lock-2.png" }}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Enter Your Password"
            placeholderTextColor="#777777"
            style={styles.input}
            secureTextEntry
          />
        </View>
        <View style={styles.inputWrapper}>
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/3997A2/lock-2.png" }}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="#777777"
            style={styles.input}
            secureTextEntry
          />
        </View>
      </View>

      <TouchableOpacity style={styles.signUpButton} onPress={() => router.push("/login/roleselection")}>
        <Text style={styles.signUpButtonText} >Sign Up</Text>
      </TouchableOpacity>

      <Text style={styles.termsText}>
        By Signing Up To This App You Agree With{" "}
        <Text style={styles.link}>Our Terms</Text> And{" "}
        <Text style={styles.link}>Privacy Policy</Text>
      </Text>

      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>Or</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={{ uri: "https://img.icons8.com/color/48/google-logo.png" }}
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/000000/mac-os.png" }}
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>Apple</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => router.push("/login")}>
        <Text style={styles.signInLink}>
          Already Have An Account? <Text style={styles.link}>Sign In</Text>
        </Text>
      </TouchableOpacity>
    </ScrollView>
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
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  logoText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
    marginTop: 5,
  },
  textContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3997A2",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#777777",
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#333333",
  },
  inputIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  inlineButton: {
    backgroundColor: "#694EA0",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  inlineButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 12,
  },
  signUpButton: {
    backgroundColor: "#694EA0",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginVertical: 10,
  },
  signUpButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  termsText: {
    fontSize: 12,
    textAlign: "center",
    marginVertical: 10,
  },
  link: {
    color: "#3997A2",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  orText: {
    fontSize: 14,
    color: "#777777",
    marginHorizontal: 10,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#dddddd",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 10,
    paddingVertical: 10,
    flex: 1,
    marginHorizontal: 5,
    justifyContent: "center",
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialText: {
    fontWeight: "bold",
  },
  signInLink: {
    textAlign: "center",
    fontSize: 14,
    marginTop: 10,
  },
});

export default SignUpScreen;
