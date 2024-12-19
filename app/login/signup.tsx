import React from "react";
import { useState } from "react";
import { COLORS, SIZES } from '../styles';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";

const SignUpScreen = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [buttonText, setOtpButtonText] = useState('Get Otp');
  const [disableOtp, setDisableOtp] = useState(false);
  const [disableVerifyOtp, setDisableVerifyOtp] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [verifyOtpLoading, setVerifyOtpLoading] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
  const [userVerified, setUserVerified] = useState(false);

  // Email validation regex
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      Alert.alert('Validation Error', 'Email is required');
      return;
    }
    if(!emailRegex.test(email)) {
      Alert.alert('Validation Error', 'Invalid email format');
      return;
    }
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const phoneNumberRegex = /^((\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}/;
    if (!phoneNumber.trim()) {
      Alert.alert('Validation Error', 'PhoneNumber is required');
      return;
    }
    if(!phoneNumberRegex.test(phoneNumber)) {
      Alert.alert('Validation Error', 'Invalid phone number');
      return;
    }
  };

  const getOtp = async () => {
    // Validate inputs
    setDisableOtp(true)
    setTimeout(() => { setDisableOtp(false)}, 10000)
    
    validateEmail(email);
    validatePhoneNumber(phoneNumber);
    
    setOtpLoading(true);

    // Data to send
    const data = {
      email: email,
      phoneNumber: phoneNumber,
    };

    try {
      const response = await fetch('https://x0irjra2xc.execute-api.eu-north-1.amazonaws.com/default/dentconsult/getotp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        Alert.alert('Success', 'Data sent successfully!');
        setOtpButtonText("ReSend OTP");
      } else {
        Alert.alert('Error', result.message || 'Something went wrong');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to connect to the server');
    } finally {
      // Set loading state to false
      setOtpLoading(false);
    }
  };

  const verifyOtp = async () => {
    // Validate inputs
    setDisableVerifyOtp(true);
    validateEmail(email);
    if (!otp.trim()) {
      Alert.alert('Validation Error', 'Otp is required');
      return;
    }
    setVerifyOtpLoading(true);
    // Data to send
    const data = {
      email: email,
      otp: otp,
    };
    
    try {
      const response = await fetch('https://x0irjra2xc.execute-api.eu-north-1.amazonaws.com/default/dentconsult/verifyotp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        Alert.alert('Success', 'Phone number verified successfully!');
        setUserVerified(true);
      } else {
        Alert.alert('Error', result.message || 'Something went wrong');
        setDisableVerifyOtp(false);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to connect to the server');
      setDisableOtp(false);
    } finally {
      // Set loading state to false
      setVerifyOtpLoading(false);
    }
  };

  const register = async () => {
    // Validate inputs
    validateEmail(email);
    
    if (!password.trim()) {
      Alert.alert('Validation Error', 'Password is required');
      return;
    }

    if ((password.trim()) !== (confirmPassword.trim())) {
      Alert.alert('Validation Error', 'Password and Confirm Password should be equal');
      return;
    }

    setRegisterLoading(true);
    // Data to send
    const data = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };

    try {
      const response = await fetch('https://x0irjra2xc.execute-api.eu-north-1.amazonaws.com/default/dentconsult/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        Alert.alert('Success', 'User registered successfully');
        router.replace("/login");
      } else {
        Alert.alert('Error', result.message || 'Something went wrong');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to connect to the server');
    } finally {
      // Set loading state to false
      setRegisterLoading(false);
    }
  };

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
            value={email}
            onChangeText={(text) => setEmail(text)}
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
            value={phoneNumber}
            maxLength={10}
            onChangeText={(text) => {
              if(text !== phoneNumber) {
                setOtpButtonText("Get OTP");
                setUserVerified(false);
              }   
              setPhoneNumber(text); 
            }}
          />
          {otpLoading ? (<ActivityIndicator size="small" color="#0000ff" />) : 
          (!userVerified && <TouchableOpacity style={[styles.inlineButton, disableOtp && styles.disabledButton]} onPress={getOtp} disabled={disableOtp}>
            <Text style={styles.inlineButtonText}>{buttonText}</Text>
          </TouchableOpacity>) }
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
            value={otp}
            maxLength={6}
            onChangeText={(text) => setOtp(text)}
          />
          {verifyOtpLoading ? (<ActivityIndicator size="small" color="#0000ff" />) :
          (!userVerified && <TouchableOpacity style={styles.inlineButton} disabled={disableVerifyOtp} onPress={verifyOtp}>
            <Text style={styles.inlineButtonText}>Verify</Text>
          </TouchableOpacity>) }
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
            value={password}
            onChangeText={(text) => setPassword(text)}
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
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </View>
      </View>
      {registerLoading ? (<ActivityIndicator size="large" color="#0000ff" />) :
        (<TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpButtonText} onPress={register}>Sign Up</Text>
        </TouchableOpacity>) }

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
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
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
  disabledButton: {
    backgroundColor: '#a9a9a9', // Change to your desired disabled color
  },
});

export default SignUpScreen;
