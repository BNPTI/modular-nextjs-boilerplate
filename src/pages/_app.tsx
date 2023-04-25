import type { AppProps } from "next/app";

import { globalStyles } from "@/shared/styles/Global";

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return <Component {...pageProps} />;
}
