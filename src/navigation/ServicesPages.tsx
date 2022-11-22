import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Designers from "../screens/Services/Designers";
import Eletricista from "../screens/Services/Eletricista";
import Cuidadores from "../screens/Services/Cuidadores";
import Pintores from "../screens/Services/Pintores";

const Services = createNativeStackNavigator();
const Serv = () => {
  return (
    <Services.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Services.Screen name="Eletricista" component={Eletricista} />
      <Services.Screen name="Designers" component={Designers} />
      <Services.Screen name="Cuidadores" component={Cuidadores} />
      <Services.Screen name="Pintores" component={Pintores} />
    </Services.Navigator>
  );
};

export default Serv;
