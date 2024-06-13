import { notFound } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CustomMDX } from "app/components/mdx";
import { formatDate, getBlogPosts } from "app/blog/utils";
import { baseUrl } from "app/sitemap";
import Link from "next/link";

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }) {
  let posts = getBlogPosts();
  const sortedPosts = posts.sort((a, b) => {
    return (
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
    );
  });

  let postIndex = sortedPosts.findIndex((post) => post.slug === params.slug);

  if (postIndex === -1) {
    notFound();
  }

  let post = posts[postIndex];
  let previousPost = posts[postIndex - 1] || null;
  let nextPost = posts[postIndex + 1] || null;

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.publishedAt)}
        </p>
      </div>
      <article className="mb-10 prose">
        <CustomMDX source={post.content} />
      </article>
      <hr className="text-neutral-200 dark:text-neutral-700" />
      <div className="flex justify-between mt-8">
        {previousPost ? (
          <div className="flex items-end">
            <ChevronLeft
              size={20}
              className="mb-0.5 text-neutral-500 dark:text-neutral-400"
            />
            <Link
              aria-label={`Go to next page: ${previousPost.metadata.title}`}
              className="flex flex-col justify-between text-md"
              href={`/blog/${previousPost?.slug}`}
            >
              <span className="transition-all text-sm mb-1 text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-300">
                Previous
              </span>
              <span className="w-20 sm:w-80 truncate transition-all text-md text-neutral-700 dark:text-neutral-300">
                {previousPost.metadata.title}
              </span>
            </Link>
          </div>
        ) : (
          <span></span>
        )}
        {nextPost ? (
          <div className="flex items-end">
            <Link
              aria-label={`Go to next page: ${nextPost.metadata.title}`}
              className="flex flex-col justify-between text-md"
              href={`/blog/${nextPost?.slug}`}
            >
              <span className="transition-all text-sm mb-1 text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-300">
                Next
              </span>
              <span className="w-20 sm:w-60 md:w-80 truncate transition-all text-md text-neutral-700 dark:text-neutral-300">
                {nextPost.metadata.title}
              </span>
            </Link>
            <ChevronRight
              size={20}
              className="mb-0.5 text-neutral-500 dark:text-neutral-400"
            />
          </div>
        ) : (
          <span></span>
        )}
      </div>
    </section>
  );
}
