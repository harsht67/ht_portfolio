// styles
import './Work.scss'

// components
import Box from './Box'

import { useState, useEffect } from 'react'

import { client, urlFor } from '../../client'

const filters = ['all', 'frontend', 'fullstack']
// const projects = ['portfolio website', 'amazon clone', 'invoice app', 'todo app', 'map API']

function Work() {

    const [works, setWorks] = useState([])

    useEffect(() => {
        const query = '*[_type == "works"]'

        client
            .fetch(query)
            .then(data => setWorks(data))
            
    }, [])

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

                { works.map(work => <Box data={work} /> )}

            </section>

        </div>
    )
}

export default Work