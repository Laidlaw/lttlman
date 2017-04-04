import React, { PropTypes } from "react"
import { BodyContainer, joinUri, Link } from "phenomic"
import Helmet from "react-helmet"
import styled from 'styled-components'
import classnames from 'classnames'
import Part from '../../components/Part'
// import Marginotes from 'react-marginotes'
// import getCustomScripts from '../../fragments/CustomScripts'
// import Header from '../../fragments/Header'

import warning from "warning"

// import Nav from "../../components/Nav/NavPage"
import { Avatar } from "rebass"

import Button from "../../components/Button"
import Loading from "../../components/Loading"
import styles from "./index.css"


const Title = styled.h1`
  color: $colorNeutralLight;
  /*text-shadow:
    0 0 10px var(--colorPrimaryDark),
    0 0 6px var(--colorNeutralDark),
    0 0 2px var(--colorNeutralDark)
  ;*/
  font-weight: 400;
  letter-spacing: 1px;
  margin-bottom: 0;
  color: ${props => props.primary ? '#f8f8f8' : 'palevioletred'};
`;


const width = {
  full: '100%',
  header: '96rem',
  content: '60rem'
}


const Page = (
  {
    __filename,
    __url,
    head,
    body,
    header,
    footer,
    children,
    className,
    fullWidth,
    isLoading,
  },
  {
    metadata: { pkg },
  }
) => {
  warning(
    typeof head.title === "string",
    `Your page '${ __filename }' needs a title`
  )

  let metaTitle
  let meta
  let wrapperClass = (fullWidth) ? styles.fullWidth : styles.page

  // const metaTitle = head.metaTitle ? head.metaTitle : head.title

  // let Link = ({ children, href="#" }) => (
  //   <a href={href}>{children}</a>
  // );
  // Link = Marginotes(Link);

  // let Span = ({ children }) => (
  //     <span style={{color: "blue"}}>{children}</span>
  // );
  // Span = Marginotes(Span);

  const socialImage = head.hero && head.hero.match("://") ? head.hero
    : joinUri(process.env.PHENOMIC_USER_URL, head.hero)

  if (!isLoading && head) {
    const uri = joinUri(process.env.PHENOMIC_USER_URL, __url)
    metaTitle = head.metaTitle || head.title
    meta = [
      { property: "og:type", content: "article" },
      { property: "og:title", content: metaTitle },
      { property: "og:url", content: uri },
      { property: "og:image", content: socialImage },
      { property: "og:description", content: head.description },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: metaTitle },
      { name: "twitter:creator", content: `@${ pkg.twitter }` },
      { name: "twitter:description", content: head.description },
      { name: "twitter:image", content: socialImage },
      { name: "description", content: head.description },
    ]
    wrapperClass = (head.fullWidth || fullWidth) ? styles.fullWidth : styles.page
  }

  // const pageClass = (head) ? `layout-${head.layout.toLowerCase()}` : ''
  const classes = classnames(wrapperClass)
  // const customScripts = getCustomScripts(head)

  return (
    <div >
      <Helmet title={ metaTitle } meta={ meta } />
      {
        <Part full className={ styles.hero }
        style={ head.hero && {
          background: `#111 url(${ head.hero }) 50% 50% / cover`,
        } }>
          <Part content center className={styles.header}>
                {
                  head.avatar &&
                    <Part center >
                      <Avatar circle size={200} src={head.avatar} ></Avatar>
                    </Part>
                }
                {
                  head.tagline &&
                  <Title primary className={ styles.centered }>{ head.tagline }</Title>
                }
                {
                  !head.tagline &&
                  <Title primary>{ head.title }</Title>
                }
                {
                  head.cta &&
                  <Link to={ head.cta.link }>
                    <Button className={ styles.cta } light { ...head.cta.props }>
                      { head.cta.label }
                    </Button>
                  </Link>
                }
          </Part>
        </Part>
      }
        <Part full>
          { header }
            <Part content className={ styles.body + " " + styles.pageContent }>
              {
                isLoading
                ? <Loading />
                : <BodyContainer>{ body }</BodyContainer>
              }
            </Part>
          </Part>
          { children }
          { footer }
      </div>
  )
}

Page.propTypes = {
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  phenomicLoading: PropTypes.bool,
  __filename: PropTypes.string,
  __url: PropTypes.string,
  head: PropTypes.object.isRequired,
  body: PropTypes.string,
  header: PropTypes.element,
  footer: PropTypes.element,
}

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
}
Page.hasLoadingState = true
export default Page
