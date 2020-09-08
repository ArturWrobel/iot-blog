import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import authors from "../util/authors"
import { Card, CardBody, CardTitle, CardText, Button, Row } from "reactstrap"
import AnnaImage from "../images/anna.jpg"
import RobertImage from "../images/robert.jpg"
import JohnImage from "../images/bogdan.jpg"
import { slugify } from "../util/utilityFunctions"

const TeamPage = () => (
    <Layout pageTitle="Our Team">
        <SEO title="Our Team" />
        <Row className="mb-4">
            <div className="col-md-3">
                <img src={JohnImage} style={{ maxWidth: "100%" }} alt="John profile" />
            </div>
            <div className="col-md-8">
                <Card style={{ minHeight: "100%"}}>
                    <CardBody>
                        <CardTitle>
                            {authors[0].name}
                        </CardTitle>
                        <CardText>
                            {authors[0].bio}
                        </CardText>
                        <Button className="text-uppercase" color="primary" href = {`/author/${slugify(authors[0].name) }`}>
                            View posts
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </Row>
        <Row className="mb-4">
            <div className="col-md-3">
                <img src={AnnaImage} style={{ maxWidth: "100%" }} alt="Anna profile" />
            </div>
            <div className="col-md-8">
                <Card style={{ minHeight: "100%"}}>
                    <CardBody>
                        <CardTitle>
                            {authors[1].name}
                        </CardTitle>
                        <CardText>
                            {authors[1].bio}
                        </CardText>
                        <Button className="text-uppercase" color="primary" href = {`/author/${slugify(authors[1].name) }`}>
                            View posts
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </Row>
        <Row className="mb-4">
            <div className="col-md-3">
                <img src={RobertImage} style={{ maxWidth: "100%" }} alt="Robert profile" />
            </div>
            <div className="col-md-8">
                <Card style={{ minHeight: "100%"}}>
                    <CardBody>
                        <CardTitle>
                            {authors[2].name}
                        </CardTitle>
                        <CardText>
                            {authors[2].bio}
                        </CardText>
                        <Button className="text-uppercase" color="primary" href = {`/author/${slugify(authors[2].name) }`}>
                            View posts
                        </Button>
                    </CardBody>
                </Card>
            </div>
        </Row>
    </Layout>
)

export default TeamPage
