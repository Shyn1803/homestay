import { getData } from 'utils/global';
// import Image from 'components/Image';
import HomestayInformation from './homestayInformation';
import styles from './styles.module.scss';

function PopularHomeStay() {
  const result = getData('/api/homestay/popular', {
    onError: () => ({
      data: [],
      status: 'FAIL',
    }),
  });

  console.log('result: ', result);

  return (
    <div className={styles.popularHomeStaySection}>
      <div className='container'>
        <div className='section-headline-wrapper'>
          <div className='line-decorator' />
          <div className='caption-section'>
            <span>POPULAR</span> HOMESTAYS
          </div>
          <button className='button-view-more' type='button'>
            View more
          </button>
        </div>
        <div className='description-section'>
          Lorem Ipsum is simply dummy text of the printing and type setting
          industry. Lorem Ipsum has been the industry's standard
        </div>
        <div className='homestays-container'>
          <div className='row'>
            {result?.data?.map(homestayData => (
              <div className='col-xl-6'>
                <HomestayInformation data={homestayData} />;
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularHomeStay;
