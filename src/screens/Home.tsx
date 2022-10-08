import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Slider, Text, useTheme, VStack } from "native-base";
import { Button } from "../components/Button";

import CurrencyInput from "react-native-currency-input";
import { Alert } from "react-native";

export const Home = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  const [value, setValue] = useState(0);
  const [tip, setTip] = useState(10);
  const [amountPeople, setAmountPeople] = useState(2);

  const handleCalculate = () => {
    if (!value) {
      return Alert.alert("Calcular", "Preencha o valor da conta!");
    }

    const data = {
      value,
      tip,
      amountPeople,
    };

    navigation.navigate("details", data);
  };

  return (
    <VStack flex={1} bg={colors.gray[700]}>
      <VStack
        bg={colors.primary[700]}
        h="64"
        justifyContent="center"
        alignItems="center"
      >
        <Text color={colors.white} fontSize="xl">
          Valor total da conta
        </Text>

        <CurrencyInput
          value={value}
          onChangeValue={setValue}
          prefix="R$ "
          delimiter="."
          separator=","
          precision={2}
          style={{
            fontSize: 48,
            fontWeight: "700",
            color: colors.white,
            marginTop: 24,
          }}
        />
      </VStack>

      <VStack flex={1} p="4">
        <Text color={colors.white} fontSize="xl" mb="3">
          Gorjeta: {tip}%
        </Text>

        <Slider
          colorScheme="purple"
          size="lg"
          minValue={0}
          maxValue={100}
          accessibilityLabel="Valor da gorjeta"
          step={5}
          mb="5"
          value={tip}
          onChange={setTip}
        >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>

        <Text color={colors.white} fontSize="xl" mb="3">
          Quantidade de pessoas: {amountPeople}
        </Text>

        <Slider
          colorScheme="purple"
          size="lg"
          minValue={0}
          maxValue={100}
          accessibilityLabel="Quantidade de pessoas"
          step={1}
          value={amountPeople}
          onChange={setAmountPeople}
        >
          <Slider.Track>
            <Slider.FilledTrack />
          </Slider.Track>
          <Slider.Thumb />
        </Slider>
      </VStack>
      <Button title="Calcular" m="4" onPress={handleCalculate} />
    </VStack>
  );
};
