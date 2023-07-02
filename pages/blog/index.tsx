import React from 'react'
import { getPostList } from '../../utils/posts'
import { GetStaticProps } from 'next'
import { Post } from '../../models'
import { MainLayout } from '../../components/layout'
import { Box } from '@mui/system'
import Link from 'next/link'
import { BlogItem } from '../../components/blog'
import { Container, Divider } from '@mui/material'

export interface IBlogListPageProps {
  posts: Post[]
}

export default function BlogListPage({ posts }: IBlogListPageProps) {
  return (
    <Box>
      <Container>
        <h1>Blog</h1>

        <Box component="ul" sx={{ listStyleType: 'none', padding: 0 }}>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`}>
                <BlogItem post={post} />
              </Link>
              <Divider sx={{ my: 3 }} />
            </li>
          ))}
        </Box>
      </Container>
    </Box>
  )
}

BlogListPage.Layout = MainLayout

export const getStaticProps: GetStaticProps<IBlogListPageProps> = async () => {
  const postList = await getPostList()

  return {
    props: {
      posts: postList,
    },
  }
}
