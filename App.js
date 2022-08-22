// Ali ÇETİN 17.08.2022

import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import Home from "./src/screens/Home";
import FilterContextProvider from "./src/context/FilterContext";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FilterContextProvider>
        <Home />
      </FilterContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
