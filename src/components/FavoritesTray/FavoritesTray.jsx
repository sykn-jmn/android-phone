import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux';
import styles from './FavoritesTray.module.scss';
import { selectFavoriteApps } from '../../redux/slices/iconsSlice';
import MenuIcon from '../MenuIcon/MenuIcon';

const FavoritesTray = () => {
  const favorites = useSelector(selectFavoriteApps)
  console.log(favorites);
  return (
    <div className={styles["FavoritesTray"]}>
      {favorites.map(app => (
        <MenuIcon
          iconSrc={app.iconImg}
          alt={app.name}
          key={app.id}
          notifCount={app.notifCount}
        />
      ))}
    </div>
  )
}
FavoritesTray.propTypes = {}

export default FavoritesTray