import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from "../components/layout";

const BlogPage = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle="My Blog Posts">
      {/* before */}
      {/* <ul>
        {data.allFile.nodes.map((blog, i) => (
          <li key={i}>{blog.name}</li>
        ))}
      </ul> */}
      {/* whit mdx */}
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.date}</p>
          <MDXRenderer>
            {node.body}
          </MDXRenderer>
        </article>
      ))}
    </Layout>
  );
};

/* in the page is slightly different compared to components */

/* before */
// export const query = graphql`
//   query {
//     allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
//       nodes {
//         name
//       }
//     }
//   }
// `;

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`;

export default BlogPage;
