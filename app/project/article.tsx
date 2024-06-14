import Link from "next/link";

export const Article = ({ project }) => {
  let tags = JSON.parse(project.metadata.tags);

  return (
    <Link href={`/project/${project.slug}`}>
      <article className="p-4 md:p-8">
        <div className="flex justify-between items-center">
          <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-600 dark:text-zinc-200 group-hover:text-neutral-600 dark:group-hover:text-white font-display">
            {project.metadata.title}
          </h2>
          <span className="text-zinc-500 text-xs flex items-center">
            {project.metadata.publishedAt ? (
              <time
                dateTime={new Date(project.metadata.publishedAt).toISOString()}
              >
                {Intl.DateTimeFormat(undefined, {
                  year: "numeric",
                  month: "long",
                }).format(new Date(project.metadata.publishedAt))}
              </time>
            ) : null}
          </span>
        </div>

        <p className="z-20 mt-4 text-sm duration-1000 text-zinc-600 dark:text-zinc-400">
          {project.metadata.summary}
        </p>

        {tags && tags.length > 0 && (
          <div className="flex mt-8">
            {tags.map((tag, index) => (
              <p
                key={index}
                className="text-xs mr-2 px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-zinc-400 dark:text-zinc-400"
              >
                {tag}
              </p>
            ))}
          </div>
        )}

        <p className="transition-all mt-8 hidden text-zinc-500 dark:text-zinc-200 hover:text-zinc-400 dark:hover:text-zinc-50 lg:block">
          Read more <span aria-hidden="true">&rarr;</span>
        </p>
      </article>
    </Link>
  );
};
