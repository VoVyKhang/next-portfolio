import { Container, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import * as React from 'react'
import { PostCard } from './post-card'
import { Post } from '../../models'

export function RecentPosts() {
  const postList: Post[] = [
    {
      id: '1',
      title: 'Making a design system from scratch',
      publishedDate: '2022-06-18T12:00:00Z',
      tagList: ['Design', 'Pattern'],
      description: `Amet minim non desernt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. Exercitation veniam conswquat sunt nostrud
      amet.
      `,
    },
    {
      id: '2',
      title: 'Creating pixel perfect icons in Figma',
      publishedDate: '2022-06-18T12:00:00Z',
      tagList: ['Figma', 'Icon Design'],
      description: `Amet minim non desernt ullamco est sit aliqua dolor do amet sint.
      Velit officia consequat duis enim velit mollit. Exercitation veniam conswquat sunt nostrud
      amet.
      `,
    },
  ]

  return (
    <div>
      <Box component="section" bgcolor="secondary.light" pt={2} pb={4}>
        <Container>
          <Stack
            direction="row"
            mb={2}
            justifyContent={{ xs: 'center', md: 'space-between' }}
            alignItems="center"
          >
            <Typography variant="h5">Recent Posts</Typography>
            <Link passHref href="/blog">
              <Typography sx={{ display: { xs: 'none', md: 'inline' } }}>
                View all
              </Typography>
            </Link>
          </Stack>

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={3}
            sx={{
              '& > div': {
                width: {
                  xs: '100%',
                  md: '50%',
                },
              },
            }}
          >
            {postList.map((post) => (
              <Box key={post.id}>
                <PostCard post={post} />
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>
    </div>
  )
}
