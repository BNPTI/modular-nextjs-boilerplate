import BasicRegistersSVG from "@assets/cadastros_basicos.svg";

import { Navigation } from "../components/Navigation/Navigation";
import { NavigationItem } from "../components/NavigationItem/NavigationItem";

export const HomeScreen = () => {
  return (
    <Navigation>
      <NavigationItem
        href="/home/cadastros-basicos"
        icon={<BasicRegistersSVG />}
        title="Cadastros básicos"
      />
    </Navigation>
  );
};
