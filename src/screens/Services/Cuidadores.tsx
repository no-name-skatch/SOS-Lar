import React from "react";
import { FlatList, ListRenderItemInfo, View } from "react-native";
import { ServicesPagesParamList } from "../../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  Layout,
  Button,
  Text,
  TopNav,
  Section,
  SectionContent,
  useTheme,
  themeColor,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import { RenderFunc } from "../../components/RenderFunc";
import { cuidadores, Funcionario } from "../../data/funcList";
import { SeparatorItem } from "../../components/SeparatorItem/SeparatorItem";

export default function ({
  navigation,
}: NativeStackScreenProps<ServicesPagesParamList, "Cuidadores">) {

  const { isDarkmode, setTheme } = useTheme();
  
  function renderItem({ item }: ListRenderItemInfo<Funcionario>) {
    return <RenderFunc {...item} />;
  }

  return (
    <Layout>
      <TopNav
        middleContent="Cuidadores"
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
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FlatList
          ItemSeparatorComponent={SeparatorItem}
          data={cuidadores}
          keyExtractor={(item) => item.name}
          renderItem={renderItem}
        />
      </View>
    </Layout>
  );
}
