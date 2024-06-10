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
          <div className="mb-4">
            <Card key={project.slug}>
              <Article project={project} />
            </Card>
          </div>
        ))}
    </div>
  );
}
