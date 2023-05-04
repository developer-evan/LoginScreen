import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <ScrollView>
      <View>
        <View>
          <Image source={require("./assets/logo.png")}></Image>
          <Text>Login Page</Text>
        </View>
        <View>
          <TouchableOpacity>
            <View>
              <Image source={require("./assets/logo.png")}></Image>
              <Text>Login Page</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <Image source={require("./assets/logo.png")}></Image>
              <Text>Login Page</Text>
            </View>
            <Button
  onPress={onPressLearnMore}
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  auto: {
    backgroundColor: "blue",
  },
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  body: {
    flex: 2,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: 413,
  },
  body2: {
    flex: 3,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: 413,
  },
});
