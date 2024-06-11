import { StyleSheet, View } from "react-native";
import { Spacer } from "../src/components/Spacer";
import Stabby from "../src/components/Stabby";
import { B, Text } from "../src/components/Text";

const Header = () => {
  return (
    <View style={styles.header}>
      <Stabby />
      <Spacer size="small" />
      <Text size="large">
        <B>Murderless News</B>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Header;
