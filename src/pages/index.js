import { Link } from 'gatsby';
import React from 'react'
import Layout from '../../components/layout';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

/* It's important make this way because otherwise it will not working */
export default IndexPage;