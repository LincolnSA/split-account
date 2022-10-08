import { useNavigation } from "@react-navigation/native";
import { Heading, StatusBar, useTheme, VStack } from "native-base";
import { Button } from "../components/Button";

import Logo from "../assets/logo.svg";

export const Wellcome = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const navigateForHome = () => {
    navigation.navigate("home");
  };

  return (
    <VStack flex={1} p={4}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <VStack
        flex={1}
        justifyContent="center"
        alignItems="center"
        color={colors.primary[700]}
      >
        <Heading
          color={colors.primary[700]}
          fontSize="5xl"
          mb={6}
          textAlign="center"
        >
          Dividindo{`\n`}a conta
        </Heading>

        <Logo width={250} height={250} />
      </VStack>

      <Button title="Iniciar" onPress={navigateForHome} />
    </VStack>
  );
};
