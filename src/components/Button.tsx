import {
  Pressable,
  PressableProps,
  StyleSheet,
  TextStyle,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text } from "./Text";
import { Spacer } from "./Spacer";

const DEFAULT_ICON_SIZE = 24;

interface IconProps {
  size?: number;
  color?: string;
  name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  style?: TextStyle;
}

interface ButtonProps extends PressableProps {
  text: string;
  icon?: {
    leftIcon?: IconProps;
    rightIcon?: IconProps;
  };
  color?: string;
}

export const Button = ({ text, icon, color, ...rest }: ButtonProps) => {
  return (
    <Pressable {...rest} style={[styles.container, { backgroundColor: color }]}>
      {icon.leftIcon && (
        <>
          <ButtonIcon icon={icon.leftIcon} />
          <Spacer size="small" />
        </>
      )}
      <Text style={styles.text}>{text}</Text>
      {icon.rightIcon && (
        <>
          <Spacer size="small" />
          <ButtonIcon icon={icon.rightIcon} />
        </>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
  },
  text: {
    fontSize: 24,
  },
});

interface ButtonIconProps {
  icon: IconProps;
}

const ButtonIcon = ({ icon }: ButtonIconProps) => (
  <View style={icon.style}>
    <MaterialCommunityIcons
      name={icon.name}
      size={icon.size || DEFAULT_ICON_SIZE}
      color={icon.color}
    />
  </View>
);
