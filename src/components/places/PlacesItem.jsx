import timer from '../../images/timer.svg';
import arrow from '../../images/arrow.svg';

const PlacesItem = ({ name, workingTime, imgPath }) => {
  return (
    <div className="places-item">
      <img className="places-illustration" src={imgPath} alt="" />
      <div className="places-item_name">{name}</div>
      <div className="places-item_info">
        <img src={timer} alt="" />
        <div className="places-item_info-text">{workingTime}</div>
        <a className="places-item_info-link" href="#">
          <img src={arrow} alt="" />
        </a>
      </div>
    </div>
  );
};

export default PlacesItem;
