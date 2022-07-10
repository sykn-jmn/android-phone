import React from 'react'
import PropTypes from 'prop-types';
import styles from './PhoneScreen.module.scss';

const PhoneScreen = ({children}) => (
    <div className={[
      styles["PhoneScreen"],
      styles["PhoneScreen-Content"]]
      .join(" ")
    } >
      {children}
    </div>
  )
  
PhoneScreen.propTypes = {
  children: PropTypes.element
}

PhoneScreen.defaultProps = {
  children:(<h1>No Content</h1>)
}

export default PhoneScreen