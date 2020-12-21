import Image from 'components/Image';
import styles from './homestayInformation.module.scss';

function HomestayInformation({ data }) {
  return (
    <div className={styles.homestayInformation}>
      <div className='left'>
        <Image source={data?.banner} alt='banner-homestay' />
        <div className='background-animation' />
      </div>
      <div className='right'>
        <div className='homestay-name'>{data?.name}</div>
        <div className='location-wrapper'>
          <div className='icon'>
            <Image source='/assets/icons/map-marker.svg' alt='location' />
          </div>
          <div className='address'>{data?.location}</div>
        </div>
        <div className='space-and-rating'>
          <div className='space-wrapper'>
            <div className='icon'>
              <Image source='/assets/icons/hotel-solid.svg' alt='space' />
            </div>
            <div className='space'>{data?.space}</div>
          </div>
          {/* <div className='rating-wrapper'>
            <div className='icon'>
              <Image source='/assets/icons/hotel-solid.svg' alt='space' />
            </div>
            <div className='space'>{data?.space}</div>
          </div> */}
        </div>
        <div className='short-description'>{data?.shortDescription}</div>
      </div>
    </div>
  );
}

export default HomestayInformation;
