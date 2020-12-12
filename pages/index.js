import Head from 'next/head';
import { getData } from '@/utils/global';
import HomepageBanner from '@/components/HomepageBanner';

function HomePage() {
  const result = getData('/api/hello', {
    onError: () => ({
      data: [],
      status: "FAIL",
    }),

  });

  console.log('result: ', result);
  return (
    <div>
      <Head>
        <title>Home Stay</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HomepageBanner />
    </div>
  );
}

export default HomePage;
