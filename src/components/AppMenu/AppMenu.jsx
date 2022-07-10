import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import styles from './AppMenu.module.scss'
import MenuIcon from '../MenuIcon/MenuIcon'
import { selectApps } from '../../redux/slices/iconsSlice'

const AppMenu = () => {
  const apps = useSelector(selectApps);
  const grid = new Array(6).fill(new Array(4).fill(null));
  return (
    <div className={styles["AppMenu"]}>
      {
        apps.map(app=>
          <MenuIcon 
            iconSrc={app.iconImg}
            alt={app.name}
            label={app.name}
            key={app.id}
            notifCount={app.notifCount}
          />
        )
      }
    </div>
  )
}

AppMenu.propTypes = {}

export default AppMenu