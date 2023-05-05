import { StatusBar } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
  
} from "react-native";
import InputText from "./components/InputText";
// import InputField from "./components/InputField";

const image = { uri: "https://reactjs.org/logo-og.png" };
export default function App() {
  return (
    <ScrollView style={styles.container}>
       
      <View>
        {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground> */}

        {/* <Text>Login Screen</Text> */}
        {/* <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#00BCD4"
          translucent={true}
        /> */}
       
        <View
          style={{
            marginTop: 60,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("./assets/logo.png")}
            style={{ width: 100, height: 100 }}
          />
          <Text
            style={[
              styles.text,
              { marginTop: 30, fontWeight: "700", fontSize: 22 },
            ]}
          >
            Login Screen
          </Text>
        </View>
        <View
          style={{
            marginTop: 48,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity>
            <View style={styles.socialButton}>
              <Image
                source={require("./assets/facebook.png")}
                style={styles.socialLogo}
              />
              <Text style={styles.text}>Facebook</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.socialButton}>
              <Image
                source={require("./assets/google.png")}
                style={styles.socialLogo}
              />
              <Text style={styles.text}>Google</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={[
              styles.text,
              {
                color: "#abb4bd",
                fontSize: 15,
                textAlign: "center",
                marginVertical: 20,
              },
            ]}
          >
            or
            {/* <View tyle={{ padding: 20 }}> */}
            <View>
      {/* <InputText title="Name" /> */}
      {/* <InputText title="Email" /> */}
      <InputText/>
    </View>
          </Text>
          {/* <InputField title="Email" />
          <InputField
            style={{ margiTop: 20, marginBottom: 8 }}
            title="Password"
            isSecure={true}
          /> */}
          {/* 
          <TextInput
            placeholder="INPUT WITH ERROR MESSAGE"
            // errorStyle={{ color: 'red' }}
            // errorMessage='ENTER A VALID ERROR HERE'
          />

          <TextInput placeholder="Password" secureTextEntry={true} /> */}
          {/* <TextInput
        style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
        // onChangeText={setText}
        value={text}
      /> */}

          <Text style={[styles.text, styles.link, { textAlign: "right" }]}>
            Forgot Password
          </Text>

          <TouchableOpacity style={styles.submitContainer}>
            <Text
              style={[
                styles.text,
                { color: "#fff", fontWeight: "600", fontSize: 16 },
              ]}
            >
              Login
            </Text>
          </TouchableOpacity>

          <Text
            style={[
              styles.text,
              {
                fontSize: 14,
                color: "#ABB4BD",
                textAlign: "center",
                margiTop: 24,
              },
            ]}
          >
            Dont Have account{" "}
            <Text style={[styles.text, styles.link]}>Register Here.</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
  },
  // image: {
  //   flex: 1,
  //   justifyContent: "center",
  // },
  text: {
    fontFamily: "Avenir Next",
    color: "#1d2029",
  },
  socialButton: {
    flexDirection: "row",
    marginHorizontal: 12,
    paddingVertical: 12,
    paddingHorizontal: 48,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgb(171,180,189,0.65)",
    borderRadius: 4,
    backgroundColor: "#fff",
    shadowColor: "rgb(171,180,189,0.35)",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
  },
  socialLogo: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  link: {
    fontSize: 14,
    fontWeight: "500",
    color: "#ff1564",
  },
  submitContainer: {
    backgroundColor: "#ff1564",
    fontSize: 16,
    borderRadius: 4,
    paddingVertical: 12,
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgb(255,22,84,0.24)",
    shadowOffset: { width: 0, height: 9 },
    shadowOpacity: 1,
  },
});
