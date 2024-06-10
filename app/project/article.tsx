import Link from "next/link";

type Props = {
  project: any;
};

export const Article: React.FC<Props> = ({ project }) => {
  return (
    <Link href={`/project/${project.slug}`}>
      <article className="p-4 md:p-8">
        <div className="flex justify-between  items-center">
          <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-500 dark:text-zinc-200 group-hover:text-neutral-600 dark:group-hover:text-white font-display">
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

        <p className="z-20 mt-4 text-sm duration-1000 text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-400 dark:group-hover:text-zinc-200">
          {project.metadata.summary}
        </p>
        <p className="transition-all mt-8 hidden text-zinc-500 dark:text-zinc-200 hover:text-zinc-400 dark:hover:text-zinc-50 lg:block">
          Read more <span aria-hidden="true">&rarr;</span>
        </p>
      </article>
    </Link>
  );
};
