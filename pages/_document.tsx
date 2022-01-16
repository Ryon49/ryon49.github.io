import React from "react"
import Document, {
  Html, Head, Main, NextScript,
} from "next/document"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" data-mode="dark">
        <Head />
        <body data-spy="scroll" data-target="#toc">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
