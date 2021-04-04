import React from "react"
import { graphql } from "gatsby"
import { Col, Row } from "reactstrap"
import Layout from "../components/layout"
import PortfolioSideBar from "../components/PortfolioSideBar"
import SkillsSideBar from "../components/SkillsSideBar"
import PostLists from "../components/ListPosts"

const PageListPost = props => {
  const { pageContext, data } = props
  const regex = RegExp(pageContext.regex)
  console.log(regex)
  const postLists = data.allMdx.nodes.filter(d => regex.test(d.fields.slug))
  console.log(postLists, data.allMdx.nodes)
  return (
    <Layout>
      <Row className="flex-xl-nowrap no-gutters">
        <PortfolioSideBar />
        <Col
          sm="9"
          md="9"
          xl="8"
          className="ml-md-auto ml-sm-auto mr-sm-auto ml-xl-auto mr-xl-auto order-1 order-sm-1 p-4"
        >
          <h1 className="mb-5">MY {pageContext.pageName.toUpperCase()}</h1>
          <PostLists postLists={postLists} />
        </Col>
        <SkillsSideBar />
      </Row>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          tags
          readtime
          subtitle
          auther
          title
        }
        fields {
          slug
        }
        headings {
          value
        }
        id
      }
    }
  }
`
export default PageListPost