import React from "react";
import { View, FlatList, ListRenderItemInfo } from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Layout,
  TopNav,
  Text,
  themeColor,
  useTheme,
  Button,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
// import { CoffeeHeader } from "../components/Header/Header";
import { SeparatorItem } from "../components/SeparatorItem/SeparatorItem";
import { Funcionario, funcList } from "../data/funcList";
import { RenderFunc } from "../components/RenderFunc";

export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "SecondScreen">) {
  const { isDarkmode, setTheme } = useTheme();

  function renderItem({ item }: ListRenderItemInfo<Funcionario>) {
    return <RenderFunc {...item} />;
  }
  return (
    <Layout>
      <TopNav
        middleContent="SoS Lar"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        leftAction={() => navigation.goBack()}
        rightContent={
          <Ionicons
            name={isDarkmode ? "sunny" : "moon"}
            size={20}
            color={isDarkmode ? themeColor.white100 : themeColor.dark}
          />
        }
        rightAction={() => {
          if (isDarkmode) {
            setTheme("light");
          } else {
            setTheme("dark");
          }
        }}
      />
      <View
        style={{
          flex: 1,
          
        }}
      >
        <FlatList
          ItemSeparatorComponent={SeparatorItem}
          data={funcList}
          keyExtractor={(item) => item.name}
          renderItem={renderItem}
        />
      </View>
    </Layout>
  );
}
