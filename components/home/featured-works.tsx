import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import * as React from 'react'
import { PostCard } from './post-card'
import { Work } from '../../models'
import { WorkList } from '../work'

export function FeaturedWorks() {
  const workList: Work[] = [
    {
      id: '1',
      title: 'Designing Dashboard',
      createdAt: '1648363391671',
      updatedAt: '1648363391671',
      tagList: ['Dashboard'],
      shortDescription: `Amet minim non desernt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. Exercitation veniam conswquat sunt nostrud
      amet.
      `,
      fullDescription: '',
      thumbnailUrl:
        'https://res.cloudinary.com/dlmrnnhm4/image/upload/v1688104989/learn-nextjs/image1_o7k8en.jpg',
    },
    {
      id: '2',
      title: 'Vibrant Portraits of 2020',
      createdAt: '1648363391671',
      updatedAt: '1648363391671',
      tagList: ['Illustration'],
      shortDescription: `Amet minim non desernt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. Exercitation veniam conswquat sunt nostrud
      amet.
      `,
      fullDescription: '',
      thumbnailUrl:
        'https://res.cloudinary.com/dlmrnnhm4/image/upload/v1688104989/learn-nextjs/image1_o7k8en.jpg',
    },
    {
      id: '3',
      title: '36 Days of Malayalam type',
      createdAt: '1648363391671',
      updatedAt: '1648363391671',
      tagList: ['Typopraphy'],
      shortDescription: `Amet minim non desernt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. Exercitation veniam conswquat sunt nostrud
      amet.
      `,
      fullDescription: '',
      thumbnailUrl:
        'https://res.cloudinary.com/dlmrnnhm4/image/upload/v1688104989/learn-nextjs/image1_o7k8en.jpg',
    },
  ]

  return (
    <div>
      <Box component="section" pt={2} pb={4}>
        <Container>
          <Typography variant="h5">Featured works</Typography>

          <WorkList workList={workList} />
        </Container>
      </Box>
    </div>
  )
}
