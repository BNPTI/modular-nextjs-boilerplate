import type { AppProps } from "next/app";
import { ThemeContextProvider } from "bnp-suit";

import { globalStyles } from "@/shared/styles/Global";
import { defaultLightTheme } from "@styles/Theme";
import { Layout } from "@/shared/components/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <ThemeContextProvider customizedLightTheme={defaultLightTheme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContextProvider>
  );
}
