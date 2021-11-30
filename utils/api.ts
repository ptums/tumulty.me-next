/* eslint-disable prettier/prettier */
import { format } from 'date-fns'
import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

import { FetchPost } from '../types/Post'

const postsDirectory = join(process.cwd(), '_posts')

export const getPostSlugs = () => fs.readdirSync(postsDirectory)

export const getPostBySlug = (slug: string, fields: string[]) => {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: FetchPost  = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
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

export const getAllPosts = (fields: string[]): FetchPost [] => {
  const slugs = getPostSlugs()
  return slugs.map((slug) => getPostBySlug(slug, fields))
}
