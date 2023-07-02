import * as React from 'react'
import { Post } from '../../models'
import { Box } from '@mui/system'
import { Divider, Stack, Typography } from '@mui/material'
import { format } from 'date-fns'

export interface IBlogItemProps {
  post: Post
}

export function BlogItem({ post }: IBlogItemProps) {
  return (
    <Box>
      <Typography variant="h5" fontWeight="bold">
        {post.title}
      </Typography>

      <Stack my={2} direction="row">
        <Typography variant="body1">
          {format(new Date(post.publishedDate), 'dd MMM yyyy')}
        </Typography>
        <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />
        <Typography variant="body1">{post.tagList.join(',')}</Typography>
      </Stack>

      <Typography variant="body2">{post.description}</Typography>
    </Box>
  )
}
