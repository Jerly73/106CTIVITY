import React from "react";//IMPORT REACT SO WE CAN CREATE A REACT COMPONENT

//this are react native components that we will use to build our UI
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
//this is the component that will be used to display a quote card
export default function QuoteCard({ quote, author }) {
  return (
    <View style={styles.quoteCard}>
      <Text style={styles.quoteMark}>
        “
      </Text>

      <Text style={styles.quoteText}>
        {quote}
      </Text>

      <View style={styles.authorContainer}>
        <View style={styles.authorLine} />
        <Text style={styles.author}>
          {author}
        </Text>
      </View>
    </View>
  );
}
//this is the stylesheet for the component
const styles = StyleSheet.create({
//this is the style for the quote card
  quoteCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 23,
    minHeight: 200,
//this is the shadow for the quote card
    shadowColor: "#5F574D",
    shadowOffset: {
      width: 0,
      height: 5,
    },
//this is the shadow opacity for the quote card
    shadowOpacity: 0.10,
    shadowRadius: 12,
    elevation: 4,
  },
//this is the style for the quote mark
  quoteMark: {
    color: "#F59E0B",
    fontSize: 50,
    fontWeight: "900",
    lineHeight: 45,
  },
//this is the style for the quote text
  quoteText: {
    color: "#302D29",
    fontSize: 19,
    lineHeight: 28,
    fontWeight: "700",
  },
//this is the style for the author container
  authorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 18,
  },
//this is the style for the author line
  authorLine: {
    width: 25,
    height: 2,
    backgroundColor: "#F59E0B",
    marginRight: 9,
    borderRadius: 2,
  },
//this is the style for the author text
  author: {
    color: "#8A7A66",
    fontSize: 13,
    fontWeight: "700",
    flex: 1,
  },
})