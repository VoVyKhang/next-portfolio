import { Box } from '@mui/system'
import { NextPageWithLayout } from '../models/common'
import { MainLayout } from '../components/layout'
import { useRouter } from 'next/router'

const Home: NextPageWithLayout = () => {
  const router = useRouter()

  return <Box>Home Page</Box>
}

Home.Layout = MainLayout

export default Home
