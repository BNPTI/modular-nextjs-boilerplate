import { ReactNode } from "react";

import { StyledNavigationContainer } from "./Navigation.styles";

type NavigationProps = {
  children: ReactNode;
};

export const Navigation = ({ children }: NavigationProps) => {
  return <StyledNavigationContainer>{children}</StyledNavigationContainer>;
};
