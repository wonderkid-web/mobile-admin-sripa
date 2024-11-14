import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className, ...props }: Props) {
  return (
    <SafeAreaView className={`flex-1 container pt-12 relative ${className}`} {...props}>
      {children}
    </SafeAreaView>
  );
}
