import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <link rel="icon" type="image/svg+xml" href="/favicon.png" />
        <body className="bg-light-primary dark:bg-dark-primary text-dark-primary dark:text-dark-text transition max-w-3xl container p-5 md:p-0">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
