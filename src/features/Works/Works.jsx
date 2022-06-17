// styles
import './Works.scss'

// components
import Box from './Box'

import { useState, useEffect } from 'react'

import { client, urlFor } from '../../client'

const filters = ['all', 'frontend', 'fullstack']
// const projects = ['portfolio website', 'amazon clone', 'invoice app', 'todo app', 'map API']

function Works() {

    const [works, setWorks] = useState([])

    useEffect(() => {
        const query = '*[_type == "works"]'

        client
            .fetch(query)
            .then(data => setWorks(data))
            
    }, [])

    return (
        <div className="works">

            <h1 className="works__title">
                Previous work
            </h1>

            <ul className="works__filters">
                { filters.map(filter => (
                    <li key={filter}>
                        {filter}
                    </li>
                )) }
            </ul>

            <section className="works__content">

                { works.map(work => <Box data={work} /> )}

            </section>

        </div>
    )
}

export default Works