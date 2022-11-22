import React from "react";
import { View, Linking } from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { supabase } from "../initSupabase";
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

export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "MainTabs">) {

  const { isDarkmode, setTheme } = useTheme();

  return (
    <Layout>
      <TopNav
        middleContent="Home"
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
        <Section style={{ marginTop: 20 }}>
          <SectionContent>
            <Text fontWeight="bold" style={{ textAlign: "center" }}>
              Serviços
            </Text>
            <Button
              text="Pedreiros"
              onPress={() => {
                navigation.navigate("SecondScreen");
              }}
              style={{
                marginTop: 10,
              }}
            />
            <Button
              style={{ marginTop: 10 }}
              text="Designers"
              status="info"
              
            />
            <Button
              style={{ marginTop: 10 }}
              text="Pintores"
              status="info"
              
            />
            <Button
              style={{ marginTop: 10 }}
              text="Cuidadores"
              status="info"
              
            />
            <Button
              style={{ marginTop: 10 }}
              text="Eletricistas"
              status="info"
              
            />
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
}
