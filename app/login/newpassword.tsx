import React, { useState }from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image,Modal } from "react-native";
import { useRouter } from "expo-router";

const ResetPasswordScreen = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter New Password</Text>
      <Text style={styles.subtitle}>
        Please Enter Your New Password To Reset It
      </Text>

      <View style={styles.inputWrapper}>
        <Image
          source={{ uri: "https://img.icons8.com/ios-filled/50/3997A2/lock-2.png" }}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Your Password"
          placeholderTextColor="#777777"
          secureTextEntry
        />
        <Image
          source={{ uri: "https://img.icons8.com/ios-filled/50/3997A2/visible.png" }}
          style={styles.endIcon}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Image
          source={{ uri: "https://img.icons8.com/ios-filled/50/3997A2/lock-2.png" }}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#777777"
          secureTextEntry
        />
        <Image
          source={{ uri: "https://img.icons8.com/ios-filled/50/3997A2/visible.png" }}
          style={styles.endIcon}
        />
      </View>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.actionButtonText}>Reset</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
            <View style={styles.overlay}>
              <View style={styles.modalContainer}>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => {
                    setModalVisible(false);
                    router.push("/login");
                  }}
                >
                  <Text style={styles.closeButtonText}>×</Text>
                </TouchableOpacity>
                <Image
                  source={require("../../assets/images/success.png")}
                  style={styles.image}
                />
                <Text style={styles.title}>Your Password Has Been Reset Successfully</Text>
                <TouchableOpacity
                  style={styles.modalActionButton}
                  onPress={() => {
                    setModalVisible(false);
                    router.push("/login");
                  }}
                >
                  <Text style={styles.modalActionButtonText}>Done</Text>
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
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3997A2",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#777777",
    marginBottom: 60,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 10,
    marginBottom: 25,
    paddingHorizontal: 10,
    height: 55, // Adjusted height to match the design
    backgroundColor: "#f9f9f9",
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#333333",
    paddingLeft: 10,
  },
  inputIcon: {
    width: 24, // Adjusted size to match design
    height: 24,
  },
  endIcon: {
    width: 24, // Adjusted size to match design
    height: 24,
    marginLeft: 10,
  },
  actionButton: {
    backgroundColor: "#694EA0",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  actionButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    elevation: 5,
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
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  modaltitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#3997A2",
    marginBottom: 30,
  },
  modalActionButton: {
    backgroundColor: "#694EA0",
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius: 8,
  },
  modalActionButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  
});

export default ResetPasswordScreen;
