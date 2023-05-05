import React, { useState } from "react";
import { View, TextInput, Text } from "react-native";

// const InputText = ({ title }) => {
//   const [text, setText] = useState('');
function InputText() {
  // }

  return (
    <View>
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
        {/* {title} */}
        Email
      </Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "black",
          padding: 10,
          width: 350,
        }}
        // onChangeText={setText}
        // value={text}
      />
      <Text style={{ fontSize: 16, fontWeight: "bold" }}>
        {/* {title} */}
        Password
      </Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "black",
          padding: 10,
          width: 350,
        }}
        secureTextEntry={true}
        // onChangeText={setText}
        // value={password}
      />
    </View>
  );
}

export default InputText;
