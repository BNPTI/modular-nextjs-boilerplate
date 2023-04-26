import type { AppProps } from "next/app";
import { ThemeContextProvider } from "bnp-suit";

<<<<<<< HEAD
import { globalStyles } from "@/shared/styles/Global";
import { defaultLightTheme } from "@styles/Theme";
import { Layout } from "@/shared/components/Layout/Layout";
=======
import { globalStyles } from "@styles/Global";
>>>>>>> parent of d4cb5a5 (feat(Project): Update structure)

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
