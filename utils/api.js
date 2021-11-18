import fs from 'fs'
import { join } from 'path'
import { format } from 'date-fns'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if(field === 'date') {
      const dateStr = data[field];
      const dateObj = new Date(dateStr);
      console.log(dateStr)

      const formatedDate = format(dateObj, 'MM/dd/yyyy');
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
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return posts
}