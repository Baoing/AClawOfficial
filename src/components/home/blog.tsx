import BlogSection from '@/src/components/home/blog-section'
import type { BlogPost } from '@/src/interface'
import getMarkDownData from '@/src/utils/getMarkDownData'

const Blog = () => {
  const posts = getMarkDownData<BlogPost>('src/data/blog', true, 'publishDate')
  const displayPosts = posts.slice(0, 3)

  if (displayPosts.length === 0) return null

  return <BlogSection posts={displayPosts} />
}

export default Blog
