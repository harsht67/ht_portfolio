// styles
import './Works.scss'

// components
import Box from './Box'

import { useState, useEffect } from 'react'

import { client, urlFor } from '../../client'

const filters = ['all', 'frontend', 'fullstack']

function Works() {

    const [works, setWorks] = useState([])

    const [filterWorks, setFilterWorks] = useState([])

    const [currFilter, setCurrFilter] = useState('all')

    // fetch all works
    useEffect(() => {
        const query = '*[_type == "works"]'

        client
            .fetch(query)
            .then(data => {
                setWorks(data)
                setFilterWorks(data)
            })
            
    }, [])

    // filters work wrt to current filter 
    const filterFunc = (filter) => {
        console.log('>>>>>>'+filter)

        if(filter=='all') {
            setFilterWorks(works)
        }
        else {
            setFilterWorks(works.filter(work => work.type==filter))
        }

    }

    // changes current filter
    const changeFilter = (filter) => {
        setCurrFilter(filter)

        filterFunc(filter)
    }

    return (
        <div className="works">

            <h1 className="works__title title">
                Previous work
            </h1>

            <ul className="works__filters text">

                { filters.map(filter => (
                    <li 
                        key={filter}
                        className={currFilter==filter && 'active'}
                        onClick={() => changeFilter(filter)}
                    >
                        {filter}
                    </li>
                )) }

            </ul>

            <section className="works__content">

                { filterWorks.map(work => <Box data={work} /> )}

            </section>

        </div>
    )
}

export default Works