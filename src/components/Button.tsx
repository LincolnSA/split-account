import {
  Button as NavitveBaseButton,
  IButtonProps,
  Heading,
  useTheme,
} from "native-base";

interface IProps extends IButtonProps {
  title: string;
}

export const Button = ({ title, ...rest }: IProps) => {
  const { colors } = useTheme();
  return (
    <NavitveBaseButton
      bg={colors.primary[700]}
      rounded="sm"
      _pressed={{ bg: colors.primary[800] }}
      {...rest}
    >
      <Heading color="white">{title}</Heading>
    </NavitveBaseButton>
  );
};
