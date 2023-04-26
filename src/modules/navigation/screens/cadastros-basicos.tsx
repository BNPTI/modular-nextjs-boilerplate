import { routes } from "@/shared/contants/routes.constant";
import PeriodsRegisterSVG from "@assets/periodos_novo.svg";
import PeriodsRelateSVG from "@assets/periodos_relacionar.svg";

import { Navigation } from "../components/Navigation/Navigation";
import { NavigationItem } from "../components/NavigationItem/NavigationItem";

export const BasicRegistersScreen = () => {
  return (
    <Navigation>
      <NavigationItem
        href={routes.periodos_novo}
        icon={<PeriodsRegisterSVG />}
        title="Definir Períodos"
      />
      <NavigationItem
        href={routes.periodos_relacionar}
        icon={<PeriodsRelateSVG />}
        title="Relacionar Períodos"
      />
    </Navigation>
  );
};
