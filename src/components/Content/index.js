import React, { PropTypes } from "react"
import MTRC from 'markdown-to-react-components';
import {renderCustomComponents} from 'react-in-markdown';
// import ReactDOM from 'react-dom';
import styles from "./index.css"

const Content = (props) => (

  <div className={ styles.content }>
    { props.children }
  </div>
)

Content.propTypes = {
  children: PropTypes.node,
}

export default Content
