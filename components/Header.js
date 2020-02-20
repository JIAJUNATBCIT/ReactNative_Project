import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = () => (
 <View style={{ flexDirection: "row" }}>
   <Text style={[styles.header, { color: "#E64C3C" }]}>I</Text>
   <Text style={[styles.header, { color: "#E57E31" }]}>G</Text>
   <Text style={[styles.header, { color: "#F1C431" }]}>a</Text>
   <Text style={[styles.header, { color: "#68CC73" }]}>m</Text>
   <Text style={[styles.header, { color: "#3998DB" }]}>e</Text>
   <Text style={styles.header}>Demo</Text>
 </View>
);

const styles = StyleSheet.create({
 header: {
   fontSize: 50,
   color: "#ecf0f1",
   fontFamily: "dogbyte"
 }
});

export { Header };