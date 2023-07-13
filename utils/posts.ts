import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { Post } from '../models'

export async function getPostList(): Promise<Post[]> {
  const BLOG_FOLDER = path.join(process.cwd(), 'blogs')
  const fileNameList = fs.readdirSync(BLOG_FOLDER)

  let postList: Post[] = []

  for (const fileName of fileNameList) {
    const filePath = path.join(BLOG_FOLDER, fileName)
    const fileContent = fs.readFileSync(filePath)
    const { data, excerpt, content } = matter(fileContent, {
      excerpt_separator: '<!-- truncate-->',
    })

    postList.push({
      id: fileName,
      title: data.title,
      slug: data.slug,
      thumbnailUrl: data.image,
      author: {
        name: data.author,
        title: data.author_title,
        profileUrl: data.author_url,
        avatarUrl: data.author_image_url,
      },
      tagList: data.tags,
      publishedDate: data.date,
      description: excerpt || '',
      mdContent: content,
    })
  }

  return postList
}
