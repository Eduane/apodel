import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";

const MapGetLocation = () => {
  const [initialRegion, setInitialRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    // Get the current device location
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setInitialRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      (error) => {
        console.error(error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);

  const handleMapPress = (e) => {
    setSelectedLocation({
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
    });
  };

  return (
    <View style={styles.container}>
      <Text>Select a location:</Text>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        onPress={handleMapPress}
      >
        {selectedLocation && (
          <Marker
            coordinate={selectedLocation}
            title="Selected Location"
          ></Marker>
        )}
      </MapView>
      {selectedLocation && (
        <View style={styles.selectedLocation}>
          <Text>Latitude: {selectedLocation.latitude}</Text>
          <Text>Longitude: {selectedLocation.longitude}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: 300,
  },
  selectedLocation: {
    marginTop: 20,
  },
});

export default MapGetLocation;
