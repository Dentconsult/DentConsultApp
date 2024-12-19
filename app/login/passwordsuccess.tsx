import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import { useRouter } from "expo-router";

const PasswordResetSuccessModal = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const router = useRouter();

  return (
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
            style={styles.actionButton}
            onPress={() => {
              setModalVisible(false);
              router.push("/login");
            }}
          >
            <Text style={styles.actionButtonText}>Done</Text>
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#3997A2",
    marginBottom: 30,
  },
  actionButton: {
    backgroundColor: "#694EA0",
    paddingVertical: 12,
    paddingHorizontal: 100,
    borderRadius: 8,
  },
  actionButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PasswordResetSuccessModal;
