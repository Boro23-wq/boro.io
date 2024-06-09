import Link from "next/link";

export const metadata = {
  title: "Work",
  description: "Read my work.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          As a developer/programmer analyst, I specialize in customizing and
          optimizing software platforms for improved efficiency and user
          experience. I focus on delivering impactful solutions that enhance
          both the functionality and usability of the systems I work with.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl tracking-tighter mb-0!">
          Beacon Technologies, Inc.
        </h2>
        <div className="flex flex-row justify-between">
          <p className="my-0 text-sm text-neutral-500! dark:text-neutral-400!">
            IT Consultant/Programmer Analyst IV
          </p>
          <p className="my-0 text-xs text-neutral-500! dark:text-neutral-400!">
            <i>May, 2024 - Current</i>
          </p>
        </div>
        <p>
          I joined Beacon Technologies as a merger with Smart Solutions. While
          the company name might have changed, the core focus of being part of a
          great team and delivering robust software solutions remains the same.
        </p>
        <ul>
          <li>
            Completed POC phase, developing code for Collibra ingestion.
            Utilized Postman scripts for content upload, reducing upload time by
            30%. Conducted preliminary testing on 10+ sample files, ensuring 99%
            accuracy for import readiness.
          </li>
          <li>
            Implemented workflows and governance flows, translating business
            processes into 10+ efficient workflows within the Collibra platform.
          </li>
          <li>
            Resolved 90% of production issues within a week, ensuring
            uninterrupted operation. Developed script for bulk deletion,
            reducing deletion time by 40%.
          </li>
          <li>
            Streamlined asset management processes, resulting in 50% reduction
            in manual effort.
          </li>
          <li>
            Reviewed 20 existing diagrams, implementing best practices for
            visualizing relationships.
          </li>
        </ul>
        <p>
          Since joining Beacon Tech I have addressed code issues, increased BO
          extraction efficiency by 25%, conducted comprehensive BO extractor
          runs on 50+ files, identified and resolved 60% of existing issues.
        </p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl tracking-tighter mb-0!">
          Smart Solutions, Inc.
        </h2>
        <div className="flex flex-row justify-between">
          <p className="my-0 text-sm text-neutral-500! dark:text-neutral-400!">
            IT Consultant/Programmer Analyst IV
          </p>
          <p className="my-0 text-xs text-neutral-500! dark:text-neutral-400!">
            <i>Sep, 2023 - May, 2024</i>
          </p>
        </div>
        <ul>
          <li>
            Administered and customized the Collibra platform to meet user and
            agency requirements; utilized Python for automating tasks,
            contributing to improved functionalities.
          </li>
          <li>
            Implemented workflows and governance flows, translating business
            processes into 10+ efficient workflows within the Collibra platform.
          </li>
          <li>
            Worked extensively with Collibra platform, utilizing Java and
            configuring APIs to support administration.
          </li>
          <li>
            Contributed to a 20% increase in user interface customization and
            optimization; mapped and optimized workflows, resulting in a 15%
            improvement in business process efficiency.
          </li>
          <li>
            Streamlined asset management processes, resulting in 50% reduction
            in manual effort.
          </li>
        </ul>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

        <h2 className="font-medium text-xl tracking-tighter mb-0!">
          Wave Drowning Prevention Systems
        </h2>
        <div className="flex flex-row justify-between">
          <p className="my-0 text-sm text-neutral-500! dark:text-neutral-400!">
            UI/UX Designer and Developer
          </p>
          <p className="my-0 text-xs text-neutral-500! dark:text-neutral-400!">
            <i>May, 2022 - Sep, 2023</i>
          </p>
        </div>
        <ul>
          <li>
            Demonstrated all stages of the UI/UX development process; created
            hypothetical personas, experience maps, sitemaps and utilized Figma
            to develop wireframes and prototypes taking user and design
            specifications into consideration.
          </li>
          <li>
            Worked seamlessly in an Agile environment; collaborated with senior
            developers to represent information architectures, workflows, UI
            concepts and documented interaction design specifications including
            detailed design rationale.
          </li>
          <li>
            Followed the current best practices and conventions in UX design and
            applied them to build effective and compelling screen-based
            single-page applications (SPA) for WAVE applications using React,
            while assisting the development team.
          </li>
          <li>
            Collaborated effectively with the marketing, development teams and
            senior engineers to achieve quarterly KPIs.
          </li>
        </ul>
      </div>
    </section>
  );
}
