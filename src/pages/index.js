import React from "react"
import { Row } from 'reactstrap';
import Layout from "../components/layout"
import SEO from '../components/seo'
import PortfolioSideBar from "../components/PortfolioSideBar";
import SkillsSideBar from "../components/SkillsSideBar";
import MainPainal from "../components/MainPainal";

export default () => {
    return (
        <Layout>
            <SEO title="Home" keywords={[`Sanjay Panda`, `Fullstack developer`, `react`, `node`]} />
            <Row className="flex-xl-nowrap no-gutters" >
                <PortfolioSideBar />
                <MainPainal />
                <SkillsSideBar />
            </Row>
        </Layout>
    )
}