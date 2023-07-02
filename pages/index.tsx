import { Box } from '@mui/system'
import { NextPageWithLayout } from '../models/common'
import { MainLayout } from '../components/layout'
import { useRouter } from 'next/router'
import { FeaturedWorks, HeroSection, RecentPosts } from '../components/home'
import { Seo } from '../components/common/'

const Home: NextPageWithLayout = () => {
  const router = useRouter()

  return (
    <Box>
      <Seo
        data={{
          title: 'NextJS | Porfolio',
          thumbnalUrl: '',
          url: '',
          description: 'NextJS Project',
        }}
      />

      <HeroSection />
      <RecentPosts />
      <FeaturedWorks />
    </Box>
  )
}

Home.Layout = MainLayout

export default Home
