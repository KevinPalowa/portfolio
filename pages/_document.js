import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-[#4c566a]">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
