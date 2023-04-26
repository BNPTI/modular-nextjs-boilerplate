import { ReactNode } from "react";

import { StyledNavigationItemContainer } from "./Navigation.styles";

type NavigationItemProps = {
  icon: ReactNode;
  title: string;
  href: string;
};

export const NavigationItem = ({ icon, title, href }: NavigationItemProps) => {
  return (
    <StyledNavigationItemContainer href={href}>
      {icon}
      <span>{title}</span>
    </StyledNavigationItemContainer>
  );
};
