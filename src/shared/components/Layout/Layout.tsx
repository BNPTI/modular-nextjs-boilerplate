import { ReactNode } from "react";

import { Header } from "../Header/Header";
import { NavMenu } from "../NavMenu/NavMenu";

import {
  StyledLayoutHeader,
  StyledLayoutMain,
  StyledLayoutWrapper,
} from "./Layout.styles";

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledLayoutWrapper>
      <StyledLayoutHeader>
        <Header />
        <NavMenu />
      </StyledLayoutHeader>
      <StyledLayoutMain>{children}</StyledLayoutMain>
    </StyledLayoutWrapper>
  );
};
