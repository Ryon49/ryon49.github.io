// css and js imports
import React from "react"

import Head from "next/head"
import Script from "next/script"

function Meta() {
  return (
    <Head>
      {/* Start Porting */}

      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

      {/* Google analytics */}
      {process.env.NODE_ENV === "production" && (
      <>
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="use-credentials" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* TODO: Google Page View
          {% if site.google_analytics.pv.proxy_endpoint %}
          {% assign proxy_url = site.google_analytics.pv.proxy_endpoint
            | replace: "https://", "" | split: "/" | first | prepend: "https://" %}

          <link rel="preconnect" href="{{ proxy_url }}" crossorigin="use-credentials">
          <link rel="dns-prefetch" href="{{ proxy_url }}">
        {% endif %}
        */}
      </>
      )}

      {/* jsDelivr CDN */}
      <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />

      {/* Bootstrap */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" />

      {/* Font Awesome */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.11.2/css/all.min.css" />

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/styles/base16/3024.min.css" />

      <Script src="https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js" />

    </Head>
  )
}

export default Meta
