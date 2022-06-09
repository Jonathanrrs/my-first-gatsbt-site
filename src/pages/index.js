import { Link } from 'gatsby';
import React from 'react'

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Welcome to my Gatsby site!</h1>
      <Link to='/about'>About</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  )
}

/* It's important make this way because otherwise it will not working */
export default IndexPage;