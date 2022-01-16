import React from "react"
import { AppProps } from "next/app"
import Layout from "../components/layout"
import "../styles/jekyll-theme-chirpy.scss"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
