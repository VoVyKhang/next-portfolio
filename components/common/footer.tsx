import * as React from 'react'
import { Box } from '@mui/system'
import { Icon, Typography, Stack } from '@mui/material'
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material'

export function Footer() {
  const socialLinks = [
    {
      icon: Facebook,
      url: 'https://facebook.com/',
    },
    {
      icon: Twitter,
      url: 'https://twitter.com/',
    },
    {
      icon: Instagram,
      url: 'https://instagram.com/',
    },
    {
      icon: LinkedIn,
      url: 'https://linkedin.com/',
    },
  ]

  return (
    <Box component={'footer'} py={2} textAlign="center">
      <Stack direction="row" justifyContent="center">
        {socialLinks.map((item, index) => (
          <Box
            key={index}
            component="a"
            href={item.url}
            p={2}
            target="_blank"
            rel="noopenner noreferrer"
          >
            <Icon component={item.icon} fontSize="large" />
          </Box>
        ))}
      </Stack>
      <Typography>
        Copyright c{new Date().getFullYear()} All rights reserved
      </Typography>
    </Box>
  )
}
