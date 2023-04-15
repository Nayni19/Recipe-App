import { Pressable } from "react-native";
import { View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const ButtonIcon = ({ name, size, color, onPress }) => {
  return (
    <View>
      <Pressable
        style={({ pressed }) => pressed && { opacity: 0.5 }}
        onPress={onPress}
      >
        <Ionicons name={name} size={size} color={color} />
      </Pressable>
    </View>
  );
};

export default ButtonIcon;
