import { Stack } from "expo-router";
import "../global.css";
import { Provider } from "react-redux";
import store from "../store";


export default function RootLayout() {
  return (
    <Provider store={store} >
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="resto" />
        <Stack.Screen name="basket" options={{ presentation: "modal", headerShown: false }}/>
      </Stack>
    </Provider>
  );
}
