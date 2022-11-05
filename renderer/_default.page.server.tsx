import React from "react"
import { renderToStream } from "react-streaming/server"
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr"
import { PageLayout } from "./PageLayout"
import { PageContextServer } from "./types"

import { renderToStaticNodeStream, renderToString } from "react-dom/server"

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ["pageProps"]

export async function render(pageContext: PageContextServer) {
  const { Page, pageProps, userAgent } = pageContext
  const stream = await renderToStream(
    <PageLayout>
      <Page {...pageProps} />
    </PageLayout>,
    { userAgent }
  )

  let head: string | ReturnType<typeof renderToStaticNodeStream> = ""

  const maybeHeadFn = pageContext.exports.head
  if (typeof maybeHeadFn === "function") {
    // head = renderToStaticNodeStream(maybeHeadFn({ pageProps }))
    head = renderToString(maybeHeadFn({ pageProps }))
  }

  return escapeInject`<!DOCTYPE html>
    <html>
      <head>
      ${dangerouslySkipEscape(head)}
      </head>
      <body>
        <div id="page-view">${stream}</div>
      </body>
    </html>`
}
