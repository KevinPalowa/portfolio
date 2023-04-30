import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/codeHighlighting.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
