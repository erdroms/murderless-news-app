import { Text as RNText, TextProps as RNTextProps } from "react-native";

interface TextProps extends RNTextProps {
  size?: "small" | "medium" | "large";
}

const PT_SIZES = {
  small: 14,
  medium: 18,
  large: 24,
};

export const Text = ({ size = "medium", style, ...rest }: TextProps) => {
  return <RNText style={[{ fontSize: PT_SIZES[size] }, style]} {...rest} />;
};

export const B = ({ style, ...rest }: TextProps) => {
  return <Text style={[{ fontWeight: "bold" }, style]} {...rest} />;
};
