import { TextStyle } from "@/assets/style";
import { Text } from "react-native";

type CustomTextProp = {
  style:
    | "extraLarge"
    | "large"
    | "medium"
    | "small"
    | "paragraph"
    | "extraMediumBold"
    | "arab";
  color?: "primary" | "secondary" | "white";
  text: string;
  className?: string;
};

export default function CustomText({
  style,
  color = "primary",
  className,
  text,
  ...props
}: CustomTextProp) {
  return (
    <Text className={`text-${color} ${className}`} style={TextStyle[style]} {...props}>
      {text}
    </Text>
  );
}
