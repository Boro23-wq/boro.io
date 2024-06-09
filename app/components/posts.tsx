import Link from "next/link";
import { formatDate, getBlogPosts } from "app/blog/utils";

type BlogPost = {
  slug: string;
  metadata: {
    publishedAt: string;
    title: string;
  };
};

type BlogPostsProps = {
  page: string;
};

export function BlogPosts({ page }: BlogPostsProps) {
  let allBlogs: BlogPost[] = getBlogPosts();

  const isHomePage = page === "home";

  const sortedBlogs = allBlogs.sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  const blogsToDisplay = isHomePage ? sortedBlogs.slice(0, 5) : sortedBlogs;

  const groupBlogsByYear = (blogs: BlogPost[]): [string, BlogPost[]][] => {
    const grouped = blogs.reduce((acc: { [key: string]: BlogPost[] }, blog) => {
      const year = new Date(blog.metadata.publishedAt).getFullYear();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(blog);
      return acc;
    }, {});

    return Object.entries(grouped).sort(
      ([yearA], [yearB]) => parseInt(yearB) - parseInt(yearA)
    );
  };

  const groupedBlogs = groupBlogsByYear(blogsToDisplay);

  return isHomePage ? (
    <div>
      {blogsToDisplay
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col items-center md:flex-row space-x-0 md:space-x-2">
              <p className="text-sm text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  ) : (
    <div className="blurry">
      {groupedBlogs.map(([year, posts]) => (
        <div key={year}>
          <div className="flex relative">
            <p className="text-neutral-400 dark:text-neutral-600 w-[100px] tabular-nums relative">
              {year}
            </p>
            <hr className="ml-4 absolute left-10 right-0 top-1/2 transform -translate-y-1/2 border-t border-neutral-200 dark:border-neutral-800" />
          </div>
          {posts.map((post) => {
            const publishedDate = new Date(post.metadata.publishedAt);
            const month = String(publishedDate.getMonth() + 1).padStart(2, "0"); // Get the month and pad with leading zero if needed
            const date = String(publishedDate.getDate()).padStart(2, "0"); // Get the date and pad with leading zero if needed

            return (
              <Link
                key={post.slug}
                className="mb-5 flex flex-col space-y-1"
                href={`/blog/${post.slug}`}
              >
                <div className="w-full flex flex-col justify-between md:flex-row space-x-0 md:space-x-2">
                  <p className="ml-14 title transition-all text-neutral-600 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200 tracking-tight">
                    {post.metadata.title}
                  </p>
                  <p className="text-neutral-400 dark:text-neutral-600">
                    {month}/{date}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
}
