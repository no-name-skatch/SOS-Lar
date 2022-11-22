import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Funcionario } from "../data/funcList";

export function RenderFunc({ name,image, description, atuationArea, contact }: Funcionario) {
  return (
    <View style={styles.container}>
      <Image style={{ width: 120, height: 100 }} source={image} />
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <Text numberOfLines={5} style={styles.description}>
          {description}
        </Text>
        <Text style={styles.title}>{atuationArea}</Text>
        <Text style={styles.title}>{contact}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },

  content: {
    flex: 1,
    marginLeft: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6F4E37",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: "#000",
  },
});
