import Head from 'next/head';
import { getData } from '@/utils/global';
import HomepageBanner from '@/components/HomepageBanner';
import PopularHomeStay from '@/components/PopularHomeStay';

function HomePage() {
  return (
    <div>
      <Head>
        <title>Home Stay</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomepageBanner />
      <PopularHomeStay />
    </div>
  );
}

export default HomePage;
