import React, { useEffect } from "react";
import MainNavigationContainer from "./navigation";
import { QueryClient, QueryClientProvider } from "react-query";
import Toast from "react-native-toast-message";
import { enableLatestRenderer } from "react-native-maps";
import { PermissionsAndroid } from "react-native";

const queryClient = new QueryClient();

const App = () => {
  async function requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "Location Permission",
          message:
            "This app needs access to your location to function properly.",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Location permission granted");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }
  useEffect(() => {
    enableLatestRenderer();

    requestLocationPermission();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <MainNavigationContainer />
      <Toast />
    </QueryClientProvider>
  );
};

export default App;
