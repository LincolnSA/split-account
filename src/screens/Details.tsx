import { Text, VStack, useTheme } from "native-base";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Button } from "../components/Button";
import { formatNumber } from "../utils/formatNumber";

interface IRouteParams {
  value: number;
  tip: number;
  amountPeople: number;
}

export const Details = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const route = useRoute();

  const { value, tip, amountPeople } = route.params as IRouteParams;
  const totalWithTip = value + value * (tip / 100);
  const totalPerPerson = totalWithTip / amountPeople;

  const naviagteForGoBack = () => {
    navigation.goBack();
  };

  return (
    <VStack flex={1} bg={colors.gray[700]}>
      <VStack
        h="64"
        bg={colors.primary[700]}
        justifyContent="center"
        alignItems="center"
      >
        <Text color={colors.white} fontSize="xl">
          Total por pessoa
        </Text>

        <Text color={colors.white} fontSize="5xl" fontWeight="bold" mt={4}>
          {formatNumber(totalPerPerson)}
        </Text>
      </VStack>

      <Text
        color={colors.white}
        fontSize="xl"
        p="4"
        flex={1}
        textAlign="center"
      >
        Total da conta: {formatNumber(value)} {"\n"}
        Com gorjeta de {tip}%: {formatNumber(totalWithTip)} {"\n"}
        Dividido para: {amountPeople} pessoas
      </Text>

      <Button title="Recalcular" m="4" onPress={naviagteForGoBack} />
    </VStack>
  );
};
