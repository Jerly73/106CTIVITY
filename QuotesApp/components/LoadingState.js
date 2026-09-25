// This is the component that will be used to display a loading state
import React from "react";
// These are react native components that we will use to build our UI
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
// This is the component that will be used to display a loading state
export default function LoadingState() {
  return (
    <View style={styles.container}>
      <View style={styles.loadingCircle}>
        <ActivityIndicator
          size="large"
          color="#F59E0B"
        />
      </View>

      <Text style={styles.loadingText}>
        Finding inspiration...
      </Text>

      <Text style={styles.loadingSubtext}>
        Connecting to the quote API
      </Text>
    </View>
  );
}
// This is the stylesheet for the component
const styles = StyleSheet.create({
// This is the style for the container
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    minHeight: 200,
    justifyContent: "center",
    alignItems: "center",
// This is the shadow for the container
    shadowColor: "#5F574D",
    shadowOffset: {
      width: 0,
      height: 5,
    },
// This is the shadow opacity for the container
    shadowOpacity: 0.10,
    shadowRadius: 12,
    elevation: 4,
  },
// This is the style for the loading circle
  loadingCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#FFF7E6",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
// This is the style for the loading text
  loadingText: {
    color: "#5F574D",
    fontSize: 14,
    fontWeight: "700",
  },
// This is the style for the loading subtext
  loadingSubtext: {
    color: "#AAA198",
    fontSize: 11,
    marginTop: 5,
  },
})