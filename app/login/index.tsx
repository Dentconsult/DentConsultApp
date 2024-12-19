import React, { useState } from "react";
import { COLORS, SIZES } from '../styles';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import { useRouter } from "expo-router";

const LoginScreen = () => {
  const router = useRouter();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState<"email" | "sms" | null>(
    null
  );

  const handleOptionSelect = (option: "email" | "sms") => {
    setSelectedOption(option);
  };

  const handleSendOTP = () => {
    if (selectedOption) {
      setIsModalVisible(false);
      router.push("/login/verification"); // Navigate to the verification screen
    } else {
      alert("Please select an option to send OTP");
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/dent_consult_icon.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Quick Sign-In</Text>
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
            placeholder="Enter Your Phone Number Or Email"
            placeholderTextColor="#777777"
            style={styles.input}
          />
        </View>
        <View style={styles.inputWrapper}>
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/3997A2/lock-2.png" }}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Enter Your Password"
            placeholderTextColor="#777777"
            secureTextEntry
            style={styles.input}
          />
        </View>
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <Text style={styles.forgotPassword}>Forgot Password</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.signUpPrompt}>
        Don’t Have An Account?{" "}
        <Text
          style={styles.signUpLink}
          onPress={() => router.push("/login/signup")}
        >
          Sign Up
        </Text>
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
      <View style={styles.authMethods}>
        <View style={styles.authMethod}>
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/3997A2/face-id.png" }}
            style={styles.authIcon}
          />
          <Text style={styles.authText}>Face ID</Text>
        </View>
        <View style={styles.authMethod}>
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/3997A2/fingerprint.png" }}
            style={styles.authIcon}
          />
          <Text style={styles.authText}>Touch ID</Text>
        </View>
      </View>
      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
            <View style={styles.overlay}>
              <View style={styles.bumpContainer}>
                <View style={styles.bump}>
                  <Image
                    source={require("../../assets/images/lock.png")}
                    style={styles.bumpIcon}
                  />
                </View>
              </View>
              <View style={styles.popupContainer}>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setIsModalVisible(false)}
                >
                  <Text style={styles.closeButtonText}>×</Text>
                </TouchableOpacity>
                <Text style={styles.modalTitle}>Reset Password</Text>
                <Text style={styles.modalSubtitle}>
                  Select Which Contact Details Should We Use To Reset Your Password
                </Text>
      
                <TouchableOpacity
                  style={[
                    styles.optionButton,
                    selectedOption === "email" && styles.selectedOption,
                  ]}
                  onPress={() => handleOptionSelect("email")}
                >
                  <View style={styles.optionContent}>
                    <Image
                      source={{
                        uri: "https://img.icons8.com/ios-filled/50/3997A2/email.png",
                      }}
                      style={styles.optionIcon}
                    />
                    <Text style={styles.optionText}>Via Email:</Text>
                  </View>
                  <Text style={styles.detailText}>johndoe@gmail.com</Text>
                </TouchableOpacity>
      
                <TouchableOpacity
                  style={[
                    styles.optionButton,
                    selectedOption === "sms" && styles.selectedOption,
                  ]}
                  onPress={() => handleOptionSelect("sms")}
                >
                  <View style={styles.optionContent}>
                    <Image
                      source={{
                        uri: "https://img.icons8.com/ios-filled/50/3997A2/sms.png",
                      }}
                      style={styles.optionIcon}
                    />
                    <Text style={styles.optionText}>Via SMS:</Text>
                  </View>
                  <Text style={styles.detailText}>+4477******77</Text>
                </TouchableOpacity>
      
                <TouchableOpacity style={styles.actionButton} onPress={handleSendOTP}>
                  <Text style={styles.actionButtonText}>Send OTP</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
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
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  textContainer: {
    alignItems: "flex-start",
    marginBottom: 40,
  },
  title: {
    fontSize: 22,
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
  forgotPassword: {
    color: "#3997A2",
    textAlign: "right",
    marginTop: 5,
  },
  signInButton: {
        backgroundColor: COLORS.primary,
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
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
    color: "#3997A2",
    fontWeight: "bold",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
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
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 10,
    paddingVertical: 15,
    marginHorizontal: 5,
    justifyContent: "center",
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialText: {
    fontSize: 16,
    color: "#333333",
  },
  authMethods: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  authMethod: {
    alignItems: "center",
  },
  authIcon: {
    width: 60,
    height: 60,
    marginBottom: 5,
  },
  authText: {
    fontSize: 14,
    color: "#333333",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  bumpContainer: {
    position: "absolute",
    top: "28%",
    zIndex: 2,
  },
  bump: {
    backgroundColor: "#ffffff",
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  bumpIcon: {
    width: 40,
    height: 40,
  },
  popupContainer: {
    width: "90%",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    elevation: 5,
    marginTop: 120, // Adjust for bump
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#3997A2",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonText: {
    fontSize: 20,
    color: "#D8D8D8",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3997A2",
    marginBottom: 10,
    marginTop: 40,
  },
  modalSubtitle: {
    fontSize: 14,
    color: "#777777",
    textAlign: "center",
    marginBottom: 20,
  },
  optionButton: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 10,
    marginBottom: 15,
  },
  selectedOption: {
    borderColor: "#694EA0",
    backgroundColor: "#EFEAFF",
  },
  optionContent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  optionIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  optionText: {
    fontSize: 14,
    color: "#333333",
    fontWeight: "bold",
  },
  detailText: {
    fontSize: 14,
    color: "#777777",
    marginLeft: 30,
  },
  actionButton: {
    backgroundColor: "#694EA0",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
    marginTop: 10,
    marginBottom:30,
  },
  actionButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LoginScreen;
