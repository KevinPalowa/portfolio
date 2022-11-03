import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-[#d8dee9] dark:bg-[#2e3440] text-[#2e3440] dark:text-[#d8dee9] transition max-w-3xl container p-5 md:p-0">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
