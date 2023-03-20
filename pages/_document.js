import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='es'>
      <Head />
        <link href="https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=El+Messiri:regular,500,600,700" rel="stylesheet" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <title>Kruge</title>
      <body>
        <Main />
        <div id="modal"></div>
        <NextScript />
      </body>
    </Html>
  )
}