import "./index.css"

export function head() {
  return (
    <>
      <title>About</title>
      <meta name="title" content="hello" />
      <meta name="description" content="hellohellohellohello" />
      <meta name="keywords" content="hello,hello2,hello3" />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Japanese" />
    </>
  )
}

export function Page() {
  return (
    <>
      <h1>About</h1>
      <p>A colored page.</p>
    </>
  )
}
