import { Projects } from "app/components/projects";

export const metadata = {
  title: "Project",
  description: "Read my project.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my project</h1>
      <Projects />
    </section>
  );
}
