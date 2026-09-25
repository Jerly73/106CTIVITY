import React, { useEffect, useRef, useState } from "react";//IMPORT REACT SO WE CAN CREATE A REACT COMPONENT
// These are react native components that we will use to build our UI
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Animated,
} from "react-native";
// These are the components that we will use to display the quote, loading state, and error state
import QuoteCard from "./components/QuoteCard";
import LoadingState from "./components/LoadingState";
import ErrorState from "./components/ErrorState";
// This is the function that will be used to fetch a random quote from the API
import { getRandomQuote } from "./services/quoteApi";
// This is the main App component that will be rendered on the screen
export default function App() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
// These are the animated values that we will use to animate the quote and button
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const translateYAnim = useRef(new Animated.Value(0)).current;
  const buttonScale = useRef(new Animated.Value(1)).current;
// This function fetches a random quote from the API and updates the state accordingly
  const getQuote = async () => {
    setLoading(true);
    setError("");
  // This is a try-catch block that will handle any errors that may occur during the API request
    try {
      const data = await getRandomQuote();
// This is a check to make sure that the data returned from the API is valid
      setQuote(data);
// This is the animation that will be used to fade in the quote and move it up slightly
      fadeAnim.setValue(0);
      translateYAnim.setValue(15);
// This is the animation that will be used to fade in the quote and move it up slightly
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 350,
          useNativeDriver: true,
        }),
// This is the animation that will be used to fade in the quote and move it up slightly
        Animated.timing(translateYAnim, {
          toValue: 0,
          duration: 350,
          useNativeDriver: true,
        }),
      ]).start();
// This is the catch block that will handle any errors that may occur during the API request
    } catch (err) {
      console.log("API ERROR:", err);
// This is the error message that will be displayed to the user if the API request fails
      setError(
        "Something went wrong.\nPlease check your internet connection."
      );
// This is the finally block that will be executed after the try-catch block, regardless of whether an error occurred or not
    } finally {
      setLoading(false);
    }
  };
// This function handles the button press event and triggers the animation and API request
  const handleNewQuote = () => {
    Animated.sequence([
      Animated.timing(buttonScale, {
        toValue: 0.94,
        duration: 80,
        useNativeDriver: true,
      }),
// This is the animation that will be used to scale the button down slightly when pressed
      Animated.timing(buttonScale, {
        toValue: 1,
        duration: 120,
        useNativeDriver: true,
      }),
    ]).start();
// This is the API request that will be triggered when the button is pressed
    getQuote();
  };
// This useEffect hook will run once when the component mounts and fetch the initial quote
  useEffect(() => {
    getQuote();
  }, []);
// This is the return statement that will render the UI of the app
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#263238"
      />

      {/* Decorative background */}
      <View style={styles.glowTop} />
      <View style={styles.glowBottom} />
      <View style={styles.smallCircleOne} />
      <View style={styles.smallCircleTwo} />

      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.logoBadge}>
          <Text style={styles.logo}> ☆ INSPIRE</Text>
        </View>
        
        <Text style={styles.heroTitle}> Find your</Text>
        <Text style={styles.heroTitleBold}>daily inspiration.</Text>
        <Text style={styles.heroSubtitle}>One thought can change your day.</Text>
      </View>

      {/* MAIN CONTENT */}
      <View style={styles.content}>

        {/* Heading */}
        <View style={styles.headingRow}>
          <View>
            <Text style={styles.heading}>TODAY'S THOUGHT </Text>

            <View style={styles.headingLine} /></View>

          <Text style={styles.sun}> ☀</Text>
        </View>

        {/* Quote */}
        <Animated.View
          style={[
            styles.quoteWrapper,
            {
              opacity: fadeAnim,
              transform: [
                {
                  translateY: translateYAnim,
                },
              ],
            },
          ]}
        >

          {loading && !quote ? (
            <LoadingState />
          ) : error && !quote ? (
            <ErrorState
              message={error}
              onRetry={getQuote}
            />
          ) : quote ? (
            <QuoteCard
              quote={quote.text}
              author={quote.author}
            />
          ) : null}
        </Animated.View>

        {/* Positive message */}
        {!loading && !error && quote && (
          <View style={styles.messageBox}>
            <Text style={styles.messageIcon}>✦</Text>

            <Text style={styles.message}>Keep growing. Keep going.</Text>
          </View>
        )}

        {/* Button */}
        <Animated.View
          style={{
            transform: [
              {
                scale: buttonScale,
              },
            ],
          }}
        >

          <TouchableOpacity
            style={[
              styles.button,
              loading && styles.disabledButton,
            ]}
            onPress={handleNewQuote}
            disabled={loading}
            activeOpacity={0.85}
          >

            <Text style={styles.buttonIcon}>✨</Text>

            <Text style={styles.buttonText}>
              {loading
                ? "LOADING..."
                : "NEW INSPIRATION"}
            </Text>

            {!loading && (
              <Text style={styles.arrow}> → </Text>)}
          </TouchableOpacity>
        </Animated.View>

        {/* Footer */}
        <Text style={styles.footer}>Take a breath • Read • Reflect • Smile</Text>
      </View>
    </SafeAreaView>
  );
}
// This is the stylesheet for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F7F2",
    paddingHorizontal: 20,
    overflow: "hidden",
  },

  // Decorative background
  glowTop: {
    position: "absolute",
    top: -80,
    right: -70,
    width: 230,
    height: 230,
    borderRadius: 115,
    backgroundColor: "#F59E0B",
    opacity: 0.12,
  },
// This is the style for the bottom glow
  glowBottom: {
    position: "absolute",
    bottom: -100,
    left: -80,
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: "#D97706",
    opacity: 0.08,
  },
// This is the style for the small circle on the top left
  smallCircleOne: {
    position: "absolute",
    top: 170,
    left: -12,
    width: 35,
    height: 35,
    borderRadius: 18,
    backgroundColor: "#FBBF24",
    opacity: 0.12,
  },
// This is the style for the small circle on the bottom right
  smallCircleTwo: {
    position: "absolute",
    bottom: 180,
    right: -15,
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: "#F59E0B",
    opacity: 0.09,
  },
// Header
  header: {
    alignItems: "center",
    paddingTop: 100,
    marginBottom: 24,
  },
// This is the style for the logo badge
  logoBadge: {
    backgroundColor: "#26343D",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginBottom: 13,
  },
// This is the style for the logo text
  logo: {
    color: "#FFD166",
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 2,
  },
// This is the style for the hero title
  heroTitle: {
    color: "#26343D",
    fontSize: 31,
    fontWeight: "400",
  },
// This is the style for the hero title bold
  heroTitleBold: {
    color: "#26343D",
    fontSize: 31,
    fontWeight: "900",
  },
// This is the style for the hero subtitle
  heroSubtitle: {
    color: "#8A8178",
    fontSize: 13,
    marginTop: 8,
  },
  // Content
  content: {
    flex: 1,
  },
// This is the style for the heading row
  headingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
// This is the style for the heading text
  heading: {
    color: "#6B6257",
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 1.5,
  },
// This is the style for the heading line
  headingLine: {
    width: 32,
    height: 2,
    backgroundColor: "#F59E0B",
    marginTop: 5,
    borderRadius: 2,
  },
// This is the style for the sun icon
  sun: {
    color: "#F59E0B",
    fontSize: 26,
    fontWeight: "700",
  },
// This is the style for the quote wrapper
  quoteWrapper: {
    width: "100%",
  },
  // Message
  messageBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 13,
  },
// This is the style for the message icon
  messageIcon: {
    color: "#F59E0B",
    fontSize: 16,
    marginRight: 7,
  },
// This is the style for the message text
  message: {
    color: "#7D746A",
    fontSize: 12,
    fontWeight: "600",
  },
  // Button
  button: {
    height: 56,
    backgroundColor: "#F59E0B",
    borderRadius: 18,
    marginTop: 16,
// This is the style for the button content
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
// This is the shadow for the button
    shadowColor: "#F59E0B",
    shadowOffset: {
      width: 0,
      height: 5,
    },
// This is the shadow opacity for the button
    shadowOpacity: 0.22,
    shadowRadius: 8,
    elevation: 4,
  },
// This is the style for the disabled button
  disabledButton: {
    opacity: 0.55,
  },
// This is the style for the button icon
  buttonIcon: {
    fontSize: 16,
    marginRight: 8,
  },
// This is the style for the button text
  buttonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 0.7,
  },
// This is the style for the arrow icon
  arrow: {
    color: "#FFFFFF",
    fontSize: 20,
    marginLeft: 10,
  },
  // Footer
  footer: {
    color: "#AAA198",
    textAlign: "center",
    fontSize: 15,
    marginTop: "auto",
    paddingBottom: 25,
  },
});