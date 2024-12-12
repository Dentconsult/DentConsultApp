import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
} from "react-native";
import { useRouter } from "expo-router";

const ResetPasswordScreen = () => {
  const [modalVisible, setModalVisible] = useState(true); // Control the visibility of the modal
  const router = useRouter();

  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.overlay}>
        <View style={styles.popupContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)} // Close the modal
          >
            <Text style={styles.closeButtonText}>×</Text>
          </TouchableOpacity>
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/3997A2/key.png" }}
            style={styles.keyIcon}
          />
          <Text style={styles.title}>Reset Password</Text>
          <Text style={styles.subtitle}>
            Select Which Contact Details Should We Use To Reset Your Password
          </Text>

          <TouchableOpacity style={styles.optionButton}>
            <View style={styles.optionContent}>
              <Image
                source={{ uri: "https://img.icons8.com/ios-filled/50/3997A2/email.png" }}
                style={styles.optionIcon}
              />
              <Text style={styles.optionText}>Via Email:</Text>
            </View>
            <Text style={styles.detailText}>johndoe@gmail.com</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton}>
            <View style={styles.optionContent}>
              <Image
                source={{ uri: "https://img.icons8.com/ios-filled/50/3997A2/sms.png" }}
                style={styles.optionIcon}
              />
              <Text style={styles.optionText}>Via SMS:</Text>
            </View>
            <Text style={styles.detailText}>+4477******77</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => router.push("/login/verification")} // Navigate as per the original code
          >
            <Text style={styles.actionButtonText}>Send OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  popupContainer: {
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
    backgroundColor: "#eeeeee",
    justifyContent: "center",
    alignItems: "center",
  },
  closeButtonText: {
    fontSize: 20,
    color: "#333333",
  },
  keyIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
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
    borderRadius: 25,
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  actionButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ResetPasswordScreen;
