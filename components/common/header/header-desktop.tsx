import { Box, Container, Stack, Typography } from '@mui/material'
import * as React from 'react'
import { ROUTE_LIST } from './routes'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function HeaderDesktop() {
  const router = useRouter()

  return (
    <Box display={{ xs: 'none', md: 'block' }} sx={{ py: 6 }}>
      <Container>
        <Stack direction="row" justifyContent="flex-end">
          {ROUTE_LIST.map((route) => (
            <Link key={route.path} href={route.path} passHref>
              <Typography
                sx={{
                  mr: 2,
                  color: `${
                    router.pathname === route.path ? 'primary.main' : '#000'
                  }`,
                  fontWeight: 'medium',
                }}
              >
                {route.label}
              </Typography>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
