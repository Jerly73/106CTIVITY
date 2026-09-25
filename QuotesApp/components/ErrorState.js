// This is the ErrorState component that displays an error message and a retry button
import React from "react";
// These are react native components that we will use to build our UI
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
// This is the ErrorState component that displays an error message and a retry button
export default function ErrorState({
  message,
  onRetry,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.errorCircle}>
        <Text style={styles.errorIcon}>
          !
        </Text>
      </View>

      <Text style={styles.errorTitle}>
        Unable to load quote
      </Text>

      <Text style={styles.errorText}>
        {message}
      </Text>

      <TouchableOpacity
        style={styles.retryButton}
        onPress={onRetry}
        activeOpacity={0.8}
      >

        <Text style={styles.retryText}>
          TRY AGAIN
        </Text>
      </TouchableOpacity>
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
    padding: 20,
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
// This is the style for the error circle
  errorCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: "#FFF1F0",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
// This is the style for the error icon
  errorIcon: {
    color: "#E57373",
    fontSize: 24,
    fontWeight: "900",
  },
// This is the style for the error title
  errorTitle: {
    color: "#4A4540",
    fontSize: 16,
    fontWeight: "800",
  },
// This is the style for the error text
  errorText: {
    color: "#8A8178",
    fontSize: 12,
    textAlign: "center",
    lineHeight: 19,
    marginTop: 6,
  },
// This is the style for the retry button
  retryButton: {
    backgroundColor: "#26343D",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 18,
    marginTop: 13,
  },
// This is the style for the retry text
  retryText: {
    color: "#FFFFFF",
    fontSize: 10,
    fontWeight: "900",
    letterSpacing: 1,
  },
});