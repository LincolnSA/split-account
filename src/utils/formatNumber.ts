import { formatNumber as currencyInputFormatNumber } from "react-native-currency-input";

export const formatNumber = (value: number) => {
  return currencyInputFormatNumber(value, {
    separator: ",",
    prefix: "R$ ",
    precision: 2,
    delimiter: ".",
    signPosition: "beforePrefix",
  });
};
