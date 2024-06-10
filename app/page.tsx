import Link from "next/link";
import Scroller from "./components/scroller";

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

export default function Page() {
  return (
    <>
      <section>
        {/* intro */}
        <div className="flex items-center mb-4">
          <h4 className="font-medium text-lg mb-5 tracking-normal">
            Sintu Boro
          </h4>
        </div>
        <p className="text-md">
          <span className="heading">Elevating experiences</span>. I bring a
          blend of IT consulting, development, and design expertise. I have
          transformed complex business processes into efficient and
          user-friendly solutions to help create seamless digital experiences.
          Explore my work and discover how I bridge the gap between
          functionality and user-centered design.
        </p>

        {/* highlight */}
        <div className="flex items-center mt-14">
          <h4 className="font-medium text-xl tracking-tight">my highlight</h4>
        </div>
        <div className="my-4">
          <Scroller />
        </div>

        {/* experience */}
        <div className="flex items-center mt-10">
          <h4 className="font-medium text-xl tracking-tight mb-2">
            current experience
          </h4>
        </div>
        <div className="pt-4 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          {`As a developer/programmer analyst, I specialize in customizing and
        optimizing software platforms for improved efficiency and user
        experience. I focus on delivering impactful solutions that enhance both
        the functionality and usability of the systems I work with.`}
        </div>
        <div className="pt-4 flex w-full flex-col space-x-0 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <p>
            Currently, working with the{" "}
            <Link
              className="transition-all decoration-neutral-200 dark:decoration-neutral-600 underline underline-offset-4 dark:hover:text-neutral-200 hover:text-neutral-500"
              href="https://www.beacontechinc.com/"
              target="_blank"
            >
              Beacon Tech
            </Link>{" "}
            team as a Programmer Analyst IV for Wisconsin Department of Children
            and Families (DCF).
          </p>
        </div>
      </section>
    </>
  );
}
