import { View, ViewProps } from "react-native";

interface SpacerProps extends ViewProps {
  size: "small" | "medium" | "large" | number;
}

const PT_SIZES = {
  small: 7,
  medium: 9,
  large: 12,
};

export const Spacer = ({ size, style, ...rest }: SpacerProps) => {
  return (
    <View
      style={[
        {
          margin: typeof size === "number" ? size : PT_SIZES[size],
        },
        style,
      ]}
      {...rest}
    />
  );
};
