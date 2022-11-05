import { Counter } from "./Counter"

export function head() {
  return (
    <>
      <title>WelcomePage</title>
      <meta name="title" content="hello" />
      <meta name="description" content="hellohellohellohello" />
      <meta name="keywords" content="hello,hello2,hello3" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Japanese" />
    </>
  )
}

export function Page() {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  )
}
