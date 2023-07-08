import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import * as React from 'react'
import { getPostList } from '../../utils/posts'
import { Post } from '../../models'

export interface IBlogDetailPageProps {
  post: Post
}

export default function BlogDetailPage({ post }: IBlogDetailPageProps) {
  if (!post) return
  return (
    <div>
      <h1>Post detail page</h1>
      <p>{post?.author?.name}</p>
      <p>{post.title}</p>
      <p>{post.description}</p>
      <p>{post.mdContent}</p>
    </div>
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

  return {
    props: {
      post,
    },
  }
}
