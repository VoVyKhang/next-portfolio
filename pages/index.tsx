import { Box } from '@mui/system'
import { NextPageWithLayout } from '../models/common'
import { MainLayout } from '../components/layout'
import { useRouter } from 'next/router'
import { HeroSection, RecentPosts } from '../components/home'

const Home: NextPageWithLayout = () => {
  const router = useRouter()

  return (
    <Box>
      <HeroSection />
      <RecentPosts />
    </Box>
  )
}

Home.Layout = MainLayout

export default Home
