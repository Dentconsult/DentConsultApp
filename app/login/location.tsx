import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import * as Location from "expo-location";
import { useRouter } from "expo-router";

// Type for the region (coordinates + deltas)
interface RegionType {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

// Type for marker drag event
interface MarkerDragEvent {
  nativeEvent: {
    coordinate: {
      latitude: number;
      longitude: number;
    };
  };
}

const LocationScreen = () => {
  const router = useRouter();

  // Define the state with the correct type
  const [region, setRegion] = useState<RegionType | null>(null);
  const [address, setAddress] = useState<string>("");

  // Fetch the current location
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location denied.");
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = currentLocation.coords;

      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });

      fetchAddress(latitude, longitude);
    })();
  }, []);

  // Fetch address from latitude and longitude
  const fetchAddress = async (latitude: number, longitude: number) => {
    try {
      const location = await Location.reverseGeocodeAsync({ latitude, longitude });
      if (location.length > 0) {
        const { street, city, region, postalCode } = location[0];
        setAddress(`${street}, ${city}, ${region}, ${postalCode}`);
      } else {
        setAddress("Unable to fetch address.");
      }
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  // Handle marker drag
  const handleMarkerDrag = (e: MarkerDragEvent) => {
    const { latitude, longitude } = e.nativeEvent.coordinate;
    if (region) {
      setRegion({ ...region, latitude, longitude });
      fetchAddress(latitude, longitude);
    }
  };

  return (
    <View style={styles.container}>
      {/* Map Section */}
      {region ? (
        <MapView
          style={styles.map}
          region={region}
          onRegionChangeComplete={(reg: Region) => setRegion(reg)}
        >
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
            draggable
            onDragEnd={handleMarkerDrag}
          />
        </MapView>
      ) : (
        <Text style={styles.loadingText}>Loading Map...</Text>
      )}

      {/* Bottom Section */}
      <View style={styles.bottomContainer}>
        <Text style={styles.title}>Select Location</Text>
        <Text style={styles.label}>Your Location</Text>
        <TextInput
          value={address}
          placeholder="Address will appear here"
          style={styles.input}
          editable={false}
        />

        {/* Save Button */}
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  map: {
    flex: 3,
    width: "100%",
  },
  loadingText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#555555",
  },
  bottomContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F9F9F9",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3997A2",
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    color: "#777777",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 10,
    padding: 12,
    fontSize: 14,
    color: "#333333",
    marginBottom: 20,
    backgroundColor: "#ffffff",
  },
  saveButton: {
    backgroundColor: "#694EA0",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
  },
  saveText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LocationScreen;
