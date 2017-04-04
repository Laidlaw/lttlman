import React, { PropTypes } from "react"
// import {Card} from "rebass"
import Section from "../Part"
import PagePreview from "../PagePreview"
import styled from 'styled-components'
import styles from "./index.css"


const Div = styled.div`
  padding: 8px;
  margin-bottom: 16px;
  overflow: hidden;
  flex: 0 356 ${props => props.four ? '24%' : '32.5%'};
  text-align:left;

`;

const PagesList = ({ pages }) => {
  return (
    <div>
      {
      pages.length
      ? (
        <Section row header center className={ styles.list }>
          {
            pages.map((page) => (
              <Div className={ styles.card } key={ page.title }><PagePreview { ...page } /></Div>
            ))
          }
        </Section>
      )
      : "No posts yet."
    }
    </div>
  )
}

PagesList.propTypes = {
  pages: PropTypes.array.isRequired,
}

export default PagesList
