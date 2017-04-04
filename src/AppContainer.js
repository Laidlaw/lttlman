import React, { PropTypes } from "react"

import "./index.global.css"
import "./highlight.global.css"

import Container from "./components/Container"
import DefaultHeadMeta from "./components/DefaultHeadMeta"
// import Header from "./components/Header"
import Header from './fragments/Header'
import Content from "./components/Content"
import Footer from "./fragments/Footer"

const AppContainer = (props) => (

    <Container>
      <DefaultHeadMeta />
      <Header />
      <Content>
        { props.children }
      </Content>
      <Footer />
    </Container>

)

AppContainer.propTypes = {
  children: PropTypes.node,
}

export default AppContainer
