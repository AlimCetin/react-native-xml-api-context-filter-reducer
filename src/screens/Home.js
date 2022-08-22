import { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
const { XMLParser } = require("fast-xml-parser");

import Filter from "../components/Filter";
import FlatlistItem from "../components/FlatlistItem";
import { useFilterContext } from "../context/FilterContext";

export default function App() {
  const [data, setdata] = useState([]);
  const [filteredData, setfilteredData] = useState([]);

  const filterContext = useFilterContext();

  const getList = async () => {
    await fetch("https://www.tcmb.gov.tr/kurlar/today.xml")
      .then((response) => response.text())
      .then((textResponse) => {
        const parser = new XMLParser();
        let jObj = parser.parse(textResponse);
        setdata(jObj?.Tarih_Date?.Currency || []);
        setfilteredData(jObj?.Tarih_Date?.Currency || []);
        //  gelen Datanın İçerigi
        // BanknoteBuying: 12.4786
        // BanknoteSelling: 12.6938
        // CrossRateOther: ""
        // CrossRateUSD: 1.4278
        // CurrencyName: "AUSTRALIAN DOLLAR"
        // ForexBuying: 12.5363
        // ForexSelling: 12.618
        // Isim: "AVUSTRALYA DOLARI"
        // Unit: 1
      })
      .catch((error) => {
        console.log(error);
        setdata([]);
        setfilteredData([]);
      });
  };

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    let tempFilterData = data
      .filter((item) =>
        item.CurrencyName.toLowerCase().includes(
          filterContext.state.currency.toLowerCase()
        )
      )
      .sort((a, b) =>
        filterContext.state.sortType == "asc"
          ? a.ForexBuying - b.ForexBuying
          : b.ForexBuying - a.ForexBuying
      );
    setfilteredData(tempFilterData);
  }, [filterContext.state.currency, filterContext.state.sortType]);

  return (
    <View style={styles.container}>
      <Filter />
      <FlatList
        data={filteredData}
        renderItem={({ item }) => <FlatlistItem {...item} />}
        keyExtractor={(item) => item.CurrencyName}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
