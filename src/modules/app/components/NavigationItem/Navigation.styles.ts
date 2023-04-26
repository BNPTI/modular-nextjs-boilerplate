import { styled } from "@config/stitches.config";
import Link from "next/link";

export const StyledNavigationItemContainer = styled(Link, {
  all: "unset",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  background: "$primary-900",
  borderRadius: "$sm",
  textDecoration: "none",

  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "$2",
  transition: "all $default",

  "& span": {
    color: "$white",
    fontFamily: "$heading",
    fontSize: "$lg",
  },

  "& svg": {
    width: "50%",
    height: "50%",
  },

  "&:hover": {
    background: "$primary-hover",
    cursor: "pointer",
  },
});
