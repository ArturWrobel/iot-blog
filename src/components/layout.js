import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
import "../styles/index.scss"
import { Row, Col } from "reactstrap"

const Layout = ({ authorImageFluid, children, pageTitle, postAuthor }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" 
    integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" 
    crossOrigin="anonymous"></link>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container" id="content">
        <h1>{pageTitle}</h1>
        <Row>
          <Col md="8">
            {children}
          </Col>
          <Col md="4">
            <Sidebar author = {postAuthor}  authorFluid = {authorImageFluid}/>
          </Col>
        </Row>
        <Footer/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
