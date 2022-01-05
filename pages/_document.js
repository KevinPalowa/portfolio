import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-[#434c5e] text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
