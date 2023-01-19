import ProjectCard from "./ProjectCard";
export default function Projects({ repoList }) {
    return (
          <div>
                <h1 className="text-4xl font-bold p-5 pb-6 sm:text-6xl">Projects</h1>
          </div>
        <div id='projects' className="flex-col overflow-auto justify-center container lg:flex-row">
            <div className="grid gap-4 xl:grid-cols-4 xl:p-20 md:grid-cols-2 md:p-10 sm:grid-cols-1 sm:p-0">
                {repoList.map((repo, index) => (
                    index < 12 &&
                    <ProjectCard key={index} repo={repo} />
                ))}
            </div>
        </div>
    )
}
