import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useRouter } from "expo-router";

const CaseDetailsScreen = () => {
  const router = useRouter();
  const [caseDetails, setCaseDetails] = useState({
    title: "",
    description: "",
    location: "",
  });

  const [image, setImage] = useState<string | null>(null);

  // Pick Image from Gallery
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Case Details</Text>

      <TextInput
        placeholder="Case Title"
        style={styles.input}
        value={caseDetails.title}
        onChangeText={(value) =>
          setCaseDetails({ ...caseDetails, title: value })
        }
      />

      <TextInput
        placeholder="Case Description"
        style={[styles.input, { height: 100 }]}
        multiline
        value={caseDetails.description}
        onChangeText={(value) =>
          setCaseDetails({ ...caseDetails, description: value })
        }
      />

      <TextInput
        placeholder="Location"
        style={styles.input}
        value={caseDetails.location}
        onChangeText={(value) =>
          setCaseDetails({ ...caseDetails, location: value })
        }
      />

      {/* Upload Image Section */}
      <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
        <Text style={styles.uploadText}>Upload Photo</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={styles.image} />}

      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => router.push("/")}
      >
        <Text style={styles.continueText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#FFF" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },
  uploadButton: {
    backgroundColor: "#3997A2",
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  uploadText: { color: "#FFF", fontWeight: "bold" },
  image: {
    width: "100%",
    height: 200,
    marginTop: 10,
    borderRadius: 10,
  },
  continueButton: {
    backgroundColor: "#694EA0",
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 20,
  },
  continueText: { color: "#FFF", textAlign: "center", fontWeight: "bold" },
});

export default CaseDetailsScreen;
