import { parseISO, format } from 'date-fns';

function Date(dateString) {
    const date = parseISO(dateString);
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}

export default function ProjectCard({ repo }) {
    return (<div className="card xl:w-96 bg-base-100 shadow-xl lg:w-96 md:w-72 sm:w-32">
        <div className="card-body">
            <h2 className="card-title">{repo.name}</h2>
            <p> {repo.description}</p>
            <div className='flex flex-row justify-between'>
                <a
                    className="btn btn-primary"
                    href={repo.html_url}
                    aria-label="repo"
                    role="button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className={`fa-sharp fa-solid fa-code-fork hover:text-stone-300`} />
                    Repo
                </a>

                <a
                    className="btn btn-secondary"
                    href={`${repo.html_url}/fork`}
                    aria-label="repo"
                    role="button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Fork
                </a>
            </div>
            <div className="divider"></div>
            <p>Languages</p>
            <p>Last Updated: {Date(repo.updated_at)}</p>
        </div>
    </div>)
}