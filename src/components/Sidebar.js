import React from 'react'
import { Card, CardTitle, CardBody, CardText, Form, FormGroup, Input } from 'reactstrap'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'

export default function Sidebar({ author, authorFluid }) {
    return (
        <div>
            {author && (
                <Card>
                    <Img  className="card-image-top" fluid={authorFluid}/>
                    <CardBody>
                        <CardTitle className="text_center text-uppercase mb-3">{author.name}</CardTitle>
                        <CardText>
                            {author.bio}
                        </CardText>
                        <div className="author-social-links text-center">
                            <ul>
                                <li>
                                    <a href= {author.facebook} target="_blank" rel="noopener noreferrer" className="facebook">
                                        <i className="fab fa-facebook fa-lg"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href= {author.google} target="_blank" rel="noopener noreferrer" className="google">
                                        <i className="fab fa-google fa-lg"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href= {author.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin">
                                        <i className="fab fa-linkedin fa-lg"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </CardBody>
                </Card>
            )}
            <Card>
                <CardBody>
                    <CardTitle className="text-center text-uppercase mb-3">
                        Newsletter
                    </CardTitle>
                    <Form className="text-center">
                        <FormGroup>
                            <Input type="email" name="email" placeholder="Your Email address" />
                        </FormGroup>
                        <button className="btn btn-outline-success text--uppercase">
                            Subscribe
                        </button>
                    </Form>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle className="text-center text-uppercase">
                        Advertisement
                    </CardTitle>
                    <img src="https://via.placeholder.com/320x300"
                        alt="Advert"
                        style={{ width: "100%" }} />
                </CardBody>

            </Card>
            <Card>
                <CardBody>
                    <CardTitle className="text-center text-uppercase mb-3">
                        Recent Posts
                    </CardTitle>
                    <StaticQuery query={sidebarQuery} render={(data) => (
                        <div className="">
                            {data.allMarkdownRemark.edges.map(({ node }) => (
                                <Card key={node.id}>
                                    <Link to={`/${node.fields.slug}/`}>
                                        <Img className="card-image-top" fluid={node.frontmatter.image.childImageSharp.fluid} />
                                    </Link>
                                    <CardBody>
                                        <CardTitle>
                                            <Link to={`/${node.fields.slug}/`}>
                                                {node.frontmatter.title}
                                            </Link>
                                        </CardTitle>
                                    </CardBody>
                                </Card>
                            ))}
                        </div>
                    )} />
                </CardBody>
            </Card>
        </div>
    )
}

const sidebarQuery = graphql`
query sidebarQuery {
    allMarkdownRemark(
        sort: {fields: [frontmatter___date], order: DESC}
    limit:3  
    )
    {edges {
        node{
            id
            frontmatter {
                title
                image
                    {childImageSharp
                        {fluid (maxWidth: 300){
                    ...GatsbyImageSharpFluid}
                }}
            }
            fields{
                slug
            }
        }
    }
    }
}
`