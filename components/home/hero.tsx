import { Box, Typography, Button } from '@mui/material'
import { Container, Stack } from '@mui/system'
import Image from 'next/image'
import * as React from 'react'
import avatar from '../../images/avatar.png'

export function HeroSection() {
  return (
    <Box component="section" pt={{ xs: 4, md: 18 }} pb={{ xs: 7, md: 9 }}>
      <Container>
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          alignItems={{ xs: 'center', md: 'flex-start' }}
          textAlign={{ xs: 'center', md: 'left' }}
          spacing={8}
        >
          <Box>
            <Typography
              component="h1"
              variant="h3"
              fontWeight="bold"
              mb={{ xs: 3.5, md: 5 }}
            >
              Hi, I am John, <br /> Creative Technologist
            </Typography>
            <Typography mb={{ xs: 3.5, md: 5 }}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud
            </Typography>
            <Button variant="contained" size="large">
              Download Resume
            </Button>
          </Box>
          <Box
            sx={{
              minWidth: '240px',
              width: '100px',
              boxShadow: '-8px 10px',
              color: 'secondary.light',
              borderRadius: '50%',
            }}
          >
            <Image
              src={avatar}
              alt="avatar"
              layout="responsive"
              style={{ borderRadius: '50%' }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
