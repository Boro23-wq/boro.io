import React from "react";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react"; // Assuming you're using Heroicons

const Scroller = () => {
  return (
    <div className="scroller relative">
      <div className="flex overflow-x-auto space-x-8">
        {/* articles */}
        <div className="flex-shrink-0 min-w-40 md:w-80">
          <h1 className="text-sm mb-4 text-neutral-500">articles</h1>
          <div className="mb-8 content">
            <div className="flex items-center">
              <Link
                href="https://overreacted.io/before-you-memo/"
                className="transition-all text-md text-wrap md:text-wrap font-normal decoration-neutral-200 dark:decoration-neutral-600 underline underline-offset-4 hover:text-neutral-600 dark:hover:text-neutral-200"
                passHref
              >
                Before You memo()
              </Link>
              <ArrowUpRightIcon className="text-neutral-400 ml-1 h-4 w-4" />
            </div>
            <p className="text-wrap md:text-wrap text-md font-normal text-neutral-500 mt-0">
              Rendering optimizations that come naturally.
            </p>
          </div>
          <div className="mb-8 content">
            <div className="flex items-center">
              <Link
                href="https://kentcdodds.com/blog/inversion-of-control"
                className="transition-all text-md text-wrap md:text-wrap font-normal decoration-neutral-200 dark:decoration-neutral-600 underline underline-offset-4 hover:text-neutral-600 dark:hover:text-neutral-200"
                passHref
              >
                Inversion of control
              </Link>
              <ArrowUpRightIcon className="text-neutral-400 ml-1 h-4 w-4" />
            </div>
            <p className="text-wrap md:text-wrap text-md font-normal text-neutral-500 mt-0">
              Make code less nightmare to use and maintain.
            </p>
          </div>
        </div>

        {/* blogs */}
        <div className="flex-shrink-0 min-w-40 md:w-80">
          <h1 className="text-sm mb-4 text-neutral-500">writing</h1>
          <div className="mb-8 content">
            <Link
              href="/blog/netflix-architecture"
              className="transition-all text-md text-wrap md:text-wrap font-normal decoration-neutral-200 dark:decoration-neutral-600 underline underline-offset-4 hover:text-neutral-600 dark:hover:text-neutral-200"
            >
              Netflix streaming
            </Link>
            <p className="text-wrap md:text-wrap text-md font-normal text-neutral-500 mt-0">
              System behind the tremendous scale.
            </p>
          </div>
          <div className="mb-8 content">
            <Link
              href="/blog/module-federation"
              className="transition-all text-md text-wrap md:text-wrap font-normal decoration-neutral-200 dark:decoration-neutral-600 underline underline-offset-4 hover:text-neutral-600 dark:hover:text-neutral-200"
            >
              Module federation
            </Link>
            <p className="text-wrap md:text-wrap text-md font-normal text-neutral-500 mt-0">
              Architecture using reusable components.
            </p>
          </div>
          <div>
            <Link
              href="/blog"
              className="transition-all text-md text-wrap md:text-wrap font-normal decoration-neutral-200 dark:decoration-neutral-600 underline underline-offset-4 hover:text-neutral-600 dark:hover:text-neutral-200"
            >
              All blogs
            </Link>
            <p className="text-wrap md:text-wrap text-md font-normal text-neutral-500 mt-0">
              More insights on design and code.
            </p>
          </div>
        </div>

        {/* projects */}
        <div className="flex-shrink-0 min-w-40 md:w-80">
          <h1 className="text-sm mb-4 text-neutral-500">projects</h1>
          <div className="mb-8 content">
            <div className="flex items-center">
              <Link
                href="/project/carely"
                className="transition-all text-md text-wrap md:text-wrap font-normal decoration-neutral-200 dark:decoration-neutral-600 underline underline-offset-4 hover:text-neutral-600 dark:hover:text-neutral-200"
              >
                Carely
              </Link>
            </div>
            <p className="text-wrap md:text-wrap text-md font-normal text-neutral-500 mt-0">
              Care co-ordination and management portal.
            </p>
          </div>
          <div className="mb-8 content">
            <div className="flex items-center">
              <Link
                href="/project/ui-ux-design"
                className="transition-all text-md text-wrap md:text-wrap font-normal decoration-neutral-200 dark:decoration-neutral-600 underline underline-offset-4 hover:text-neutral-600 dark:hover:text-neutral-200"
              >
                UI/UX Design
              </Link>
            </div>
            <p className="text-wrap md:text-wrap text-md font-normal text-neutral-500 mt-0">
              My interaction with web design and what I've built.
            </p>
          </div>
          <div>
            <div className="flex items-center">
              <Link
                href="/project"
                className="transition-all text-md text-wrap md:text-wrap font-normal decoration-neutral-200 dark:decoration-neutral-600 underline underline-offset-4 hover:text-neutral-600 dark:hover:text-neutral-200"
              >
                All projects
              </Link>
            </div>
            <p className="text-wrap md:text-wrap text-md font-normal text-neutral-500 mt-0">
              More design and development projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scroller;
