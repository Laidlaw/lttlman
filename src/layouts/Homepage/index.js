import React from "react"

import LatestPosts from "../../components/LatestPosts"
import Page from "../Page"

const Homepage = (props) => {
  return (
    <Page { ...props }>
      Curiousity &amp; sheer stubborness led me into web development. But I truly love working with people so I found myself moving closer to the start of the product lifecycle, where the ideas
      <errata tag={props.insert} /> emerge from collaboration.
      <LatestPosts />
    </Page>
  )
}

export default Homepage
