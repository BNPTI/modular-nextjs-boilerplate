import { styled } from "@/shared/config/stitches.config";

export const StyledNavigationContainer = styled("div", {
  display: "grid",
  gridTemplate: "repeat(4, 198px) / repeat(auto-fit, minmax(198px, 198px))",
  width: "100%",
  gap: "$3",

  flex: 1,
});
