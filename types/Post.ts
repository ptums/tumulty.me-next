export interface Post {
  title: string
  slug: string
  description: string
  tagLine: string
  formatDate?: string
  content?: string
}

export interface FetchPost {
  title?: string
  content?: string
  date?: string
  description?: string
  slug?: string
}
