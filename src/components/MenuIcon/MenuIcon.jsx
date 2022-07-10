import React from 'react'
import PropTypes from 'prop-types'
import styles from './MenuIcon.module.scss';

const MenuIcon = ({notifCount, iconSrc, alt, label, blank}) => {
  if(blank){
    return <div className={styles["MenuIcon"]}/>
  }
  return (
    <div className={styles["MenuIcon"]}>
      <div className={styles["AppIcon"]}>
        {notifCount > 0 && <div className={styles["AppIcon-NotifCount"]}>{notifCount}</div>}
        <img 
          src={iconSrc} 
          alt={alt} 
          className={styles["IconImg"]}
        />
      </div>
      {label && <p className={styles["MenuIcon-Label"]}>{label}</p>}
    </div>
  )
}
  MenuIcon.propTypes = {
    notifCount: PropTypes.number,
    iconSrc: PropTypes.string,
    alt: PropTypes.string,
    label: PropTypes.string,
    blank: PropTypes.bool
  }
  
  MenuIcon.defaultProps = {
    notifCount: 99,
    iconSrc: "/icons/messenger.webp",
    alt: "Messenger",
    label: "",
    blank: false
  }
  

export default MenuIcon