import { getData } from 'utils/global';
import Image from 'components/Image';
import Header from 'components/Header';
// import Search from 'components/Search';
import styles from './styles.module.scss';

function HomePageBanner() {
  const result = getData('/api/hello', {
    onError: () => ({
      data: [],
      status: 'FAIL',
    }),
  });

  console.log('result: ', result);

  return (
    <div className={styles.homepageBanner}>
      <div className='background'>
        <Image
          source='/assets/homepage/HomepageBanner.png'
          source2x='/assets/homepage/HomepageBanner-2x.png'
          alt='banner'
        />
        <div className='bg-filter' />
      </div>
      <div className='sperator-header' />
      <Header />
      <div className='content container'>
        <h2 className='page-headline'>SEARCH FOR BEST HOMESTAYS</h2>
        {/* <Search /> */}
        <div className='convenience-wrapper'>
          <div className='convenient'>
            <div className='icon-wrapper'>
              <Image source='/assets/icons/funnel-dollar-solid.svg' />
            </div>
            <div className='caption-wrapper'>
              <h4 className='title'>BEST PRICE FILTERS</h4>
              <div className='description'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
          </div>
          <div className='convenient'>
            <div className='icon-wrapper'>
              <Image source='/assets/icons/searchengin-brands.svg' />
            </div>
            <div className='caption-wrapper'>
              <h4 className='title'>BEST PRICE FILTERS</h4>
              <div className='description'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
          </div>
          <div className='convenient'>
            <div className='icon-wrapper'>
              <Image source='/assets/icons/poll-solid.svg' />
            </div>
            <div className='caption-wrapper'>
              <h4 className='title'>BEST PRICE FILTERS</h4>
              <div className='description'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageBanner;
