import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className, ...props }: Props) {
  return (
    <SafeAreaView className={`container p-8 pt-12  ${className}`} {...props}>
      {children}
    </SafeAreaView>
  );
}
