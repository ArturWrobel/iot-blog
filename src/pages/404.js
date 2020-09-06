import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout pageTitle="OOOOps, something went wrong...">
    <SEO title="404: Not found" />
    <Link className="btn btn-primary" to={"/"}>Go back to Home Page</Link>
  </Layout>
)

export default NotFoundPage
