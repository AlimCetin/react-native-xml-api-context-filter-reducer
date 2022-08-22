import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, Button } from "react-native";
import { useFilterContext } from "../context/FilterContext";

const Item = ({}) => {
  const filterContext = useFilterContext();
  return (
    <View style={styles.container}>
      <View style={styles.col}>
        <Text style={styles.title}>Currency Name :</Text>
        <TextInput
          style={styles.input}
          onChangeText={(e) => filterContext.updateState("currency", e)}
          value={filterContext.state.currency}
          placeholder="Currency Name Filter..."
        />
      </View>
      <View style={styles.col}>
        <Text style={{ ...styles.title, ...styles.textAlignRight }}>Sort</Text>
        <View style={{ ...styles.sort, ...styles.textAlignRight }}>
          {filterContext.state.sortType == "asc" ? (
            <Button
              title="Azalan  Sırala"
              color="red"
              onPress={() => {
                filterContext.updateState("sortType", "desc");
              }}
            />
          ) : (
            <Button
              title="Artan  Sırala"
              color="green"
              onPress={() => {
                filterContext.updateState("sortType", "asc");
              }}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "white",
    marginBottom: 4,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "white",
    border: 1,
    padding: 4,
    borderRadius: 4,
  },
  container: {
    backgroundColor: "#4f5b66",
    padding: 20,
    display: "flex",
    flexDirection: "row",
  },
  col: { flex: 1 },
  sort: { display: "flex", flexDirection: "row" },
  textAlignRight: {
    textAlign: "right",
    justifyContent: "flex-end",
  },
});

export default Item;
