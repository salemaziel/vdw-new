import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '@/components/Layout'
import DefaultHead from '../components/Head/DefaultHead'

const Post = ({ data }) => {
  return (
    <Layout nav={true}>
      <section className="container px-4 py-24 mx-auto">
        <h1 className="max-w-3xl mx-auto my-12 text-5xl font-bold text-center md:text-6xl dark:text-white">
          {data.post.frontmatter.title}
        </h1>
        <div
          className="max-w-3xl px-2 mx-auto prose prose-lg dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: data?.post.html }}
        ></div>
      </section>
    </Layout>
  )
}

Post.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const Head = ({ data }) => (
  <DefaultHead data={data.post.frontmatter.seo}>
    {/* Additonal values here */}
    <meta id="oty" property="og:type" content="article" />
  </DefaultHead>
)

export default Post

export const basicPageQuery = graphql`
  query PostQuery($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        id
        title
        author
        ...Seo
      }
    }
  }
`
