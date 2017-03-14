import React, { PropTypes } from "react"
import cx from "classnames"
import mugshot from "../../assets/me.jpg"
import styles from "./index.css"

const Avatar = ({ className }) => (
  <img
    className={ cx({
      [className]: className,
      [styles.avatar]: true,
    }) }
    src={mugshot} alt=""
  />
)

Avatar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Avatar
