import { hydrateRoot } from "react-dom/client"

import { PageLayout } from "./PageLayout"

export { render }

async function render(pageContext) {
  const { Page, pageProps } = pageContext
  hydrateRoot(
    document.getElementById("app")!,
    <PageLayout>
      <Page {...pageProps} />
    </PageLayout>,
  )
}
