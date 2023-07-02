import * as React from 'react'
import { Card, CardContent, Typography, Divider, Stack } from '@mui/material'
import { Post } from '../../models'
import { format } from 'date-fns'
import { BlogItem } from '../blog'

export interface IPostCardProps {
  post: Post
}

export function PostCard({ post }: IPostCardProps) {
  if (!post) return null

  return (
    <Card>
      <CardContent>
        <BlogItem post={post} />
      </CardContent>
    </Card>
  )
}
