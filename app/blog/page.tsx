import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Through this blog, I offer insights, tips, updates on trends and best practices.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      </div>
      <BlogPosts page='blog' />
    </section>
  )
}
