import { Platform, StyleSheet } from "react-native";

// Define the shadow styles as a constant
export const shadowStyle = Platform.select({
  ios: {
    shadowColor: 'rgba(0, 0, 0, 4)', // Adjust the shadow color and opacity
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1, // Increase opacity for a more pronounced shadow
    shadowRadius: 2, // Increase radius for a larger shadow
  },
  android: {
    elevation: 4, // This adds an elevation shadow for Android
  },
  
});