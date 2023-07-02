import path from 'path'
import fs from 'fs'

export async function getPostList() {
  const BLOG_FOLDER = path.join(process.cwd(), 'blogs')
  const fileNameList = fs.readdirSync(BLOG_FOLDER)

  for (const fileName of fileNameList) {
    const filePath = path.join(BLOG_FOLDER, fileName)
    const fileContent = fs.readFileSync(filePath)
  }

  return []
}
