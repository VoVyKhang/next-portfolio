import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import * as React from 'react'
import { getPostList } from '../../utils/posts'
import { Post } from '../../models'

import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import { Container } from '@mui/material'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings/lib'

export interface IBlogDetailPageProps {
  post: Post
}

export default function BlogDetailPage({ post }: IBlogDetailPageProps) {
  if (!post) return
  return (
    <Container>
      <h1>Post detail page</h1>
      <p>{post?.author?.name}</p>
      <p>{post.title}</p>
      <p>{post.description}</p>
      <div dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}></div>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postList = await getPostList()
  return {
    paths: postList.map((post: Post) => ({ params: { slug: post.slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<IBlogDetailPageProps> = async (
  context: GetStaticPropsContext
) => {
  const postList = await getPostList()

  const slug = context.params?.slug
  if (!slug) return { notFound: true }

  const post = postList.find((post) => post.slug === slug)
  if (!post) return { notFound: true }

  const file = await unified()
    .use(remarkParse)
    .use(remarkToc, { heading: 'agenda.*' })
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
    .use(rehypeDocument, { title: 'Blog details page' })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(post.mdContent || '')

  post.htmlContent = file.toString()

  return {
    props: {
      post,
    },
  }
}
