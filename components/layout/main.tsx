import * as React from 'react'
import { LayoutProps } from '../../models/common'
import { Container, Stack } from '@mui/material'
import { Box } from '@mui/system'
import { Header, Footer } from '../common'

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />
      <Box component="main" flexGrow={1}>
        {children}
      </Box>
      <Footer />
    </Stack>
  )
}
