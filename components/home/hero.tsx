import { Box, Typography, Button } from '@mui/material'
import { Container, Stack } from '@mui/system'
import Image from 'next/image'
import * as React from 'react'
import avatar from '../../images/avatar.png'

export function HeroSection() {
  return (
    <Box component="section" pt={18} pb={9}>
      <Container>
        <Stack direction="row" justifyContent="flex-start" spacing={8}>
          <Box>
            <Typography component="h1" variant="h3" fontWeight="bold" mb={5}>
              Hi, I am John, <br /> Creative Technologist
            </Typography>
            <Typography mb={5}>
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
