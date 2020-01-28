import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="AndroidChef - For Android Developers" />
    <Link to="/kotlin-interview-questions">Kotlin Interview Questions</Link>
  </Layout>
)

export default IndexPage
