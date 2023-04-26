import { styled } from "@config/stitches.config";

export const StyledLayoutWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  minWidth: "100%",
  minHeight: "100vh",
});

export const StyledLayoutHeader = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  minHeight: "80px",
});

export const StyledLayoutMain = styled("main", {
  display: "flex",
  flexDirection: "column",
  flex: 1,
  width: "95%",
  maxWidth: "1080px",
  margin: "auto",
  padding: "$5 0",
});
