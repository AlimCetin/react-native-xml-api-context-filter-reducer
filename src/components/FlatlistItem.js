import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Item = ({ CurrencyName, ForexBuying }) => (
  <View style={styles.item}>
    <Text style={styles.currencyName}>{CurrencyName}</Text>
    <Text style={styles.price}>{ForexBuying}</Text>
  </View>
);

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#a7adba",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    fontSize: 16,
    display: "flex",
    flexDirection: "row",
    borderRadius: 5,
    zIndex: 1,
  },
  currencyName: {
    flex: 2,
    color: "white",
  },
  price: {
    flex: 1,
    textAlign: "right",
  },
});

export default Item;
