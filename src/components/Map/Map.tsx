import styles from './Map.module.scss';
// import mapImage from '../../assets/img/empty-map.jpg';
import mapImage from '../../assets/img/pngwing.png';

export const Map = () => {
  return (
    <div id="capture" className={styles.map}>
      <img src={mapImage} alt="world map" className={styles.map__img} />
    </div>
  );
};
