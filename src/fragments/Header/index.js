import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import Svg from 'react-svg-inline'
import handleClickAway from '../../utils/handleClickAway'
import gitHubSvg from '../../assets/icons/github.svg'
import laidlawSvg from '../../assets/icons/laidlaw.svg'
// import Logo from '../../assets/images/serverless_logo.png'
import styles from './Header.css'
// import Auth from '../../components/Auth/Auth'

const propTypes = {
  fullWidth: PropTypes.bool
}

export default class Header extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      sideNavOpen: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }
  componentDidMount() {
    document.body.addEventListener('click', this.closeNav)
  }
  componentWillUnmount() {
    document.body.removeEventListener('click', this.closeNav)
  }
  closeNav(e) {
    const toggleNode = this.refs.toggle
    const isOutsideClick = handleClickAway(toggleNode, e)
    if (toggleNode && isOutsideClick) {
      this.setState({
        sideNavOpen: false
      })
    }
  }
  handleClick() {
    this.setState({
      sideNavOpen: !this.state.sideNavOpen
    })
  }
  render() {
    const { fullWidth } = this.props
    const { sideNavOpen } = this.state
    const mobileNav = (sideNavOpen) ? styles.open : ''
    const openClass = (sideNavOpen) ? styles.animate : ''
    const containerStyle = (fullWidth) ? styles.fullWidth : ''
    return (
      <header className={styles.header}>
        <div className={styles.bumper} />
        <div className={styles.navFixed}>
          <div className={`${styles.navWrapper} ${containerStyle}`}>
            <div className={styles.navLeft}>
              <Link to='/' className={styles.logo}>
                <Svg svg={laidlawSvg}  />
                {/* <img alt='Serverless logo' src={Logo} draggable='false' /> */}
              </Link>
            </div>
            <div ref='toggle' onClick={this.handleClick} className={styles.toggle}>
              <div className={styles.ham}>
                <div className={`${styles.bar} ${openClass}`} />
              </div>
            </div>
            <nav className={`${styles.navRight} ${mobileNav}`}>
              <ul className={styles.navItems}>
                <li className={styles.navItem}>
                  <Link to='/about' className={styles.link}>
                    About
                  </Link>
                </li>

                <li className={styles.navItem}>
                  <span className={styles.link}>
                    Case Studies <svg className={styles.caret} width='8' height='4' viewBox='62 7 10 6'><path d='M71.884 7.698l-4.56 5.116c-.013.022-.008.05-.026.07-.083.084-.192.12-.3.116-.106.004-.214-.033-.295-.117-.02-.02-.014-.047-.028-.068L62.115 7.7c-.154-.16-.154-.42 0-.58.156-.16.408-.16.563 0L67 11.97l4.322-4.85c.155-.16.406-.16.56 0 .157.16.157.418.002.578z' fill='#fff' /></svg>
                  </span>
                  <ul className={styles.subNavItems}>
                    <li>
                      <a href='https://gitter.im/serverless/serverless' target='_blank' rel='noopener noreferrer' className={styles.link}>
                        Chat on Gitter
                      </a>
                    </li>
                    <li>
                      <a href='http://forum.serverless.com/' target='_blank' rel='noopener noreferrer' className={styles.link}>
                        Discuss on the Forums
                      </a>
                    </li>
                    <li>
                      <Link to='/community/meetups' className={`${styles.link} ${styles.noMobile}`}>
                        Join a Meetup
                      </Link>
                    </li>
                    <li>
                      <Link to='/partners' className={styles.link}>
                        Partners
                      </Link>
                    </li>
                    <li>
                      <Link to='/enterprise' className={styles.link}>
                        Enterprise
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={styles.navItem}>
                  <span className={styles.link}>
                    Company <svg className={styles.caret} width='8' height='4' viewBox='62 7 10 6'><path d='M71.884 7.698l-4.56 5.116c-.013.022-.008.05-.026.07-.083.084-.192.12-.3.116-.106.004-.214-.033-.295-.117-.02-.02-.014-.047-.028-.068L62.115 7.7c-.154-.16-.154-.42 0-.58.156-.16.408-.16.563 0L67 11.97l4.322-4.85c.155-.16.406-.16.56 0 .157.16.157.418.002.578z' fill='#fff' /></svg>
                  </span>
                  <ul className={styles.subNavItems}>
                    <li>
                      <Link to='/company/team' className={styles.link}>
                        Meet the team
                      </Link>
                    </li>
                    <li>
                      <a href='https://jobs.lever.co/serverless' target='_blank' rel='noopener noreferrer' className={`${styles.link}`}>
                        We are hiring
                      </a>
                    </li>
                    {/* <li>
                      <Link to='/company/contact' className={styles.link}>
                        Contact
                      </Link>
                    </li>
                     */}
                  </ul>
                </li>
                <li className={styles.navItem}>
                  <Link to='/blog' className={styles.link}>
                    Blog
                  </Link>
                </li>

                <li className={`${styles.navItem} ${styles.noMobile}`}>
                  <a href='https://www.github.com/serverless/serverless' target='_blank' rel='noopener noreferrer' className={styles.link}>
                    <Svg svg={gitHubSvg} cleanup />
                  </a>
                </li>

              </ul>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}

Header.propTypes = propTypes
