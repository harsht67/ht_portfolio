// styles
import './Work.scss'

// components
import Project from './Project'

const filters = ['all', 'frontend', 'fullstack']

const projects = ['portfolio website', 'amazon clone', 'invoice app', 'todo app', 'map API']

function Work() {
    return (
        <div className="work">

            <h1 className="work__title">
                Previous work
            </h1>

            <ul className="work__filters">
                { filters.map(filter => (
                    <li key={filter}>
                        {filter}
                    </li>
                )) }
            </ul>

            <section className="work__content">

                { projects.map(project => <Project data={project} /> )}

            </section>

        </div>
    )
}

export default Work