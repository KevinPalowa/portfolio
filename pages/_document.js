import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-[#d8dee9] dark:bg-[#2e3440] text-[#2e3440] dark:text-[#d8dee9] transition">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
