import { getProjects } from "app/project/utils";
import { Card } from "./card";
import { Article } from "app/project/article";

export function Projects() {
  let allProjects = getProjects();

  return (
    <div>
      {allProjects
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((project) => (
          <div key={project.slug} className="mb-6">
            <Card>
              <Article project={project} />
            </Card>
          </div>
        ))}
    </div>
  );
}
