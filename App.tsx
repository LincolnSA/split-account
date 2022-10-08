import React from "react";
import { NativeBaseProvider, StatusBar } from "native-base";

import { Router } from "./src/routes";

import { THEME } from "./src/styles/theme";

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Router />
    </NativeBaseProvider>
  );
}
