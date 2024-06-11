import { View, StyleSheet } from "react-native";
import { Spacer } from "../src/components/Spacer";
import { Text, B } from "../src/components/Text";
import { SEE_NO_EVIL } from "../src/constants";
import { Button } from "../src/components/Button";

const Home = () => (
  <View>
    <Spacer size="medium" />
    <View>
      <Text style={styles.center}>
        We've filtered out some bad news for you{" "}
        <Text style={styles.icon}>{SEE_NO_EVIL}</Text>.
      </Text>
      <Spacer size="small" />
      <Text style={styles.center}>
        If you{" "}
        <Text style={styles.italic}>
          <Text style={styles.bold}>would</Text>
        </Text>{" "}
        like to see any of these bad news categories, simply press the
        associated button (and beware)!
      </Text>
    </View>
    <Spacer size="medium" />
    <View style={styles.buttonContainer}>
      <Button
        icon={{
          leftIcon: { name: "eye-off" },
          rightIcon: {
            name: "knife",
            color: "red",
            style: {
              backgroundColor: "#e5e7eb",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 0.1,
              padding: 12,
              borderRadius: 50,
            },
          },
        }}
        text="Murder & Mayhem"
        color="#e5e7eb"
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  italic: {
    fontStyle: "italic",
  },
  bold: {
    fontWeight: "bold",
  },
  icon: {
    fontSize: 20,
  },
  center: {
    textAlign: "center",
  },
  buttonContainer: {
    alignItems: "center",
  },
});

export default Home;
