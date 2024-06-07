import { BlogPosts } from 'app/components/posts'
import Image from 'next/image';
import beaconLogo from 'app/img/beacon-logo.png';
import Link from 'next/link';

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function WorkBadge({ img, company, title, link }) {
  return (
    <div className="group flex w-full">
      <Link
        href={link}
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-3 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <Image
              alt="avatar"
              src={img}
              height={64}
              width={64}
              sizes="33vw"
              className="h-16 w-16 rounded-full object-contain bg-gray-100 border border-neutral-200 dark:border-neutral-700"
              priority
            />
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-neutral-900 dark:text-neutral-100">
              {company}
            </p>
            <p className="text-sm text-gray-400">
              {title}
            </p>
          </div>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </Link>
    </div>
  );
}

export default function Page() {
  return (
    <section>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          {`Hey 👋 I'm Sintu Boro. I bring a blend of IT consulting, development, and design expertise. 
            I have transformed complex business processes into efficient and 
            user-friendly solutions to help create seamless digital experiences. 
            Explore my work and discover how I bridge the gap between functionality 
            and user-centered design.`}
        </p>
      </div>
      <div className='flex items-center mt-8'>
        <h4 className="font-medium text-xl tracking-tight">current experience</h4>
      </div>
      <div className="pt-4 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <WorkBadge
          img={beaconLogo}
          company="Beacon Technologies, Inc."
          title="IT Consultant/Programmer Analyst IV for Wisconsin DCF"
          link="/work"
        />
      </div>
      <div className='flex items-center mt-8'>
        <h4 className="font-medium text-xl tracking-tight">my blog</h4>
      </div>
      <div className="my-4">
        <BlogPosts page='home' />
      </div>
    </section>
  )
}
