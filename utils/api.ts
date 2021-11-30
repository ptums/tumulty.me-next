import { format } from 'date-fns'
import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field: string) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (field === 'date') {
      const dateStr = data[field]
      const dateObj = new Date(dateStr)

      const formatedDate = format(dateObj, 'MM/dd/yyyy')
      items['formatDate'] = formatedDate.toString()
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  return (
    slugs
      .map((slug) => getPostBySlug(slug, fields))
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .sort((post1: any, post2: any) => (post1.date > post2.date ? -1 : 1))
  )
}
